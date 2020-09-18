---
layout: default
title: Image is not loading(iOS14)
parent: Tips
nav_order: 1
has_children: false
---

# Image is not loading in iOS 14

Related issue: https://github.com/facebook/react-native/issues/29279

This issue is fixed and merged to react native latest version. But if you want to fix your project now or you are using under 0.63 versions, here is the solution. 

## Make Patch

We will use the [patch-package](https://github.com/ds300/patch-package) to make and apply patch. 

> patch-package lets app authors instantly make and keep fixes to npm dependencies. It's a vital band-aid for those of us living on the bleeding edge.

### Patch React Native Code

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
