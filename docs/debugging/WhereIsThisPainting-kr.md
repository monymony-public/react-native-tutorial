---
layout: default
title: WhereIsThisPainting 디버깅 튜토리얼
has_children: true
parent: Debugging (한글)
nav_order: 4
---



# 단계별로 구현하며 배우는 WhereIsThisPainting 리액트 네이티브 디버깅 튜토리얼 

명화에 대한 정보를 알려주는 간단한 앱을 구현해보면서 리액트 네이티브와 디버깅 방법에 대해 배워보는 튜토리얼입니다. 튜토리얼의 대부분은 공식 문서 위주로 참조하였습니다. 

실행환경 : `MacOS Mojave`,` Xcode 10.1`, `Node v10.13.0`

![](/Users/Duck/Project/react-native-tutorial/docs/debugging/images/DebuggingExampleWithRedux.gif)



## React Native 실행 환경 구성

React Native 프로젝트를 실행하기 위해서 다음과 같은 사전 준비가 필요합니다.

1. [Homebrew](https://brew.sh/) 설치

   1. 터미널을 실행합니다.
   2. 아래의 명령어를 입력한 후 엔터를 눌러 실행합니다.

   ```bash
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

2. Yarn, Node, Watchman, JDK설치

   1번에서 설치한 Homebrew를 통해 프로젝트를 실행시키는 데 필요한 필수 패키지를 설치합니다. 

   1. Node 패키지 매니저 [Yarn](https://yarnpkg.com/lang/en/) 설치

      Node는 필요한 기능을 담은 여러 패키지들을 이용합니다. 이러한 패키지를 관리해주는 것이 Yarn 입니다.

      `install yarn`

   2. [Node](https://nodejs.org/en/) 설치 (버전 8.3 이상)

      브라우저가 아닌 로컬 환경에서 자바스크립트 파일을 빌드해서 동작할 수 있게 해주는 엔진입니다.

      `install node`

   3. [Watchman](https://facebook.github.io/watchman/) 설치

      파일의 변화를 감지하는 패키지입니다. 더 나은 성능을 위해 꼭 필요합니다.

      `install watchman`

   4. [JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 설치 (버전 8이상)

      객체지향언어의 대표 주자인 Java 개발 패키지의 모음입니다.

      `tap AdoptOpenJDK/openjdk`

      **cask install adoptopenjdk8**

3. React Native CLI 설치

   React Native 프로젝트의 기초 설정을 도와주는 CLI(Command ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ Interface)를 설치합니다. `-g 옵션은 global의 뜻으로써,로컬 개발 환경 어느 곳에서나 react-native-cli를 이용할 수 있도록 설치하게 됩니다.` 

   ```bash
   npm install -g react-native-cli
   ```

4. Xcode

   iOS 빌드를 위해 Xcode 설치가 필요합니다. Mac App Store에서 다운받을 수 있으며, 9.4 버전 이상이 요구됩니다.



이제 튜토리얼을 시작할 준비가 되었습니다. 다음 단계로 가 볼 까요?



## 참고

- https://facebook.github.io/react-native/docs/getting-started