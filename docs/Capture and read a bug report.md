# 버그 보고서 캡쳐 및 읽기

```
목차
장치에서 버그 보고서 캡쳐하기
Android 에뮬레이터에서 버그 보고서 캡쳐하기
adb를 이용해서 버그 리포트 캡쳐하기
버그 보고서 ZIP 파일 검사하기
사용자로부터 보고서 받기
 Google Play Console
 Firebase crash reporting
```

버그 보고서에는 앱에서 버그를 찾고 수정하는데 도움이 되는 장치 로그, 스택 추적 및 기타 진단 정보가 포함되어 있습니다. 장치의 **버그 보고서** 개발자 가져오기 옵션, Android 에뮬레이터 메뉴 또는 개발 시스템의 `adb bugreport` 명령을 사용하여 장치에서 버그 보고서를 캡쳐할 수 있습니다.

버그 보고서를 작성하려면, 장치에서 [`Developer options`](https://developer.android.com/studio/run/device.html?hl=ko#developer-device-options)을 사용하도록 설정해야 **버그 보고서 작성** 옵션에 접근 할 수 있습니다. 

![img](https://developer.android.com/studio/images/run/dev-options-pixel_2x_cropped.png?hl=ko)

​							  그림1. Developer options

## 장치에서 버그 보고서 캡쳐하기

장치에서 직접 버그 보고서를 받으려면 다음을 수행해야 합니다:

1. [Developer options](https://developer.android.com/studio/run/device.html?hl=ko#developer-device-options)이 활성화되어 있는지 확인합니다.

2. **Developer options **에서 **버그 보고서**를 누릅니다.

3. 원하는 버그 보고서 유형을 선택하고 **보고서**를 누릅니다.

   잠시 후, 버그 보고서가 준비되었다는 알림을 받습니다 (그림2 참조).

4. 버그 보고서를 공유하려면 알림을 누릅니다.

   ![img](https://developer.android.com/studio/images/run/dev-options-take-bug-report_2x.png?hl=ko)

   ​						  그림2. The bug report is ready

## Android 에뮬레이터에서 버그 보고서 캡쳐하기

Android 에뮬레이터에서 확장 컨트롤의 **버그 제기** 기능을 사용할 수 있습니다.

1. 에뮬레이터 패널에서 More을 클릭합니다. 

2. **확장 제어** 창에서 왼쪽의 **버그 보고서**를 선택합니다.

   스크린 샷, AVD 구성 정보및 버그 보고서 로그와 같은 버그 보고서 세부 정보를 볼 수 있는 화면이 열립니다. 재현 단계가 있는 메시지를 입력하여 보고서와 함께 저장할 수도 있습니다.

3. 버그 보고서 수집이 안료될 때까지 기다린 다음 **보고서 저장**을 클릭합니다.

## adb를 이용해서 버그 리포트 캡쳐하기

장치가 하나만 연결된 경우 다음과 같이 adb를 사용하여 버그 보고서를 얻을 수 있습니다.

```
$ adb bugreport E:\Reports\MyBugReports
```

버그 리포트의 경로를 지정하지 않으면 로컬 디렉토리에 저장됩니다.

여러 장치가 연결된 경우 `-s` 옵션을 사용하여 장치를 지정해야합니다. 다음 [`adb`](https://developer.android.com/studio/command-line/adb.html?hl=ko)명령을 실행하여 장치 일련 번호를 확인하고 버그 보고서를 생성합니다.

```
$ adb devices
List of devices attached
emulator-5554      device
8XV7N15C31003476 device

$ adb -s 8XV7N15C31003476 bugreport
```



## 버그 보고서 ZIP 파일 검사하기

기본적으로 ZIP 파일은 `bugreport-BUILD_ID-DATE.zip`이며 여러 파일을 포함 할 수 있지만, 가장 중요한 파일은 `bugreport-BUILD_ID-DATE.txt`입니다. 버그 보고서이며 시스템 서비스 (`dumpsys`), 오류로그 (`dumpstate`) 및 시스템 메시지 로그 (`logcat`)에 대한 진단 출력을 포함합니다. 시스템 메시지에는 장치에서 오류가 발생했을 때의 스택 추적 및 [Log](https://developer.android.com/reference/android/util/Log.html?hl=ko) 클래스가 있는 모든 앱에서 작성된 메시지가 포함됩니다.

ZIP 파일에는 Android release 문자가 포함 된 `version.txt` 메타 데이터 파일이 포함되어 있으며, systrace가 활성화되면 ZIP파일에도systrace.txt파일이 포함됩니다. [`Systrace tool`](https://developer.android.com/studio/profile/systrace-commandline.html?hl=ko)는 애플리케이션 프로세스 및 기타 Android 시스템 프로세스의 실행 시간을 캡쳐하고 표시하여 애플리케이션 성능을 분석하는데 도움이 됩니다.

`dumpstate` 도구는 장치의 파일 시스템에서 FS 폴더 아래의 ZIP 파일로 파일을 복사하여 참조 할 수 있도록 합니다. 예를 들어, 장치의 `/dirA/dirB/fileC` 파일은 ZIP 파일에서`FS/dirA/dirB/fileC` 항목을 생성합니다.

![img](https://developer.android.com/studio/images/debug/capture-and-read-bug-report_2x.png?hl=ko)

​	   그림3. Bug report file structure

자세한 내용은, [`Reading bug reports`](https://source.android.com/source/read-bug-reports.html?hl=ko)를 참조해야 합니다.

## 사용자로부터 보고서 받기

위에서 설명한대로 버그 보고서를 캡쳐하면 앱을 직접 사용할 때 도움이 되지만 최종 사용자는 이러한 유형의 버그 보고서를 쉽게 공유 할 수 없습니다. 실제 사용자의 스택 추적이 포함 된 충돌 보고서를 얻으려면 Google Play 및 firebase's crash reporting 기능을 활용해야 합니다.

### Google Play Console

[Google Play Console](https://play.google.com/apps/publish/?hl=ko)에서 보고서를 가져와 Google Play에서 앱을 설치 한 사용자의 충돌 및 응용 프로그램 응답 없음 (ANR) 오류에 대한 데이터를 볼 수 있습니다. 지난 6개월 동안의 데이터를 사용할 수 있습니다.

자세한 내용은 Play Console 도움말의 [`View crashes & application not responding (ANR) errors`](https://support.google.com/googleplay/android-developer/answer/6083203?hl=en&ref_topic=7071935)를 참조해야합니다.

### Firebase crash reporting

Firebase crash reporting은 앱의 오류에 대한 자세한 보고서를 생성합니다. 오류는 유사한 스택 추적을 기반으로 문제로 그룹화되고 사용자에게 미치는 영향의 심각도에 따라 분류됩니다. 자동 보고서 외에도 사용자 정의 이벤트를 기록하여 충돌로 이어지는 단계를 캡쳐할 수 있습니다.

Firebase 종속성을 build.gradle 파일에 추가하기만 하면 모든 사용자로 부터 충돌 보고서가 수신되기 시작합니다. 자세한 내용은 [Firebase crash reporting](https://firebase.google.com/docs/crash/?hl=ko)을 참조해야 합니다.

