# My Pet for Android

The Android app is a lightweight native WebView shell around the same My Pet interface. It bundles the website and original illustrations as app assets, so pet profiles and care records work offline and stay in the app's local storage.

## Build locally

Install JDK 17 and Android SDK Platform 35, then run:

From the repository root, run `cd android` followed by `bash ./gradlew assembleRelease` on macOS/Linux, or `gradlew.bat assembleRelease` on Windows. The APK is written to `app/build/outputs/apk/release/my-pet-android.apk`.

The release variant is signed with Gradle's debug signing key for convenient direct installation and demos. It is not a Play Store-signed production release. The GitHub Actions workflow builds the APK on every `v*` tag and attaches it to a GitHub Release at the stable URL used by the app's download button. GitHub Actions' built-in token is sufficient; no repository secrets are required. The hosted runner's debug key is ephemeral, so a later APK may not install as an in-place update over an earlier release.

## Install

Download the APK, open it on an Android device, and allow installation from the browser or file manager when prompted. On first launch, choose a language and add a pet profile. Use **Medications** to add treatments and check off doses, and **Health records** to record vaccinations and grooming with their next due dates.
