# 스택 추적 분석하기

```
목차
외부 소스의 오픈 스택 추적
새로운 스택 추적을 위한 클립보드 모니터링
```

앱을 디버깅하려면 종종 스택 추적 작업이 필요합니다. 오류나 예외로 인해 앱이 중단 될 때마다 스택 추적이 이루어집니다. [Thread.dumpStack()](https://developer.android.com/reference/java/lang/Thread.html?hl=ko#dumpStack())과 같은 메소드를 사용하여 앱 코드의 어느 시점에서나 스택 추적을 나오게 할 수 있습니다.

연결된 장치에서 앱이 디버그 모드로 실행되는 동안 Android Studio는 그림1과 같이 **logcat** view에서 스택 추적을 나타내고 강조 표시합니다.

스택 추적에는 호출이 발생한 파일 이름 및 줄 번호와 함께 예외가 발생하는 메소드 호출 목록이 표시됩니다. 강조 표시된 파일이름을 클릭하여 파일을 열고 메소드 호출 소스를 검사 할 수 있습니다. **Up the stack trace**와 **Down the stack trace**를 클릭하여 logcat 창에 표시된 스택 추적 line 사이들을 빠르게 이동합니다.

![img](https://developer.android.com/studio/images/debug/logcat-stacktrace_2x.png?hl=ko)

그림1. A stacktrace in logcat.

## 외부 소스의 오픈 스택 추적

때로는 디버깅하는 동안 발견 한 것과는 반대로 버그 보고서에서 공유된 스택 추적을 분석하려고 합니다. 예를 들어 사용자 기기에서 생성 된 스택 추적을 Google Play Console 또는 [Firebase Crash Reporting](https://firebase.google.com/docs/crash/?hl=ko)과 같은 다른 도구에서 수집 할 수 있습니다.

버그 보고서에서 외부 스택 추적을 강조 표시하고 클릭 할 수 있는 view를 얻으려면 다음 단계를 수행해야합니다:

1. Android Studio에서 프로젝트를 엽니다.

   ```
   ★ 참고: 보고있는 소스 코드가 스택 추적을 생성한 앱과 동일한 버전의 소스 코드인지 확인하십시오. 코드가 다르면 파일 이름과 줄 번호 또는 스택 추적과 프로젝트의 호출 순서가 일치하지 않습니다.
   ```

   

2. **Analyze** 메뉴에서 **Analyze Stack Trace**를 클릭합니다.

   ![Analyze Stack Trace window](https://developer.android.com/studio/images/debug/analyze-stacktrace_2-2_2x.png?hl=ko)

3. 스택 추적 텍스트를 **Analyze Stack Trace** 창에 붙여넣고 **OK**를 클릭합니다.

4. Android Studio는 실행 창 아래에 붙여 넣은 스택 추적과 함께 새로운 <Stacktrace>탭을 엽니다.

   ![Stacktrace window](https://developer.android.com/studio/images/debug/stacktrace-window_2x.png?hl=ko)

## 새로운 스택 추적을 위한 클립보드 모니터링

외부 스택 추적을 많이 사용하는 경우, Android Studio에서 새로운 스택추적들을 위해 시스템 클립보드를 지속적으로 모니터링함으로써 생산성을 향상시킬 수 있습니다.

1. **Analyze Stacktrace** 도구를 엽니다.
2. **intelliJ IDEA 체크박스의 외부 클립보드에 복사된 thread dumps 자동 감지 및 분석 확인 란**을 선택하십시오.
3. 다른 응용 프로그램(예: 웹 브라우저)의 스택 추적을 시스템 클립 보드에 복사합니다.
4. Android Studio 창으로 돌아오면, 스택 추적 창에 붙여 넣지 않아도 **실행** 창 아래에서 스택 추적이 자동으로 열립니다.