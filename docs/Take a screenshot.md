# 스크린 샷 찍기

많은 Android 기기에서 키-조합을 사용하여 스크린샷을 캡쳐 할 수 있습니다: 전원과 볼륨을 동시에 누릅니다. 다음과 같이 Android Studio로 스크린 샷을 캡쳐 할 수도 있습니다.

1. 연결된 장치 또는 에뮬레이터에서 앱을 실행합니다. 연결된 장치를 사용하는 경우 [`USB 디버깅을 활성화`](https://developer.android.com/studio/run/device.html?hl=ko#setting-up)했는지 확인합니다.

2. Android Studio에서, **View > Tool Windows > Logcat**을 선택하여 [`Logcat`](https://developer.android.com/studio/debug/am-logcat.html?hl=ko)을 엽니다.

3. 창의 맨 위에 있는 드롭-다운에서 장치 및 프로세스를 선택합니다.

4. 창의 왼쪽에서 **Screen Capture**를 클릭합니다. **Screenshoe Editor**창에서 스크린 샷이 나타납니다.

   ```
   ★ 팁: Android 7.0이상에서 설정을 열고, Developer options > Demo mode를 선택한 후, demo mode 표시를 사용합니다. 알림을 일시적으로 제거하도록 상태 표시 줄을 재설정하고 신호 및 배터리 잔량 가득으로 설정합니다. 자세한 내용은 장치내 개발자 옵션 구성을 참조합니다.
   ```

   ![img](https://developer.android.com/studio/images/debug/screenshot-editor_2x.png?hl=ko)

   그림1. Screenshot editor

5. 선택적으로 이미지를 변경합니다:

   - **Recapture**: 새로운 스크린 샷을 찍습니다.

   - **Rotate Left**: 이미지를 시계 반대 방향으로 90도 회전합니다.

   - **Rotate Right**: 이미지를 시계 방향으로 90도로 회전합니다.

   - **Frame Screenshot**: 실제 장치 아트웍으로 스크린 샷을 wrap할 장치를 선택합니다. **Drop Shadow, Screen Glare** 또는 둘 다를 선택하여 이미지에 이러한 효과를 추가합니다.

     ```
   ★ 참조: 캡쳐한 실제 장치와 다른 스크린 샷 프레임의 장치를 선택하면, 편집기가 장치 프레임의 크기에 맞게 이미지를 늘립니다. 대신 다른 인기있는 장치를 위한 장치 프레임을 제공하는 온라인 Device Art Genertator를 사용하고 싶을 수도 있습니다.
     ```
     
     

6. **저장**을 클릭하고, 위치와 파일 이름을 지정한 다음, **OK**를 클릭합니다.