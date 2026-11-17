package com.mypet.app;

import android.app.Activity;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.content.ClipData;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.core.content.FileProvider;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Locale;

public final class MainActivity extends Activity {
    private WebView webView;
    private static final int MAX_DOCUMENT_BYTES = 10 * 1024 * 1024;
    private static final int FILE_CHOOSER_REQUEST = 1001;
    private static final int SAVE_DOCUMENT_REQUEST = 1002;
    private ValueCallback<Uri[]> fileChooserCallback;
    private Uri cameraOutputUri;
    private File cameraOutputFile;
    private byte[] pendingSaveContents;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setStatusBarColor(0xFFF7F8F5);
        getWindow().setNavigationBarColor(0xFF263A36);
        getWindow().getDecorView().setSystemUiVisibility(
                android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);

        webView = new WebView(this);
        webView.setBackgroundColor(0xFFF7F8F5);
        webView.setOverScrollMode(WebView.OVER_SCROLL_NEVER);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        webView.addJavascriptInterface(new DocumentBridge(), "MyPetAndroid");
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileChooserCallback != null) fileChooserCallback.onReceiveValue(null);
                fileChooserCallback = callback;
                if (params.isCaptureEnabled() && acceptsImages(params.getAcceptTypes()) && launchCamera()) {
                    return true;
                }
                return launchFileChooser(params);
            }
        });
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if ("https".equals(uri.getScheme())) {
                    startActivity(new Intent(Intent.ACTION_VIEW, uri));
                    return true;
                }
                return !"file".equals(uri.getScheme());
            }
        });
        setContentView(webView);
        webView.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent result) {
        super.onActivityResult(requestCode, resultCode, result);
        if (requestCode == SAVE_DOCUMENT_REQUEST) {
            completeDocumentSave(resultCode, result);
            return;
        }
        if (requestCode != FILE_CHOOSER_REQUEST) return;

        Uri[] selectedFiles = null;
        if (resultCode == RESULT_OK) {
            if (cameraOutputUri != null && cameraOutputFile != null && cameraOutputFile.length() > 0) {
                selectedFiles = new Uri[] { cameraOutputUri };
            } else if (result != null) {
                selectedFiles = WebChromeClient.FileChooserParams.parseResult(resultCode, result);
            }
        }
        if (fileChooserCallback != null) fileChooserCallback.onReceiveValue(selectedFiles);
        fileChooserCallback = null;
        if (cameraOutputFile != null && (selectedFiles == null || selectedFiles.length == 0
                || cameraOutputUri == null || !cameraOutputUri.equals(selectedFiles[0]))) {
            cameraOutputFile.delete();
        }
        cameraOutputUri = null;
        cameraOutputFile = null;
    }

    private void completeDocumentSave(int resultCode, Intent result) {
        boolean saved = false;
        try {
            Uri destination = resultCode == RESULT_OK && result != null ? result.getData() : null;
            if (destination != null && pendingSaveContents != null) {
                try (java.io.OutputStream stream = getContentResolver().openOutputStream(destination, "w")) {
                    if (stream == null) throw new IOException("Could not open the selected destination");
                    stream.write(pendingSaveContents);
                    stream.flush();
                    saved = true;
                }
            }
        } catch (IOException | SecurityException error) {
            Log.e("MyPet", "Could not save generated health document", error);
        } finally {
            pendingSaveContents = null;
            reportSaveResult(saved);
        }
    }

    @Override
    protected void onDestroy() {
        if (fileChooserCallback != null) fileChooserCallback.onReceiveValue(null);
        fileChooserCallback = null;
        if (webView != null) {
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }

    private boolean launchFileChooser(WebChromeClient.FileChooserParams params) {
        try {
            Intent intent = params.createIntent();
            startActivityForResult(intent, FILE_CHOOSER_REQUEST);
            return true;
        } catch (android.content.ActivityNotFoundException | IllegalArgumentException error) {
            Log.e("MyPet", "Could not open the document picker", error);
            if (fileChooserCallback != null) fileChooserCallback.onReceiveValue(null);
            fileChooserCallback = null;
            return false;
        }
    }

    private boolean launchCamera() {
        try {
            File directory = new File(getCacheDir(), "health-documents");
            if (!directory.isDirectory() && !directory.mkdirs()) return false;
            cameraOutputFile = File.createTempFile("my-pet-camera-", ".jpg", directory);
            cameraOutputUri = FileProvider.getUriForFile(this, getPackageName() + ".files", cameraOutputFile);
            Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
            intent.putExtra(MediaStore.EXTRA_OUTPUT, cameraOutputUri);
            intent.setClipData(ClipData.newRawUri("My Pet camera capture", cameraOutputUri));
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
            if (intent.resolveActivity(getPackageManager()) == null) {
                deleteCameraOutput();
                return false;
            }
            startActivityForResult(intent, FILE_CHOOSER_REQUEST);
            return true;
        } catch (IOException | IllegalArgumentException | android.content.ActivityNotFoundException error) {
            Log.e("MyPet", "Could not start camera capture", error);
            deleteCameraOutput();
            return false;
        }
    }

    private void deleteCameraOutput() {
        if (cameraOutputFile != null) cameraOutputFile.delete();
        cameraOutputFile = null;
        cameraOutputUri = null;
    }

    private boolean acceptsImages(String[] acceptTypes) {
        if (acceptTypes == null) return false;
        for (String type : acceptTypes) {
            if (type != null && (type.toLowerCase(Locale.ROOT).startsWith("image/") || type.contains("image/*"))) {
                return true;
            }
        }
        return false;
    }

    private void reportSaveResult(boolean saved) {
        runOnUiThread(() -> {
            if (webView != null) {
                webView.evaluateJavascript("window.myPetHandleNativeSaveResult && window.myPetHandleNativeSaveResult(" + saved + ")", null);
            }
        });
    }

    private final class DocumentBridge {
        @JavascriptInterface
        public void saveGeneratedDocument(String fileName, String mimeType, String encodedFile) {
            if (encodedFile == null || encodedFile.length() > 14 * 1024 * 1024 || fileName == null
                    || mimeType == null || pendingSaveContents != null) {
                reportSaveResult(false);
                return;
            }
            String extension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase(Locale.ROOT);
            if (!isSupportedDocument(extension, mimeType)) {
                reportSaveResult(false);
                return;
            }
            try {
                byte[] contents = Base64.decode(encodedFile, Base64.DEFAULT);
                if (contents.length == 0 || contents.length > MAX_DOCUMENT_BYTES) {
                    reportSaveResult(false);
                    return;
                }
                pendingSaveContents = contents;
                Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                intent.addCategory(Intent.CATEGORY_OPENABLE);
                intent.setType(mimeType);
                intent.putExtra(Intent.EXTRA_TITLE, fileName.replaceAll("[\\\\/:*?\"<>|]", "_"));
                runOnUiThread(() -> {
                    try {
                        startActivityForResult(intent, SAVE_DOCUMENT_REQUEST);
                    } catch (android.content.ActivityNotFoundException error) {
                        Log.e("MyPet", "Could not start save document picker", error);
                        pendingSaveContents = null;
                        reportSaveResult(false);
                    }
                });
            } catch (IllegalArgumentException | android.content.ActivityNotFoundException error) {
                Log.e("MyPet", "Could not start save document picker", error);
                pendingSaveContents = null;
                reportSaveResult(false);
            }
        }

        @JavascriptInterface
        public void openDocument(String encodedFile, String fileName) {
            if (encodedFile == null || encodedFile.length() > 14 * 1024 * 1024 || fileName == null) {
                showDocumentError();
                return;
            }

            String extension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase(Locale.ROOT);
            String mimeType;
            if ("pdf".equals(extension)) {
                mimeType = "application/pdf";
            } else if ("jpg".equals(extension) || "jpeg".equals(extension)) {
                mimeType = "image/jpeg";
            } else if ("png".equals(extension)) {
                mimeType = "image/png";
            } else if ("webp".equals(extension)) {
                mimeType = "image/webp";
            } else if ("txt".equals(extension)) {
                mimeType = "text/plain";
            } else {
                showDocumentError();
                return;
            }

            File output = null;
            Uri documentUri;
            try {
                byte[] contents = Base64.decode(encodedFile, Base64.DEFAULT);
                if (contents.length == 0 || contents.length > MAX_DOCUMENT_BYTES) {
                    showDocumentError();
                    return;
                }
                File directory = new File(getCacheDir(), "health-documents");
                if (!directory.isDirectory() && !directory.mkdirs()) {
                    showDocumentError();
                    return;
                }
                output = File.createTempFile("my-pet-", "." + extension, directory);
                try (FileOutputStream stream = new FileOutputStream(output)) {
                    stream.write(contents);
                }
                documentUri = FileProvider.getUriForFile(MainActivity.this, getPackageName() + ".files", output);
            } catch (IllegalArgumentException | IOException error) {
                if (output != null) output.delete();
                Log.e("MyPet", "Could not prepare health document", error);
                showDocumentError();
                return;
            }

            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setDataAndType(documentUri, mimeType);
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            runOnUiThread(() -> {
                try {
                    startActivity(Intent.createChooser(intent, "Open health document"));
                } catch (android.content.ActivityNotFoundException error) {
                    showDocumentError();
                }
            });
        }

        @JavascriptInterface
        public void printCurrentPage(String title) {
            runOnUiThread(() -> {
                try {
                    PrintManager printManager = (PrintManager) getSystemService(PRINT_SERVICE);
                    if (printManager == null || webView == null) throw new IllegalStateException("Printing is unavailable");
                    PrintDocumentAdapter adapter = webView.createPrintDocumentAdapter(safePrintTitle(title));
                    printManager.print(safePrintTitle(title), adapter, new PrintAttributes.Builder()
                            .setMediaSize(PrintAttributes.MediaSize.ISO_A4)
                            .setResolution(new PrintAttributes.Resolution("my-pet", "My Pet", 300, 300))
                            .setMinMargins(PrintAttributes.Margins.NO_MARGINS)
                            .build());
                } catch (IllegalStateException error) {
                    Log.e("MyPet", "Could not print the care schedule", error);
                    Toast.makeText(MainActivity.this, "Could not start printing.", Toast.LENGTH_SHORT).show();
                    if (webView != null) webView.evaluateJavascript("window.myPetHandleNativePrintDone && window.myPetHandleNativePrintDone()", null);
                }
            });
        }

        private boolean isSupportedDocument(String extension, String mimeType) {
            return ("html".equals(extension) && "text/html".equals(mimeType))
                    || ("txt".equals(extension) && "text/plain".equals(mimeType))
                    || ("pdf".equals(extension) && "application/pdf".equals(mimeType))
                    || (("jpg".equals(extension) || "jpeg".equals(extension)) && "image/jpeg".equals(mimeType))
                    || ("png".equals(extension) && "image/png".equals(mimeType))
                    || ("webp".equals(extension) && "image/webp".equals(mimeType));
        }

        private String safePrintTitle(String title) {
            return title == null || title.trim().isEmpty() ? "My Pet" : title.replaceAll("[\\r\\n]", " ").trim();
        }

        private void showDocumentError() {
            runOnUiThread(() -> Toast.makeText(MainActivity.this, "Could not open this document.", Toast.LENGTH_SHORT).show());
        }
    }
}
