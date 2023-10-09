import ButtonCreator from "./cvbutton.js";

export default class HomeCreator {
  constructor() {
    this.mainElement = document.querySelector("main");
  }

  createHomeSection() {
    const section = document.createElement("section");
    section.classList.add("section", "sec-1", "active-sec");
    section.id = "home-id";

    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

    const homeShape = document.createElement("div");
    homeShape.classList.add("home-shape");

    const leftHome = document.createElement("div");
    leftHome.classList.add("left-home");

    const header = document.createElement("h1");
    header.classList.add("header");

    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = "Alexander Petrovski";

    const job = document.createElement("span");
    job.classList.add("job");
    job.textContent = "Software Engineer";

    const paragraph = document.createElement("p");
    paragraph.textContent =
      "My passion for learning and dedication to staying ahead of industry trends enable me to deliver creative solutions that drive impact. I am eager to apply my top skills and commitment to excellence to tackle complex challenges and contribute to the ever-evolving landscape of technology.";

    header.appendChild(name);
    header.appendChild(job);
    leftHome.appendChild(header);
    leftHome.appendChild(paragraph);

    const buttonCreator = new ButtonCreator();
    const cvbutton = buttonCreator.createButton();
    leftHome.appendChild(cvbutton);

    homeContent.appendChild(homeShape);
    homeContent.appendChild(leftHome);

    const rightHome = document.createElement("div");
    rightHome.classList.add("right-home");

    const image = document.createElement("div");
    image.classList.add("image");

    const img = document.createElement("img");
    img.src = "img/MyPortfolioPicture.jpeg";
    img.alt = "My Portfolio Picture";

    image.appendChild(img);
    rightHome.appendChild(image);
    homeContent.appendChild(rightHome);

    section.appendChild(homeContent);
    this.mainElement.appendChild(section);
  }
}
