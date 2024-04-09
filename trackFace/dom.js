const demo1 = ` <div class="options-panel">
<img
  id="hat1"
  src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat/thumbnail.png"
/>
<img
  id="hat2"
  src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat2/thumbnail.png"
/>
<img
  id="glasses1"
  src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses/thumbnail.png"
/>
<img
  id="glasses2"
  src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses2/thumbnail.png"
/>
<img
  id="earring"
  src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/thumbnail.png"
/>
</div>
<a-scene
mindar-face
embedded
color-space="sRGB"
renderer="colorManagement: true, physicallyCorrectLights"
vr-mode-ui="enabled: false"
device-orientation-permission-ui="enabled: false"
>
<a-assets>
  <a-asset-item
    id="headModel"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/sparkar/headOccluder.glb"
  ></a-asset-item>
  <a-asset-item
    id="glassesModel"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses/scene.gltf"
  ></a-asset-item>
  <a-asset-item
    id="glassesModel2"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses2/scene.gltf"
  ></a-asset-item>
  <a-asset-item
    id="hatModel"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat/scene.gltf"
  ></a-asset-item>
  <a-asset-item
    id="hatModel2"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat2/scene.gltf"
  ></a-asset-item>
  <a-asset-item
    id="earringModel"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/scene.gltf"
  ></a-asset-item>
</a-assets>
<a-camera active="false" position="0 0 0"></a-camera>
<!-- head occluder -->
<a-entity mindar-face-target="anchorIndex: 168">
  <a-gltf-model
    mindar-face-occluder
    position="0 -0.3 0.15"
    rotation="0 0 0"
    scale="0.065 0.065 0.065"
    src="#headModel"
  ></a-gltf-model>
</a-entity>
<a-entity mindar-face-target="anchorIndex: 10">
  <a-gltf-model
    rotation="0 -0 0"
    position="0 1.0 -0.5"
    scale="0.35 0.35 0.35"
    src="#hatModel"
    class="hat1-entity"
    visible="false"
  ></a-gltf-model>
</a-entity>
<a-entity mindar-face-target="anchorIndex: 10">
  <a-gltf-model
    rotation="0 -0 0"
    position="0 -0.2 -0.5"
    scale="0.008 0.008 0.008"
    src="#hatModel2"
    class="hat2-entity"
    visible="false"
  ></a-gltf-model>
</a-entity>
<a-entity mindar-face-target="anchorIndex: 168">
  <a-gltf-model
    rotation="0 -0 0"
    position="0 0 0"
    scale="0.01 0.01 0.01"
    src="#glassesModel"
    class="glasses1-entity"
    visible="false"
  ></a-gltf-model>
</a-entity>
<a-entity mindar-face-target="anchorIndex: 168">
  <a-gltf-model
    rotation="0 -90 0"
    position="0 -0.3 0"
    scale="0.6 0.6 0.6"
    src="#glassesModel2"
    class="glasses2-entity"
    visible="false"
  ></a-gltf-model>
</a-entity>
<a-entity mindar-face-target="anchorIndex: 127">
  <a-gltf-model
    rotation="-0.1 -0 0"
    position="0 -0.3 -0.3"
    scale="0.05 0.05 0.05"
    src="#earringModel"
    class="earring-entity"
    visible="false"
  ></a-gltf-model>
</a-entity>
<a-entity mindar-face-target="anchorIndex: 356">
  <a-gltf-model
    rotation="0.1 -0 0"
    position="0 -0.3 -0.3"
    scale="0.05 0.05 0.05"
    src="#earringModel"
    class="earring-entity"
    visible="false"
  ></a-gltf-model>
</a-entity>
</a-scene>`;
const demo2 = `<div id="container">
</div>`;
const demo3 = ` <div id="container">
</div>
<video id="video-feed">
</video>`;

export default { demo1, demo2, demo3 };
