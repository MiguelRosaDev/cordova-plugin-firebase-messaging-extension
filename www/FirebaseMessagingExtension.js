var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseMessagingExtension";

module.exports = {
    hasPermission: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "hasPermission", []);
        });
    }
};
