import { data } from "./utils/page";
import BasePage from "./core/basePage";
import "./index.scss";

class IndexPage extends BasePage {
  constructor(options) {
    super(options);
  }
  baseInit() {
    this.createOptionsDom();
  }
  createOptionsDom() {
    let optionData = "";
    data.forEach((item) => {
      optionData += `<a href=${item.link} class="page-item"><p class="item-title">${item.name}</p><p class="item-desc">${item.desc}</p></a>`;
    });
    const optionsBox = document.querySelector(".page-option_wrap");
    optionsBox.innerHTML = optionData;
  }
}

new IndexPage({ from: "index", showQrCode: false });
