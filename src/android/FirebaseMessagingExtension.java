package com.outsystems.firebase.messaging.extension;

import android.content.Context;
import androidx.core.app.NotificationManagerCompat;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;

public class FirebaseMessagingExtension extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("hasPermission".equals(action)) {
            this.hasPermission(callbackContext);
            return true;
        }
        return false;
    }

    private void hasPermission(CallbackContext callbackContext) {
        try {
            Context context = cordova.getActivity().getApplicationContext();
            boolean enabled = NotificationManagerCompat.from(context).areNotificationsEnabled();
            callbackContext.success(Boolean.toString(enabled));
        } catch (Exception e) {
            callbackContext.error("Error checking permissions: " + e.getMessage());
        }
    }
}
