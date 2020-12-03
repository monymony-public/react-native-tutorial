---
layout: default
title: iOS14 에서 이미지가 로딩되지 않을 때
parent: 팁 및 기타
nav_order: 1
has_children: false
---

# iOS14 에서 이미지가 로딩되지 않을 때

관련 이슈: https://github.com/facebook/react-native/issues/29279

It fixed and merged to react native latest version. If you are using under 0.63 versions, it can be help to fix the issue. 

## Make Patch

We will use the [patch-package](https://github.com/ds300/patch-package). 

> patch-package lets app authors instantly make and keep fixes to npm dependencies. It's a vital band-aid for those of us living on the bleeding edge.

### Patch React Native

#### 1. Open the file from `node_modules/react-native/Libraries/Image/RCTUIImageViewAnimated.m`
#### 2. Edit source

From

```js
#pragma mark - CALayerDelegate

- (void)displayLayer:(CALayer *)layer
{
  if (_currentFrame) {
    layer.contentsScale = self.animatedImageScale;
    layer.contents = (__bridge id)_currentFrame.CGImage;
  }
}
```

To

```js
#pragma mark - CALayerDelegate

- (void)displayLayer:(CALayer *)layer
{
  if (_currentFrame) {
    layer.contentsScale = self.animatedImageScale;
    layer.contents = (__bridge id)_currentFrame.CGImage;
  } else {
    [super displayLayer:layer];
  }
}

```

#### 3. Make patch

`npx patch-package react-native`

#### 4. Make patch files tracked for git

`git add patches/*`

Example patch files: `patches/react-native+0.61.5.patch` 


#### 5. Add package script for auto applying patches

package.json

```json
"scripts": {
  ...
  "postinstall": "patch-package",
}
```

It will patch from all patch files whenever you install packages. 