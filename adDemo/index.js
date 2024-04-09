import BasePage from "../core/basePage";
import cardImg from "./assets/card.jpg";

class AdDemoPage extends BasePage {
  constructor(options) {
    super(options);
    this.createAdDoms();
  }
  getMockAdData() {
    return new Promise((res) => {
      res([
        {
          img: cardImg,
          mind: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/card.mind",
          desc: "游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述",
        },
        {
          img: cardImg,
          mind: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/card.mind",
          desc: "游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述游戏描述",
        },
      ]);
    });
  }
  async createAdDoms() {
    const adContainer = document.createElement("div");
    adContainer.setAttribute("class", "ad-container");
    const res = await this.getMockAdData();
    let innerDomStr = "";
    res.forEach((v) => {
      innerDomStr += `<div class="ad-item"><img src=${v.img} /><div class="ad-text_wrap"></div></div>`;
    });
  }
}

new AdDemoPage({
  from: "adDemo",
  showQrCode: true,
});
