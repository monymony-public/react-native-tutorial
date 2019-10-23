---
layout: default
title: 1. 시작하기
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 1
has_children: false
---

# 시작하기

## react-native 설치
```
$ npm install -g react-native-cli
```
[react-native 설치 및 Xcode, Android Studio 설치 자세하게 보기](https://yuddomack.tistory.com/entry/1React-Native-%EC%84%A4%EC%B9%98%EC%99%80-%EC%8B%A4%ED%96%89hello-world)


## 1. 새로운 프로젝트 시작하기

### 새로운 프로젝트 생성
```
$ react-native init AppName
```

### 실행 
개발환경에서 프로젝트를 실행하기 위해서 Xcode와 Android Studio 설치가 필요합니다.
설치가 되어있다는 가정하에 진행하겠습니다. 
 - ios
    ```
    $ react-native run-ios
    ```
 - android
     ```
     $ react-native run-android
     ```
     
## 2. 예제 코드 실행 해보기
```
$ git clone https://github.com/JeffGuKang/react-native-tutorial.git
$ cd Examples/StateManagement/redux_tutorial
$ npm install
$ react-native run-ios
```
### run-ios 실행 시, 다음과 같은 build error가 생겼다면

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

현재 위치가 `Examples/StateManagement/redux_tutorial` 인지 확인합니다.

만일, pod 설치가 되어있지 않다면 [CocoaPod을  설치](https://zeddios.tistory.com/25)한 후 다음을 진행합니다.

```
$ cd ios
$ pod install
```


pod 설치가 완료되면 다시 `Examples/StateManagement/redux_tutorial` 이동해서 실행합니다.
```
$ cd ..
$ react-native run-ios
```