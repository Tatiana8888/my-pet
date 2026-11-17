# My Pet

A calm, colorful care hub for pets and the people who love them. Track medications, vaccinations, and grooming visits for every pet in one place.

**Try the web app:** [tatiana8888.github.io/my-pet](https://tatiana8888.github.io/my-pet/) · **Languages:** English, Русский, Español, Français, Deutsch. Choose a language from the selector in the header; the preference is saved on your device.

## Try it

Open the [live web app](https://tatiana8888.github.io/my-pet/), [`index.html`](index.html) in a modern browser, or download the Android app from the latest [My Pet release](https://github.com/Tatiana8888/my-pet/releases/latest/download/my-pet-android.apk). The web app needs no build step. The Android app bundles the same interface and works offline.

From **How it works**, follow the illustrated three-step guide: add a pet, create a medication routine, then keep vaccination and grooming dates close at hand. In the care dashboard, check off doses when given and review upcoming care. Records and language preference stay in browser storage or on the Android device; no account or server is used.

## Build Android

Install JDK 17 and Android SDK Platform 35, then run `cd android` followed by `gradlew.bat assembleRelease` on Windows or `bash ./gradlew assembleRelease` on macOS/Linux. See [android/README.md](android/README.md) for the APK location, installation steps, and signing details. Pushing a `v*` tag builds the APK and attaches it to a GitHub Release; no repository secrets are required.

## Product references

- [11pets](https://play.google.com/store/apps/details?id=com.m11pets.elevenpets&hl=en-US) highlights medication reminders, appointment scheduling, shareable health records, and vaccination-document storage.
- [PetDesk medication tracking](https://petdesk.com/blog/using-petdesk-to-remember-pet-medications) describes medication regimens, dose schedules and completion history, calendar sync, and refill reminders.

My Pet applies those common care patterns to the initial scope with an original interface and illustrations. It is not veterinary advice or an official 11pets or PetDesk product.
