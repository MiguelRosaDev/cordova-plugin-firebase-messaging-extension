#import <Cordova/CDVPlugin.h>
#import <UserNotifications/UserNotifications.h>

@interface FirebaseMessagingExtensionPlugin : CDVPlugin

- (void)hasPermission:(CDVInvokedUrlCommand*)command;

@end
