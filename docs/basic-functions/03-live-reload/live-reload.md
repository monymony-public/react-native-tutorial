
# Reloading JavaScript

You can reload your app's JavaScript code instantly without recompiling your app every time to make a change

+ Select "Reload" from the Developer Menu
+ Press `⌘R` (iOS Simulator)
+ Tab `⌘R twice` (Android emulator)

## Automatic reloading

Automatic reloading can be enabled by selecting "Enable Live Reload" from Developer Menu

+ Further step [Hot Reloading](../hot-reload.md)

    + you can keep your app running as new versions of your files are injected into the JavaScript bundle automatically by enabling `Hot Reloading from the Developer Menu

    + This will allow you to persist the app's state through reloads

            There are some instances where hot reloading cannot be implemented perfectly. If you run into any issues. use a full reload to reset your app
        
    + Situations when you will need to rebuild your app

        1. You have added new resources to your native app's bndle such as an image in `Image.scassets` on iOS or the `res/drawable` folder on Android

        2. You have modified native code (Objective-C/Swift on iOS or JAVA/C++ on Android)


# In-app Errors and Warnings

Errors and warning are displayed inside your app in development builds

## Errors

In-app erros are displayed in a full screen alert with a red back inside your app (known as a Red Box)

You can use `console.error()` to manually trigger one.

## Warnings

Warnings will be displayed on screen with a yellow background(known as a Yellow Box)

+ Show more information (Click on the alerts or to dismiss them)

You can use `console.warn()` to trigger a YellowBox

+ Disable YellowBoxes during development
 
    `console.disableYellowBox=true;` 

+ Specific warnings can be ignored programmatically by setting an array of prefixes that should be ignored

    ``` 
    import {YellowBox} from `react-native`;
    YellowBox.ignoreWarnings(['Warning: ...']);
    ```

+ CI/Xcode 
    YellowBoxes can be disabled by setting `IS_TESTING` environment variable

 RedBoxes and YellowBoxes are automatically disabled in release (production) builds

# Chrome Developer Tools (To Debug)

`Note: the React Developer Tools Chrome extension does not work with React Native, but you can use its` [standalone version](live-reload.md#React-developer-tools)


+ Select `Debug JS Remotely` from the Developer Menu [http://localhost:8081/debugger-ui.](http://localhost:8081/debugger-ui.)

+ Select `Tools → Developer Tools` from the Chrome Menu to open the `Developer Tools.`

+ Keyboard shortcuts
 + `⌘⌥I` (macOs)
 + `Ctrl+Shift+I` (Windows)

+ Step further [Pause On Caught Exceptions](https://stackoverflow.com/questions/2233339/javascript-is-there-a-way-to-get-chrome-to-break-on-all-errors/17324511#17324511)














