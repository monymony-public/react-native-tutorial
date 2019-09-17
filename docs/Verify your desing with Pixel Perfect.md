# Pixel Perfect!

```
목차
Pixel Perfect 시작하기
도구들로 친숙해지기 
오버레이 이미지 더하기
```

```
▲ Pixel Perfect는 더 이상 사용되지 않습니다. Android Studio 3.1부터는 Layout Inspector를 사용하여 앱 레이아웃을 디자인 모형과 비교하는거 대신에, 앱의 확대된 뷰를 표시하고 레이아웃 세부 정보를 검사해야합니다.
```

Pixel Perfect는 [`Android Device Monitor`](https://developer.android.com/studio/profile/monitor.html?hl=ko)에 내장 된 도구로 앱의 확대된 뷰를 표시하므로 레이아웃에서 개별 픽셀의 위치와 속성을 검사하고 앱의 레이아웃을 디자인 모형과 일치시키는데 도움을 줄 수 있습니다.

## Pixel Perfect 시작하기

1. 장치를 컴퓨터에 연결하십시오. 장치에 **Allow USB debugging?**이라는 대화 상자가 표시되면 **OK**를 누릅니다.

2. Android Studio에서 프로젝트를 열고 장치에서 [`빌드하고 실행`](https://developer.android.com/studio/run/index.html?hl=ko)합니다.

3. [Android Device Monitor](https://developer.android.com/studio/profile/monitor.html?hl=ko)를 시작합니다. 한번에 한 프로세스만이 adb를 통해 장치에 연결할 수 있고, Android Device Monitor가 연결을 요청하므로 Android Studio에서 **adb 통합 비활성화** 대화 상자가 표시 될 수 있습니다. **Yes**를 클릭합니다.

   그림 1은 처음에 Android Device Monitor에 나타나는 것들을 보여줍니다. 

4. 메뉴 바에서, **Window > Open Perspective**를 선택하고, **Pixel Perfect**를 클릭합니다.

5. 왼쪽의 **Windows** 탭에서 장치이름을 두 번 클릭합니다. 이것은 장치 디스플레이로 창을 채우고 **Pixel Perfect Tree** 탭으로 전환합니다.

   ![img](https://developer.android.com/images/tools/performance/hierarchy-viewer/gettingstarted_image005.png?hl=ko)
   
   ​								그림1. Android Device Monitor

## 도구들로 친숙해지기

다음과 같은 3개의 창이 나타납니다:

- **View Object** (left): 시스템에서 소요 한 객체를 포함하여 화면에 표시되는 [View](https://developer.android.com/reference/android/view/View.html?hl=ko) 객체의 계층 구조 목록입니다. 뷰를 클릭하면, 오른쪽의 Pixel Perfect pane에서 해당 위치가 강조 표시됩니다.

- **Pixel Perfect Loupe** (center): 확대 된 화면 이미지입니다. 각 정사각형이 하나의 픽셀을 나타내는 격자로 오버레이됩니다. 픽셀 정보를 보려면, 정사각형을 클릭합니다. 색상 정보와 X/Y 좌표가 창의 맨 아래에 나타납니다. 

  분할 창의 십자선은 Pixel Perfect 창 (오른쪽)의 위치 결정 십자선에 해당합니다. 

  확대/축소하려면 창의 맨아래에 있는 **확대/축소** 슬라이더를 사용하거나 마우스의 스크롤 휠을 사용합니다.

- Pixel Perfect (right): device 화면이 표시됩니다. 이 창의 십자선은 loupe 창의 십자선에 해당합니다. 

  View Object 창에서 선택한 뷰도 여기에 굵은 빨간색으로 표시됩니다. 형제 및 부모뷰에는 얇은 빨간색 상자가 있습니다.

  레이아웃 상자에는 내부또는 외부에 다른 사각형이 있을 수 있으며 각 사각형은 뷰의 일부를 나타냅니다. 보라색 또는 초록색 사각형은 뷰 경계 상자를 나타냅니다. 레이아웃 상자안의 흰색 또는 검은 색 상자는 뷰 패딩을 나타냅니다. 바깥 쪽 흰색 또는 검은색 사각형은 여백을 나타냅니다. 레이아웃 배경이 검은색이면 패딩및 여백상자는 흰색이고, 그 반대도 마찬가지입니다.

  창 상단에서 **PNG로 저장**을 클릭하여 스크린 샷을 저장 할 수 있습니다.
  
  ![img](https://developer.android.com/images/developing/hv_pixelperfect.png?hl=ko)
  
  그림2. The Pixel Perfect window

기본적으로, 이 창은 화면의 UI가 변경 될 때 새로 고쳐지지 않습니다. 자동 새로 고침을 활성화하려면 창 상단에서 **Auto Refresh**를 활성화 한 다음 Loupe 창의 맨 아래에 있는 **Refresh Rate** 슬라이더를 사용하여 새로 고침 빈도를 설정합니다.

그렇지 않으면, 창의 맨 위에있는 **Refresh Screenshot**을 클릭하여 Pixel Perfect 창과 Loupe 창을 수동으로 새로 고침 할 수 있습니다. 창 상단에서 **Refresh Tree**를 클릭하여 View Object창을 새로 고침 해야 할 수도 있습니다.

## 오버레이 이미지 더하기

Pixel Perfect 창은 Pixel Perfect 창에서 비트 맵을 오버레이로 로드 할 수 있도록 하여 앱 레이아웃을 모형 이미지와 일치시키는것을 도와줍니다.

비트 맵 이미지를 오버레이로 사용하려면 다음 단계를 수행합니다:

- Pixel Perfect 상단에서, **Load Overlay**를 클릭하고 이미지를 선택합니다.

- Pixel Perfect는 Pixel Perfect창에서 화면 위에 오버레이를 표시합니다. 비트 맵 이미지의 왼쪽 아래 모서리 (X=0. Y=max값)는 화면의 가장 왼쪽 아래 픽셀 (X=0, Y=max 화면)에 고정됩니다. 

  기본적으로, 오버레이의 투명도는 50%입니다. loupe 창의 맨 아래에 있는 **오버레이** 슬라이더를 사용하여 이를 조정할 수 있습니다.

  또한 기본적으로, 오버레이는 Loupe 창에 표시되지 않습니다. 표시하려면 창 상단의 **Loupe에서 Show**를 설정합니다.