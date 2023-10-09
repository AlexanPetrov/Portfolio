export default class ControlCreator {
  constructor(containerSelector) {
    this.controlsContainer = document.createElement("div");
    this.controlsContainer.className = "controls";
    document
      .querySelector(containerSelector)
      .appendChild(this.controlsContainer);
    this.controls = [
      {
        id: "home-id",
        name: "Home",
        icon: "fa-solid fa-igloo",
        active: "active-ctrl",
      },
      {
        id: "about-id",
        name: "About",
        // icon: "fa-solid fa-user-graduate",
        icon: "fas fa-user-secret",
      },
      {
        id: "portfolio-id",
        name: "Portfolio",
        icon: "fa-solid fa-folder-tree",
      },
      {
        id: "blogs-id",
        name: "Blogs",
        icon: "fa-brands fa-microblog",
      },
      {
        id: "contact-id",
        name: "Contact",
        icon: "fa-solid fa-file-signature",
      },
    ];
  }

  createControl({ id, name, icon, active = "" }) {
    const control = document.createElement("div");
    control.className = `control ${active}`;
    control.setAttribute("data-id", id);
    control.setAttribute("data-name", name);
    const i = document.createElement("i");
    i.className = icon;

    control.appendChild(i);
    return control;
  }

  addControls() {
    this.controls.forEach((control) => {
      this.controlsContainer.appendChild(this.createControl(control));
    });
  }
}
