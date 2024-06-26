export default class PortfolioCreator {
  constructor() {
    this.section = document.createElement("section");
    this.section.className = "section sec-3";
    this.section.id = "portfolio-id";

    this.portfolioShape = document.createElement("div");
    this.portfolioShape.className = "portfolio-shape";
    this.section.appendChild(this.portfolioShape);

    this.portfolioTitle = document.createElement("h2");
    this.portfolioTitle.className = "portfolio-title";
    this.portfolioTitle.textContent = "Where Ideas Take Shape";
    this.section.appendChild(this.portfolioTitle);

    this.portfolioText = document.createElement("p");
    this.portfolioText.className = "portfolio-text";
    this.portfolioText.textContent =
      "I am committed to remaining at the forefront of emerging technologies and utilizing state-of-the-art tools while harnessing fundamental principles and practices of software engineering. Review my latest explorations herein chronologically, and visit ";
    const spanLink = document.createElement("span");
    const aLink = document.createElement("a");
    aLink.href = "https://github.com/AlexanPetrov";
    aLink.className = "icon";
    aLink.target = "_blank";
    aLink.rel = "noopener";
    const iGithub = document.createElement("i");
    iGithub.className = "fa-brands fa-github-alt";
    aLink.appendChild(iGithub);
    spanLink.appendChild(aLink);
    this.portfolioText.appendChild(spanLink);
    this.portfolioText.innerHTML += " to see my project history.";
    this.section.appendChild(this.portfolioText);

    this.portfolios = document.createElement("div");
    this.portfolios.className = "portfolios";

    const portfolioItems = [
      {
        imageSrc: "img/pullupnyc.jpeg",
        imageAlt: "Pull Ups",
        hoverItems: [
          {
            title: "Pull Up NYC",
            icons: ["fa-brands fa-github", "fa-solid fa-globe"],
            links: [
              "https://github.com/AlexanPetrov/PullUpNYC",
              "https://pull-up-nyc.vercel.app/",
            ],
          },
        ],
      },
      {
        imageSrc: "img/gastrographpic.jpeg",
        imageAlt: "recipe website",
        hoverItems: [
          {
            title: "Gastrograph",
            icons: ["fa-brands fa-github", "fa-solid fa-globe"],
            links: [
              "https://github.com/AlexanPetrov/gastrograph",
              "https://brilliant-cuchufli-19cf17.netlify.app",
            ],
          },
        ],
      },
      {
        imageSrc: "img/portfolioproject.avif",
        imageAlt: "portfolio project",
        hoverItems: [
          {
            title: "Portfolio Website",
            icons: ["fa-brands fa-github"],
            links: ["https://github.com/AlexanPetrov/Portfolio"],
          },
        ],
      },
    ];

    portfolioItems.forEach((item) => {
      const portfolioItem = document.createElement("div");
      portfolioItem.className = "portfolio-item";

      const image = document.createElement("div");
      image.className = "image";
      const img = document.createElement("img");
      img.src = item.imageSrc;
      img.alt = item.imageAlt;
      image.appendChild(img);
      portfolioItem.appendChild(image);

      const hoverItems = document.createElement("div");
      hoverItems.className = "hover-items";

      item.hoverItems.forEach((hoverItem) => {
        const h3 = document.createElement("h3");
        h3.textContent = hoverItem.title;
        hoverItems.appendChild(h3);

        const icons = document.createElement("div");
        icons.className = "icons";

        // hoverItem.icons.forEach((icon) => {
        //   const aIcon = document.createElement("a");
        //   aIcon.href = "#";
        //   aIcon.className = "icon";
        //   aIcon.target = "_blank";
        //   // aIcon.title = "project";
        //   const iIcon = document.createElement("i");
        //   iIcon.className = icon;
        //   aIcon.appendChild(iIcon);
        //   icons.appendChild(aIcon);
        // });

        hoverItem.icons.forEach((icon, index) => {
          const aIcon = document.createElement("a");

          aIcon.href =
            hoverItem.links && hoverItem.links[index]
              ? hoverItem.links[index]
              : "https://github.com/AlexanPetrov";

          aIcon.className = "icon";
          aIcon.target = "_blank";
          const iIcon = document.createElement("i");
          iIcon.className = icon;
          aIcon.appendChild(iIcon);
          icons.appendChild(aIcon);
        });

        hoverItems.appendChild(icons);
      });

      portfolioItem.appendChild(hoverItems);
      this.portfolios.appendChild(portfolioItem);
    });

    this.section.appendChild(this.portfolios);
  }
}
