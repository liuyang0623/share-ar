import BasePage from "../core/basePage";
import RadioGroup from "../components/RadioGroup";
import demoDom from "./dom";
import cardImg from "./assets/card.jpg"
import "./index.scss";

class TrackImagePage extends BasePage {
  constructor(options) {
    super(options);
    this.mainContainer = document.querySelector(".main-container");
    this.mainContainer.innerHTML = demoDom["demo1"]
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
      radioGroupId: "track-img_box",
      containerId: "trackimg-radio_wrap",
      defaultActive: "demo1",
      callback: this.changeDemoType.bind(this),
    });
  }
  changeDemoType(type) {
    document.querySelectorAll(".mindar-ui-overlay").forEach(item => item.remove())
    this.mainContainer.innerHTML = demoDom[type]
  }
  showInfo() {
    let y = 0;
    const profileButton = document.querySelector("#profile-button");
    const webButton = document.querySelector("#web-button");
    const emailButton = document.querySelector("#email-button");
    const locationButton = document.querySelector("#location-button");
    const text = document.querySelector("#text");

    profileButton.setAttribute("visible", true);
    setTimeout(() => {
      webButton.setAttribute("visible", true);
    }, 300);
    setTimeout(() => {
      emailButton.setAttribute("visible", true);
    }, 600);
    setTimeout(() => {
      locationButton.setAttribute("visible", true);
    }, 900);

    let currentTab = "";
    webButton.addEventListener("click", function (evt) {
      text.setAttribute("value", "https://softmind.tech");
      currentTab = "web";
      window.location.href = "https://www.baidu.com";
    });
    emailButton.addEventListener("click", function (evt) {
      text.setAttribute("value", "hello@softmind.tech");
      currentTab = "email";
    });
    profileButton.addEventListener("click", function (evt) {
      text.setAttribute("value", "AR, VR solutions and consultation");
      currentTab = "profile";
    });
    locationButton.addEventListener("click", function (evt) {
      text.setAttribute("value", "Vancouver, Canada | Hong Kong");
      currentTab = "location";
    });

    text.addEventListener("click", function (evt) {
      if (currentTab === "web") {
        window.location.href = "https://softmind.tech";
      }
    });
  }
  showPortfolio(done) {
    const portfolio = document.querySelector("#portfolio-panel");
    const portfolioLeftButton = document.querySelector(
      "#portfolio-left-button"
    );
    const portfolioRightButton = document.querySelector(
      "#portfolio-right-button"
    );
    const paintandquestPreviewButton = document.querySelector(
      "#paintandquest-preview-button"
    );

    let y = 0;
    let currentItem = 0;

    portfolio.setAttribute("visible", true);

    const showPortfolioItem = (item) => {
      for (let i = 0; i <= 2; i++) {
        document
          .querySelector("#portfolio-item" + i)
          .setAttribute("visible", i === item);
      }
    };
    const id = setInterval(() => {
      y += 0.008;
      if (y >= 0.6) {
        clearInterval(id);
        portfolioLeftButton.setAttribute("visible", true);
        portfolioRightButton.setAttribute("visible", true);
        portfolioLeftButton.addEventListener("click", () => {
          currentItem = (currentItem + 1) % 3;
          showPortfolioItem(currentItem);
        });
        portfolioRightButton.addEventListener("click", () => {
          currentItem = (currentItem - 1 + 3) % 3;
          showPortfolioItem(currentItem);
        });

        paintandquestPreviewButton.addEventListener("click", () => {
          paintandquestPreviewButton.setAttribute("visible", false);
          const testVideo = document.createElement("video");
          const canplayWebm = testVideo.canPlayType(
            'video/webm; codecs="vp8, vorbis"'
          );
          if (canplayWebm == "") {
            document
              .querySelector("#paintandquest-video-link")
              .setAttribute("src", "#paintandquest-video-mp4");
            document.querySelector("#paintandquest-video-mp4").play();
          } else {
            document
              .querySelector("#paintandquest-video-link")
              .setAttribute("src", "#paintandquest-video-webm");
            document.querySelector("#paintandquest-video-webm").play();
          }
        });

        setTimeout(() => {
          done();
        }, 500);
      }
      portfolio.setAttribute("position", "0 " + y + " -0.01");
    }, 10);
  }
  showAvatar(onDone) {
    const avatar = document.querySelector("#avatar");
    let z = -0.3;
    const id = setInterval(() => {
      z += 0.008;
      if (z >= 0.3) {
        clearInterval(id);
        onDone();
      }
      avatar.setAttribute("position", "0 -0.25 " + z);
    }, 10);
  }
  baseInit() {
    const _this = this;
    AFRAME.registerComponent("mytarget", {
      init: function () {
        this.el.addEventListener("targetFound", (event) => {
          _this.showAvatar(() => {
            setTimeout(() => {
              _this.showPortfolio(() => {
                setTimeout(() => {
                  _this.showInfo();
                }, 300);
              });
            }, 300);
          });
        });
        this.el.addEventListener("targetLost", (event) => {
          console.log("target found");
        });
        //this.el.emit('targetFound');
      },
    });
  }
}

new TrackImagePage({
  from: "trackImage",
  showQrCode: true,
  trackImage: cardImg,
});
