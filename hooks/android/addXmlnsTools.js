#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

module.exports = function(context) {
    const platformRoot = path.join(context.opts.projectRoot, 'platforms/android');
    let manifestPath = path.join(platformRoot, 'app/src/main/AndroidManifest.xml');

    if (!fs.existsSync(manifestPath)) {
        manifestPath = path.join(platformRoot, 'AndroidManifest.xml');
    }

    if (fs.existsSync(manifestPath)) {
        let manifestContent = fs.readFileSync(manifestPath, 'utf8');

        if (!manifestContent.includes('xmlns:tools=')) {
            manifestContent = manifestContent.replace(
                '<manifest',
                '<manifest xmlns:tools="http://schemas.android.com/tools"'
            );
            fs.writeFileSync(manifestPath, manifestContent, 'utf8');
            console.log('[cordova-plugin-firebase-messaging-extension] Added xmlns:tools to AndroidManifest.xml');
        }
    }
};
