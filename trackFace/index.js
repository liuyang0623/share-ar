import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MindARThree } from "mind-ar/dist/mindar-face-three.prod.js";
import BasePage from "../core/basePage";
import RadioGroup from "../components/RadioGroup";
import demoDom from "./dom";
import "./index.scss";

class Avatar {
  constructor() {
    this.gltf = null;
    this.morphTargetMeshes = [];
  }
  async init() {
    const url = "https://assets.codepen.io/9177687/raccoon_head.glb";
    const gltf = await new Promise((resolve) => {
      const loader = new GLTFLoader();
      loader.load(url, (gltf) => {
        resolve(gltf);
      });
    });
    gltf.scene.traverse((object) => {
      if (object.isBone && !this.root) {
        this.root = object; // as THREE.Bone;
      }
      if (!object.isMesh) return;
      const mesh = object;
      if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) return;
      this.morphTargetMeshes.push(mesh);
    });
    this.gltf = gltf;
  }
  updateBlendshapes(blendshapes) {
    const categories = blendshapes.categories;
    let coefsMap = new Map();
    for (let i = 0; i < categories.length; ++i) {
      coefsMap.set(categories[i].categoryName, categories[i].score);
    }
    for (const mesh of this.morphTargetMeshes) {
      if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) {
        continue;
      }
      for (const [name, value] of coefsMap) {
        if (!Object.keys(mesh.morphTargetDictionary).includes(name)) {
          continue;
        }
        const idx = mesh.morphTargetDictionary[name];
        mesh.morphTargetInfluences[idx] = value;
      }
    }
  }
}
class TrackFacePage extends BasePage {
  constructor(options) {
    super(options);
    this.curDemo = "demo1";
    this.mainContainer = document.querySelector(".main-container");
    this.mainContainer.innerHTML = demoDom["demo1"];
    this.createActionBtn();
  }
  createActionBtn() {
    new RadioGroup({
      options: [
        {
          label: "demo1",
          key: "demo1",
        },
        {
          label: "demo2",
          key: "demo2",
        },
        {
          label: "demo3",
          key: "demo3",
        },
      ],
      radioGroupId: "track-face_box",
      containerId: "trackface-radio_wrap",
      defaultActive: "demo1",
      callback: this.changeDemoType.bind(this),
    });
  }
  changeDemoType(type) {
    document
      .querySelectorAll(".mindar-ui-overlay")
      .forEach((item) => item.remove());
    this.mainContainer.innerHTML = demoDom[type];
    this.curDemo = type;
    switch (type) {
      case "demo1":
        this.initDemo1Options();
        break;
      case "demo2":
        this.initDemo2();
        break;
      case "demo3":
        this.initDemo3();
        break;
      default:
        this.initDemo1Options();
        break;
    }
  }
  initDemo1Options() {
    document.addEventListener("DOMContentLoaded", function () {
      const list = ["glasses1", "glasses2", "hat1", "hat2", "earring"];
      const visibles = [true, false, false, true, true];
      const setVisible = (button, entities, visible) => {
        if (visible) {
          button.classList.add("selected");
        } else {
          button.classList.remove("selected");
        }
        entities.forEach((entity) => {
          entity.setAttribute("visible", visible);
        });
      };
      list.forEach((item, index) => {
        const button = document.querySelector("#" + item);
        const entities = document.querySelectorAll("." + item + "-entity");
        setVisible(button, entities, visibles[index]);
        button.addEventListener("click", () => {
          visibles[index] = !visibles[index];
          setVisible(button, entities, visibles[index]);
        });
      });
    });
  }
  initDemo2() {
    const mindarThree = new MindARThree({
      container: document.querySelector("#container"),
    });
    const { renderer, scene, camera } = mindarThree;
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);
    const faceMesh = mindarThree.addFaceMesh();
    const texture = new THREE.TextureLoader().load(
      "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/canonical_face_model_uv_visualization.png"
    );
    faceMesh.material.map = texture;
    faceMesh.material.transparent = true;
    faceMesh.material.needsUpdate = true;
    scene.add(faceMesh);
    const start = async () => {
      await mindarThree.start();
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    };
    start();
  }
  initDemo3() {
    let mindarThree = null;
    let avatar = new Avatar();
    const setup = async () => {
      mindarThree = new MindARThree({
        container: document.querySelector("#container"),
      });
      const { renderer, scene, camera } = mindarThree;
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      scene.add(light);
      const anchor = mindarThree.addAnchor(1);
      await avatar.init();
      avatar.gltf.scene.scale.set(2, 2, 2);
      anchor.group.add(avatar.gltf.scene);
    };
    const start = async () => {
      if (!mindarThree) {
        await setup();
      }
      await mindarThree.start();
      const { renderer, scene, camera } = mindarThree;
      const feedVideo = document.querySelector("#video-feed");
      feedVideo.srcObject = mindarThree.video.srcObject.clone();
      feedVideo.play();
      renderer.setAnimationLoop(() => {
        const estimate = mindarThree.getLatestEstimate();
        if (estimate && estimate.blendshapes) {
          avatar.updateBlendshapes(estimate.blendshapes);
        }
        renderer.render(scene, camera);
      });
    };
    start();
  }
  baseInit() {
    this.initDemo1Options();
  }
}

new TrackFacePage({
  from: "trackFace",
  showQrCode: true,
});
