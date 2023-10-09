import ControlCreator from "./scripts/controls.js";
import HomeCreator from "./scripts/home.js";
import AboutCreator from "./scripts/about.js";
import PortfolioCreator from "./scripts/portfolio.js";
import BlogsCreator from "./scripts/blogs.js";
import ContactCreator from "./scripts/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  const controlCreator = new ControlCreator("main");
  controlCreator.addControls();

  const homeCreator = new HomeCreator();
  homeCreator.createHomeSection();

  const aboutCreator = new AboutCreator();
  document.body.appendChild(aboutCreator.section);

  const portfolioCreator = new PortfolioCreator();
  document.body.appendChild(portfolioCreator.section);

  const blogsCreator = new BlogsCreator();
  document.body.appendChild(blogsCreator.section);

  const contactCreator = new ContactCreator();
  contactCreator.init();

  function Controller() {
    const mainElement = document.querySelector("main");
    mainElement.addEventListener("click", function (event) {
      const control = event.target.closest(".control");
      if (!control) return;

      let curr_ctrl = document.querySelector(".active-ctrl");
      if (curr_ctrl) curr_ctrl.classList.remove("active-ctrl");

      control.classList.add("active-ctrl");

      let curr_section = document.querySelector(".active-sec");
      if (curr_section) curr_section.classList.remove("active-sec");

      let sectionId = control.getAttribute("data-id");
      let new_section = document.getElementById(sectionId);
      if (new_section) new_section.classList.add("active-sec");
    });
  }

  Controller();

  window.addEventListener("resize", function () {
    const controls = document.querySelector(".controls");
    const windowHeight = window.innerHeight;
    controls.style.top = `${windowHeight * 0.2}px !important`;

    if (windowHeight < 500) {
      controls.style.flexDirection = "row";
    } else {
      controls.style.flexDirection = "column";
    }
  });
});
