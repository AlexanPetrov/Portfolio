export default class BlogsCreator {
  constructor() {
    this.section = document.createElement("section");
    this.section.className = "section sec-4";
    this.section.id = "blogs-id";

    this.blogsContent = document.createElement("div");
    this.blogsContent.className = "blogs-content";

    this.blogsShape = document.createElement("div");
    this.blogsShape.className = "blogs-shape";
    this.blogsContent.appendChild(this.blogsShape);

    this.blogsContainer = document.createElement("div");
    this.blogsContainer.className = "blogs";

    const blogTitle = document.createElement("h2");
    blogTitle.className = "blog-title";
    blogTitle.textContent = "Where Opinions Resonate";
    this.section.appendChild(blogTitle);

    const blogGreet = document.createElement("div");
    blogGreet.className = "blog-greet";
    blogGreet.textContent =
      "A collaborative discussion empowers people to make a long-lasting impact, sparks inspiration and kindles an unyielding curiosity for further exploration. Diverse minds converge fostering a dynamic ecosystem of viable growth. Let's explore and grow together.";
    this.blogsContent.appendChild(blogGreet);

    const blogItems = [
      {
        imgSrc: "img/JSHTMLCSSBlog.jpg",
        imgAlt: "js-html-css",
        title: "Portfolio Website - JS - HTML - CSS",
        description: "Do this before graduation.",
        docLink: "./docs/PortfolioBlog.pdf",
      },
      {
        imgSrc: "img/OpenAI.jpg",
        imgAlt: "openai",
        title: "OpenAI - API",
        description: "Enhance your coding skills w/ AI tools.",
        docLink: "./docs/AIBlog.pdf",
      },
      {
        imgSrc: "img/Graphs.jpg",
        imgAlt: "graphs",
        title: "Graphs - Adjacency List vs Matrix",
        description: "Both are crucial to understand.",
        docLink: "./docs/GraphsBlog.pdf",
      },
    ];

    blogItems.forEach((item) => {
      const blog = document.createElement("div");
      blog.className = "blog";

      const blogImage = document.createElement("img");
      blogImage.src = item.imgSrc;
      blogImage.alt = item.imgAlt;
      blog.appendChild(blogImage);

      const blogText = document.createElement("div");
      blogText.className = "blog-text";

      const blogTitle = document.createElement("h4");
      const blogTitleLink = document.createElement("a");
      blogTitleLink.href = item.docLink;
      blogTitleLink.target = "_blank";
      blogTitleLink.textContent = item.title;
      blogTitle.appendChild(blogTitleLink);
      blogText.appendChild(blogTitle);

      const blogDescription = document.createElement("p");
      blogDescription.textContent = item.description;
      blogText.appendChild(blogDescription);

      blog.appendChild(blogText);

      this.blogsContainer.appendChild(blog);
    });

    this.blogsContent.appendChild(this.blogsContainer);

    this.section.appendChild(this.blogsContent);
  }
}
