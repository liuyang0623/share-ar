import card from "./assets/card-example/card.png"
import webIcon from "./assets/card-example/icons/web.png"
import phoneIcon from "./assets/card-example/icons/phone.png"
import emailIcon from "./assets/card-example/icons/email.png"
import playIcon from "./assets/card-example/icons/play.png"
import leftIcon from "./assets/card-example/icons/left.png"
import rightIcon from "./assets/card-example/icons/right.png"
import locationIcon from "./assets/card-example/icons/location.png"
import profileIcon from "./assets/card-example/icons/profile.png"
import paintandquestPreview from "./assets/card-example/portfolio/paintandquest-preview.png"
import painMp4 from "./assets/card-example/portfolio/paintandquest.mp4"
import painWebm from "./assets/card-example/portfolio/paintandquest.webm"
import coffeemachine from "./assets/card-example/portfolio/coffeemachine-preview.png"
import peak from "./assets/card-example/portfolio/peak-preview.png"

const demo1 = `<div id="example-scanning-overlay" class="hidden">
<div class="inner">
  <img src=${card} />
  <div class="scanline"></div>
</div>
</div>

<a-scene
mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/card.mind; showStats: false; uiScanning: #example-scanning-overlay;"
embedded
color-space="sRGB"
renderer="colorManagement: true, physicallyCorrectLights"
vr-mode-ui="enabled: false"
device-orientation-permission-ui="enabled: false"
>
<a-assets>
  <img id="card" src=${card} />
  <img id="icon-web" src=${webIcon} />
  <img
    id="icon-location"
    src=${locationIcon}
  />
  <img
    id="icon-profile"
    src=${profileIcon}
  />
  <img id="icon-phone" src=${phoneIcon} />
  <img id="icon-email" src=${emailIcon} />
  <img id="icon-play" src=${playIcon} />
  <img id="icon-left" src=${leftIcon} />
  <img id="icon-right" src=${rightIcon} />
  <img
    id="paintandquest-preview"
    src=${paintandquestPreview}
  />
  <video
    id="paintandquest-video-mp4"
    autoplay="false"
    loop="true"
    src=${painMp4}
  ></video>
  <video
    id="paintandquest-video-webm"
    autoplay="false"
    loop="true"
    src=${painWebm}
  ></video>
  <img
    id="coffeemachine-preview"
    src=${coffeemachine}
  />
  <img
    id="peak-preview"
    src=${peak}
  />

  <a-asset-item
    id="avatarModel"
    src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/softmind/scene.gltf"
  ></a-asset-item>
</a-assets>

<a-camera
  position="0 0 0"
  look-controls="enabled: false"
  cursor="fuse: false; rayOrigin: mouse;"
  raycaster="far: 10000; objects: .clickable"
>
</a-camera>

<a-entity id="mytarget" mytarget mindar-image-target="targetIndex: 0">
  <a-plane
    src="#card"
    position="0 0 0"
    height="0.552"
    width="1"
    rotation="0 0 0"
  ></a-plane>

  <a-entity visible="false" id="portfolio-panel" position="0 0 -0.01">
    <a-text
      value="Portfolio"
      color="black"
      align="center"
      width="2"
      position="0 0.4 0"
    ></a-text>
    <a-entity id="portfolio-item0">
      <a-video
        id="paintandquest-video-link"
        webkit-playsinline
        playsinline
        width="1"
        height="0.552"
        position="0 0 0"
      ></a-video>
      <a-image
        id="paintandquest-preview-button"
        class="clickable"
        src="#paintandquest-preview"
        alpha-test="0.5"
        position="0 0 0"
        height="0.552"
        width="1"
      >
      </a-image>
    </a-entity>
    <a-entity id="portfolio-item1" visible="false">
      <a-image
        class="clickable"
        src="#coffeemachine-preview"
        alpha-test="0.5"
        position="0 0 0"
        height="0.552"
        width="1"
      >
      </a-image>
    </a-entity>
    <a-entity id="portfolio-item2" visible="false">
      <a-image
        class="clickable"
        src="#peak-preview"
        alpha-test="0.5"
        position="0 0 0"
        height="0.552"
        width="1"
      >
      </a-image>
    </a-entity>

    <a-image
      visible="false"
      id="portfolio-left-button"
      class="clickable"
      src="#icon-left"
      position="-0.7 0 0"
      height="0.15"
      width="0.15"
    ></a-image>
    <a-image
      visible="false"
      id="portfolio-right-button"
      class="clickable"
      src="#icon-right"
      position="0.7 0 0"
      height="0.15"
      width="0.15"
    ></a-image>
  </a-entity>

  <a-image
    visible="false"
    id="profile-button"
    class="clickable"
    src="#icon-profile"
    position="-0.42 -0.5 0"
    height="0.15"
    width="0.15"
    animation="property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
  ></a-image>

  <a-image
    visible="false"
    id="web-button"
    class="clickable"
    src="#icon-web"
    alpha-test="0.5"
    position="-0.14 -0.5 0"
    height="0.15"
    width="0.15"
    animation="property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
  ></a-image>

  <a-image
    visible="false"
    id="email-button"
    class="clickable"
    src="#icon-email"
    position="0.14 -0.5 0"
    height="0.15"
    width="0.15"
    animation="property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
  ></a-image>

  <a-image
    visible="false"
    id="location-button"
    class="clickable"
    src="#icon-location"
    position="0.42 -0.5 0"
    height="0.15"
    width="0.15"
    animation="property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
  ></a-image>

  <a-gltf-model
    id="avatar"
    rotation="0 0 0"
    position="0 -0.25 0"
    scale="0.004 0.004 0.004"
    src="#avatarModel"
  ></a-gltf-model>

  <a-text
    id="text"
    class="clickable"
    value=""
    color="black"
    align="center"
    width="2"
    position="0 -1 0"
    geometry="primitive:plane; height: 0.1; width: 2;"
    material="opacity: 0.5"
  ></a-text>
</a-entity>
</a-scene>`;

const demo2 = `<div>
  <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/band-example/band.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
  <a-assets>
    <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>
    <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>
  </a-assets>

  <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

  <a-entity mindar-image-target="targetIndex: 0">
    <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 1">
    <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer>
  </a-entity>
  </a-scene>
</div>`;

const demo3 = `<div>
  <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/band-example/band.mind; maxTrack: 2" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
  <a-assets>
    <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>
    <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>
  </a-assets>

  <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

  <a-entity mindar-image-target="targetIndex: 0">
    <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer>
  </a-entity>
  <a-entity mindar-image-target="targetIndex: 1">
    <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer>
  </a-entity>
  </a-scene>
</div>`

export default { demo1, demo2, demo3 };
