#import "FirebaseMessagingExtensionPlugin.h"

@implementation FirebaseMessagingExtensionPlugin

- (void)hasPermission:(CDVInvokedUrlCommand *)command {
    @try {
        UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
        [center getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
            BOOL granted = settings.authorizationStatus == UNAuthorizationStatusAuthorized;

            NSString *isEnabledString = granted ? @"true" : @"false";
            CDVPluginResult *commandResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:isEnabledString];
            [self.commandDelegate sendPluginResult:commandResult callbackId:command.callbackId];
        }];
    } @catch (NSException *exception) {
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR
                                                        messageAsString:[NSString stringWithFormat:@"Error checking permissions: %@", exception.reason]];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
}

@end
