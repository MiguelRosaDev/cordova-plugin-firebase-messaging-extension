# cordova-plugin-firebase-messaging-extension

Cordova extension plugin that adds the `hasPermission` method (for Android and iOS) to the official `cordova-plugin-firebase-messaging` namespace.

---

## Why this extension?

The official `cordova-plugin-firebase-messaging` repository does not include a dedicated `hasPermission` method to check whether push notification permissions are currently enabled for the application without requesting them.

This extension solves this problem by allowing you to keep using the official/standard Firebase Messaging plugin unmodified while exposing a clean `hasPermission()` method on both Android and iOS.

---

## How It Works

This plugin registers itself under Cordova, declaring a dependency on `cordova-plugin-firebase-messaging`.

Using the `<merges>` tag in `plugin.xml`, it injects `hasPermission` directly into the existing `cordova.plugins.firebase.messaging` namespace.

### Android
Checks notification permission status using Android's `NotificationManagerCompat.from(context).areNotificationsEnabled()`.

### iOS
Checks notification authorization status using iOS `UNUserNotificationCenter` settings (`UNAuthorizationStatusAuthorized`).

---

## Installation

Add this plugin to your Cordova/OutSystems project:

```bash
cordova plugin add cordova-plugin-firebase-messaging-extension
```

For **OutSystems**, specify the Git repository in your Extensibility Configurations JSON:
```json
{
    "plugin": {
        "url": "https://github.com/MiguelRosaDev/cordova-plugin-firebase-messaging-extension.git"
    }
}
```

---

## Usage

Once installed, call it directly on the messaging namespace:

```javascript
cordova.plugins.firebase.messaging.hasPermission()
    .then(function(enabled) {
        console.log("Are notifications enabled?", enabled); // "true" or "false"
    })
    .catch(function(error) {
        console.error("Error checking permissions: ", error);
    });
```

---

## License

MIT License.
