# My Pet

A calm, colorful care hub for pets and the people who love them. Track medications, vaccinations, deworming, weight, meals, grooming, and health documents for every pet.

**Try the web app:** [tatiana8888.github.io/my-pet](https://tatiana8888.github.io/my-pet/) · **Languages:** English, Русский, Español, Français, Deutsch. Choose a language from the selector in the header; the preference is saved on your device.

## Try it

Open the [live web app](https://tatiana8888.github.io/my-pet/), [`index.html`](index.html) in a modern browser, or download the Android app from the latest [My Pet release](https://github.com/Tatiana8888/my-pet/releases/latest/download/my-pet-android.apk). The web app needs no build step. The Android app bundles the same interface and works offline.

On a first visit, choose a language, add a pet profile, then follow the illustrated guide to create a medication routine and build a health card. The card stores vaccination and deworming dates, weight history, a food diary, grooming visits, and attached records such as vaccination cards and discharge summaries. Returning users go straight to their saved care dashboard. Check off doses when given and review upcoming care. Records, language preference, and document files stay on the device; no account or server is used.

Health documents are private local attachments (PDF, TXT, JPG, PNG, or WebP, up to 10 MB each). Choose a file from a phone or computer, or use the camera capture control where supported. Files are stored in the browser's IndexedDB file store; record details remain in the app's local storage. In **Documents**, download a personal pet health passport, print a treatment schedule, or generate and save an owner-created medical summary in the pet's document list. On Android, exported files use the system save picker and the schedule opens Android's print preview; in a browser, the standard download and print dialogs are used. These generated records are not official travel/vaccination certificates or veterinarian discharge reports. The vet-preparation helper is a local checklist and message template, not live AI or veterinary advice. It organizes observations and questions, and lets the owner copy a draft or open it in WhatsApp, Telegram, or MAX to review and send themselves.

## Calendar account sync

Google Calendar and Yandex Calendar account synchronization is not implemented in this static, local-first release. Existing reminders are shown inside My Pet only; the app does not connect to either calendar or upload pet records. Real account sync requires a deployed backend and an account/session model to securely store provider credentials and per-event sync identifiers, reconcile edits and deletions, and support disconnect/revocation. Google requires an OAuth client, a configured consent screen, and narrowly scoped Calendar API authorization. Yandex 360's published desktop sync instructions use CalDAV with a Yandex-generated app password rather than the same Google OAuth flow; that credential must never be collected or stored in this static app. No OAuth controls are shown until the service and provider credentials are configured.

The public site provides language-specific `?lang=` links, localized page and sharing metadata, canonical and `hreflang` links, a sitemap, and a robots policy. Its schema.org data describes only the multilingual website; it does not claim ratings or store availability.

## Build Android

Install JDK 17 and Android SDK Platform 35, then run `cd android` followed by `gradlew.bat assembleRelease` on Windows or `bash ./gradlew assembleRelease` on macOS/Linux. See [android/README.md](android/README.md) for the APK location, installation steps, and signing details. Pushing a `v*` tag builds the APK and attaches it to a GitHub Release; no repository secrets are required.

## Product references

- [11pets](https://play.google.com/store/apps/details?id=com.m11pets.elevenpets&hl=en-US) highlights medication reminders, appointment scheduling, shareable health records, and vaccination-document storage.
- [PetDesk medication tracking](https://petdesk.com/blog/using-petdesk-to-remember-pet-medications) describes medication regimens, dose schedules and completion history, calendar sync, and refill reminders.
- [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) and [Calendar event sync](https://developers.google.com/workspace/calendar/api/guides/sync) document the credentials and incremental reconciliation a real integration needs.
- [Yandex Calendar sync](https://yandex.com/support/yandex-360/business/calendar/en/sync/sync-desktop) documents CalDAV access and app-password setup.
- [MAX deep links](https://dev.max.ru/help/deeplinks) documents the `:share` link used to open a prefilled message draft.

My Pet applies those common care patterns to the initial scope with an original interface and illustrations. It is not veterinary advice or an official 11pets or PetDesk product.
