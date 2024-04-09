import QRCode from "qrcode";
import "./index.scss";

export default class BasePage {
  constructor(options) {
    const { showQrCode, trackImage } = options;
    this.baseInit();
    if (showQrCode) {
      this.addQrcodeBtn();
      this.createPageQrCode();
    }
    if (trackImage) {
      this.addTrackImageBtn();
      this.createTrackImagePop(trackImage);
    }
  }
  baseInit() {}
  addQrcodeBtn() {
    const qrcodeBtn = document.createElement("button");
    qrcodeBtn.setAttribute("class", "show-code_btn");
    qrcodeBtn.innerText = "显示二维码";
    document.body.appendChild(qrcodeBtn);
  }
  createPageQrCode() {
    let opts = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.3,
      margin: 1,
      color: {
        dark: "#010599FF",
        light: "#FFBF60FF",
      },
    };
    QRCode.toDataURL(window.location.href, opts, (err, url) => {
      if (err) {
        alert(err);
      }
      const qrcodeContainer = document.createElement("div");
      qrcodeContainer.setAttribute("class", "all-pages_qrcode");
      qrcodeContainer.style.display = "none";
      const innerDom = `<div class="qrcode-mask"></div><img src=${url} class="qrcode-img" /><button class="close_btn" id="qrCodeClose">关闭</button>`;
      qrcodeContainer.innerHTML = innerDom;
      document.body.appendChild(qrcodeContainer);
      document.querySelector(".show-code_btn").addEventListener("click", () => {
        qrcodeContainer.style.display = "block flex";
      });
      document.getElementById("qrCodeClose").addEventListener("click", () => {
        qrcodeContainer.style.display = "none";
      });
    });
  }
  addTrackImageBtn() {
    const trackImageBtn = document.createElement("button");
    trackImageBtn.setAttribute("class", "show-track-image_btn");
    trackImageBtn.innerText = "显示识别图片";
    document.body.appendChild(trackImageBtn);
  }
  createTrackImagePop(src) {
    const trackImgContainer = document.createElement("div");
    trackImgContainer.setAttribute("class", "track-img_wrap");
    trackImgContainer.style.display = "none";
    const innerDom = `<div class="track-img-mask"></div><img src=${src} class="track-img" /><button class="close_btn" id="trackImgClose">关闭</button>`;
    trackImgContainer.innerHTML = innerDom;
    document.body.appendChild(trackImgContainer);
    document.querySelector(".show-track-image_btn").addEventListener("click", () => {
      trackImgContainer.style.display = "block flex";
    });
    document.getElementById("trackImgClose").addEventListener("click", () => {
      trackImgContainer.style.display = "none";
    });
  }
}
