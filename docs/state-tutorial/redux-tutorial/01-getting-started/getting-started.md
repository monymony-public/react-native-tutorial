---
layout: default
title: 1. Getting Started
parent: Redux Tutorial
grand_parent: State Management Tutorial
nav_order: 1
has_children: false
---


# Getting Started

## react-native install
```
$ npm install -g react-native-cli
```
[See detailed installation of counter-native and Xcode and Android Studio](https://yuddomack.tistory.com/entry/1React-Native-%EC%84%A4%EC%B9%98%EC%99%80-%EC%8B%A4%ED%96%89hello-world)


## 1. Get started new project

### Create new project
```
$ react-native init AppName
```

### Run 
Xcode and Ansroid Studio installations are required to run projects in the development environment.
I'll proceed on the assumption that it's installed.

 - ios
    ```
    $ react-native run-ios
    ```
 - android
     ```
     $ react-native run-android
     ```
     
## 2. Run Example
```
$ git clone https://github.com/JeffGuKang/react-native-tutorial.git
$ cd Examples/StateManagement/redux_tutorial
$ npm install
$ react-native run-ios
```
### If the following build error occurs when running-ios:


```
username-ui-MacBook-Pro:redux_tutorial user$ react-native run-ios --simulator='iPhone 8'
info Found Xcode workspace "redux_tutorial.xcworkspace"
info Launching iPhone 8 (iOS 13.1)
info Building (using "xcodebuild -workspace redux_tutorial.xcworkspace -configuration Debug -scheme redux_tutorial -destination id=17294C85-9D00-48CB-A779-65FF63FB3578 -derivedDataPath build/redux_tutorial")
.................
error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening redux_tutorial.xcworkspace. Run CLI with --verbose flag for more details.
User defaults from command line:
    IDEDerivedDataPathOverride = /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/build/redux_tutorial

Build settings from command line:
    TOOLCHAINS = com.apple.dt.toolchain.XcodeDefault

note: Using new build system
note: Planning build
note: Constructing build description
error: /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/Pods/Target Support Files/Pods-redux_tutorialTests/Pods-redux_tutorialTests.debug.xcconfig: unable to open file (in target "redux_tutorialTests" in project "redux_tutorial") (in target 'redux_tutorialTests' from project 'redux_tutorial')
error: /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/Pods/Target Support Files/Pods-redux_tutorialTests/Pods-redux_tutorialTests.debug.xcconfig: unable to open file (in target "redux_tutorialTests" in project "redux_tutorial") (in target 'redux_tutorialTests' from project 'redux_tutorial')
error: /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/Pods/Target Support Files/Pods-redux_tutorialTests/Pods-redux_tutorialTests.debug.xcconfig: unable to open file (in target "redux_tutorialTests" in project "redux_tutorial") (in target 'redux_tutorialTests' from project 'redux_tutorial')
error: /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/Pods/Target Support Files/Pods-redux_tutorialTests/Pods-redux_tutorialTests.debug.xcconfig: unable to open file (in target "redux_tutorialTests" in project "redux_tutorial") (in target 'redux_tutorialTests' from project 'redux_tutorial')
error: /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/Pods/Target Support Files/Pods-redux_tutorial/Pods-redux_tutorial.debug.xcconfig: unable to open file (in target "redux_tutorial" in project "redux_tutorial") (in target 'redux_tutorial' from project 'redux_tutorial')
error: /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/Pods/Target Support Files/Pods-redux_tutorial/Pods-redux_tutorial.debug.xcconfig: unable to open file (in target "redux_tutorial" in project "redux_tutorial") (in target 'redux_tutorial' from project 'redux_tutorial')
error: /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/Pods/Target Support Files/Pods-redux_tutorial/Pods-redux_tutorial.debug.xcconfig: unable to open file (in target "redux_tutorial" in project "redux_tutorial") (in target 'redux_tutorial' from project 'redux_tutorial')
error: /Users/jinsun/practice_dir/react-native-tutorial/Examples/StateManagement/redux_tutorial/ios/Pods/Target Support Files/Pods-redux_tutorial/Pods-redux_tutorial.debug.xcconfig: unable to open file (in target "redux_tutorial" in project "redux_tutorial") (in target 'redux_tutorial' from project 'redux_tutorial')
warning: Capabilities for Signing & Capabilities may not function correctly because its entitlements use a placeholder team ID. To resolve this, select a development team in the redux_tutorial editor. (in target 'redux_tutorial' from project 'redux_tutorial')


** BUILD FAILED **

```

Check if the current location is `Examples/StateManagement/Redux_tutorial`.

If the pod is not installed, [CocoaPod is installed](https://zeddios.tistory.com/25) and then proceed as follows:
```
$ cd ios
$ pod install
```


Installation is complete, Go to `Examples/StateManagement/redux_tutorial` and Run it.
```
$ cd ..
$ react-native run-ios
```

