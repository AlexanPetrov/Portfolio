export default class ButtonCreator {
  createButton() {
    const div = document.createElement("div");
    div.classList.add("btn-container");

    const a = document.createElement("a");
    a.classList.add("cv-btn");
    a.target = "_blank";
    a.rel = "noopener";
    a.href =
      "https://drive.google.com/file/d/1Sj-SdH2F1n9l76-L6hb0GD8vDW0Sf8OJ/view?usp=drive_link";

    const spanText = document.createElement("span");
    spanText.classList.add("text-btn");
    spanText.textContent = "Download CV";

    const spanIcon = document.createElement("span");
    spanIcon.classList.add("cv-icon");

    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-cloud-arrow-down");

    spanIcon.appendChild(i);
    a.appendChild(spanText);
    a.appendChild(spanIcon);
    div.appendChild(a);

    return div;
  }
}
