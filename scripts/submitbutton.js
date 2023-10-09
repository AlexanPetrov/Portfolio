export default class ButtonCreator {
  createButton() {
    const div = document.createElement("div");
    div.classList.add("btn-container");

    const button = document.createElement("button");
    button.type = "submit";
    button.classList.add("cv-btn");

    const spanText = document.createElement("span");
    spanText.classList.add("text-btn");
    spanText.textContent = "Submit";

    const spanIcon = document.createElement("span");
    spanIcon.classList.add("cv-icon");

    const i = document.createElement("i");
    i.classList.add("fas", "fa-shipping-fast");

    button.addEventListener("click", () => {
      const form = document.querySelector(".contact-form");
      if (form) {
        form.dispatchEvent(new Event("submit"));
      }
    });

    spanIcon.appendChild(i);
    button.appendChild(spanText);
    button.appendChild(spanIcon);
    div.appendChild(button);

    return div;
  }
}
