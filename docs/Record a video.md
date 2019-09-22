# 비디오 녹화하기

[Logcat](https://developer.android.com/studio/debug/am-logcat.html?hl=ko)을 사용하면 최대 3분 동안 하드웨어 장치에서 MP4 비디오를 녹화 할 수 있습니다. 예를 들어 마케팅 자료나 디머깅에 비디오를 사용할 수 있습니다.

비디오 파일에는 오디오가 녹음되지 않습니다.

Wear OS를 실행하는 장치에는 비디오 녹화를 사용할 수 없습니다.

앱의 비동를 녹화하려면 다음을 수행해야 합니다:

1. 앱 프로젝트를 엽니다.

2. 하드웨어 장치에서 [`앱을 실행`](https://developer.android.com/studio/run/index.html?hl=ko#RunningApp)합니다.

3. **View > Tool Windows > Logcat**을 클릭합니다.

4. 하드웨어 장치의 디스플레이와 상호 작용하여 비디오 시작을 준비합니다.

5. Logcat 창의 왼쪽에서 **Screen Record**를 클릭합니다.

6. **Screen Recorder Options** 다이얼로그에서, 레코딩 옵션을 설정합니다:
   - **Bit Rate:** 비트 전송률을 입력합니다. 기본 설정은 4Mbps입니다.
   - **Resolution:** 너비와 높이 값을 픽셀 단위로 입력합니다. 값은 16의 배수여야합니다. 기본값은 장치의 해상도입니다.
   - **Show Taps:** 탭에 대한 시각적 피드백을 활성화합니다. 
   
7. **Start Recording**을 클릭하여 녹화를 시작합니다. 

8. **Stop Recording**을 클릭하여 녹화를 중지합니다. 

9. 다이얼로그에서, MP4파일을 **저장**합니다.

10. **Screen Recorder** 다이얼로그에서 버튼 중 하나를 클릭하여 파일 위치를 표시하거나 플레이어에서 녹음을 열거나 다이얼로그를 닫습니다.

    ![Device Video](https://developer.android.com/images/tools/am-video.jpg?hl=ko)

    ​														 그림1. Record a video of your app