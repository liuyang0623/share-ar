import "./index.scss";

export default class RadioGroup {
  constructor(config) {
    this.curId = config.defaultActive;
    this.createRadioGroupDom(config);
  }
  createRadioGroupDom(config) {
    const { options, radioGroupId, containerId, defaultActive, callback } =
      config;
    let optionItemStr = ``;
    options.forEach((item) => {
      optionItemStr += `<button class="radio-item_btn ${
        defaultActive === item.key ? "active" : ""
      }" id=${item.key}>${item.label}</button>`;
    });
    const radioBoxContainer = `<div class="radio-group_container" id=${radioGroupId}>${optionItemStr}</div>`;
    document.getElementById(containerId).innerHTML = radioBoxContainer;
    this.bindEvent(radioGroupId, callback);
  }
  bindEvent(elId, callback) {
    const el = document.getElementById(elId);
    el.addEventListener("click", (e) => {
      if (e.target.id === this.curId) return;
      document.querySelectorAll(".radio-item_btn").forEach((item) => {
        item.classList.remove("active");
      });
      document.getElementById(e.target.id).classList.add("active");
      this.curId = e.target.id;
      callback(this.curId);
    });
  }
}
