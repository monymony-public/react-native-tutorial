---
layout: default
title: 1. 시작하기
parent: MobX 튜토리얼
grand_parent: State Management Tutorial(한글)
nav_order: 1
---

## 1. MobX를 사용가능한 새로운 React Native프로젝트 생성 

- iOS, Android 환경구축은은 하단 Getting Started 공식문서 참조

[Getting Started](https://facebook.github.io/react-native/docs/getting-started)

### OS별 설정

- OSX ([brew](https://brew.sh/)가 설치되어 있어야 함)

```bash
brew install yarn
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

- Windows ([choco]([https://chocolatey.org](https://chocolatey.org/))가 설치되어 있어야 함)

```bash
choco install -y nodejs.install python2 jdk8
```

### react-native install 

```bash
npm install -g react-native-cli
```

### Create new project

```bash
react-native init mobxTutorial
```

### Install MobX

```bash
npm install --save mobx
npm install --save mobx-react // MobX 데코레이터를 사용할 수 있도록 해줌
```

### For decorator ///

```bash
npm install --save-dev @babel/plugin-proposal-decorators
```
이후 폴더의 루트에 `.babelrc` 파일을 만들어 아래 내용 추가

```json
{
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true}],
        ["@babel/plugin-proposal-class-properties", { "loose": true}]
    ]
}
```