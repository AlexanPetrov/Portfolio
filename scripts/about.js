import ButtonCreator from "./cvbutton.js";

export default class AboutCreator {
  constructor() {
    this.section = document.createElement("section");
    this.section.className = "section sec-2";
    this.section.id = "about-id";

    this.aboutContent = document.createElement("div");
    this.aboutContent.className = "about-content";

    this.aboutShape = document.createElement("div");
    this.aboutShape.className = "about-shape";
    this.aboutContent.appendChild(this.aboutShape);

    this.leftAbout = document.createElement("div");
    this.leftAbout.className = "left-about";

    const h4WhoIAm = document.createElement("h4");
    const spanWho = document.createElement("span");
    spanWho.className = "who-class";
    spanWho.textContent = "Who";
    h4WhoIAm.appendChild(spanWho);

    const spanIAm = document.createElement("span");
    spanIAm.className = "iam-class";
    spanIAm.textContent = "I am";
    h4WhoIAm.appendChild(spanIAm);

    this.leftAbout.appendChild(h4WhoIAm);

    const pAbout = document.createElement("p");
    pAbout.textContent =
      "I graduated top of my class taking challenging mathematics and computer science courses while gaining practical experience through a software engineering internship, a full-stack bootcamp, professional certifications, and a number of exciting independent & team projects.";
    this.leftAbout.appendChild(pAbout);

    const buttonCreator = new ButtonCreator();
    const cvbutton = buttonCreator.createButton();
    this.leftAbout.appendChild(cvbutton);

    this.aboutContent.appendChild(this.leftAbout);

    this.rightAbout = document.createElement("div");
    this.rightAbout.className = "right-about";

    const aboutItems = [
      { largeText: "10+", smallText: "Projects &\nCertifications\nCompleted" },
      { largeText: "Bachelor", smallText: "Comp Sci\nCompleted" },
      { largeText: "Bootcamp", smallText: "Full-stack\nCompleted" },
      { largeText: "3 mos", smallText: "Internship\nCompleted" },
    ];

    aboutItems.forEach((item) => {
      const aboutItem = document.createElement("div");
      aboutItem.className = "about-item";

      const aboutText = document.createElement("div");
      aboutText.className = "about-text";

      const pLargeText = document.createElement("p");
      pLargeText.className = "large-text";
      pLargeText.textContent = item.largeText;
      aboutText.appendChild(pLargeText);

      const pSmallText = document.createElement("p");
      pSmallText.className = "small-text";
      pSmallText.innerHTML = item.smallText.replace(/\n/g, "<br />");
      aboutText.appendChild(pSmallText);

      aboutItem.appendChild(aboutText);
      this.rightAbout.appendChild(aboutItem);
    });

    this.aboutContent.appendChild(this.rightAbout);
    this.section.appendChild(this.aboutContent);

    this.aboutStats = document.createElement("div");
    this.aboutStats.className = "about-stats";

    const h4StatsTitle = document.createElement("h4");
    h4StatsTitle.className = "stats-title";
    h4StatsTitle.textContent = "Top Skills";
    this.aboutStats.appendChild(h4StatsTitle);

    const progressBars = document.createElement("div");
    progressBars.className = "progress-bars";

    const skills = [
      { title: "HTML5", percentage: "90%", className: "html5" },
      { title: "CSS3", percentage: "85%", className: "css3" },
      { title: "JavaScript ES14", percentage: "80%", className: "js" },
      { title: "REACT", percentage: "70%", className: "react" },
      { title: "Express.JS", percentage: "75%", className: "express" },
      { title: "Node.JS", percentage: "70%", className: "node" },
      { title: "MongoDB", percentage: "85%", className: "mongo" },
      { title: "Python3", percentage: "95%", className: "python" },
      { title: "MySQL", percentage: "85%", className: "mysql" },
      { title: "Linux", percentage: "90%", className: "linux" },
      { title: "Pandas", percentage: "70%", className: "pandas" },
      { title: "NumPy", percentage: "75%", className: "numpy" },
      { title: "Next.JS", percentage: "85%", className: "next" },
      { title: "Flask", percentage: "80%", className: "flask" },
    ];

    skills.forEach((skill) => {
      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";

      const pProgressTitle = document.createElement("p");
      pProgressTitle.className = "progress-title";
      pProgressTitle.textContent = skill.title;
      progressBar.appendChild(pProgressTitle);

      const progressContainer = document.createElement("div");
      progressContainer.className = "progress-container";

      const pProgressText = document.createElement("p");
      pProgressText.className = "progress-text";
      pProgressText.textContent = skill.percentage;
      progressContainer.appendChild(pProgressText);

      const progress = document.createElement("div");
      progress.className = "progress";

      const spanSkill = document.createElement("span");
      spanSkill.className = skill.className;
      progress.appendChild(spanSkill);

      progressContainer.appendChild(progress);
      progressBar.appendChild(progressContainer);

      progressBars.appendChild(progressBar);
    });

    this.aboutStats.appendChild(progressBars);
    this.section.appendChild(this.aboutStats);

    const h4Timeline = document.createElement("h4");
    h4Timeline.className = "stats-title";
    h4Timeline.textContent = "Timeline";
    this.section.appendChild(h4Timeline);

    const timeline = document.createElement("div");
    timeline.className = "timeline";

    const timelineItems = [
      {
        duration: "09/01/2018 - 05/01/2022",
        position: "Computer Science Student",
        organization: "Brooklyn College",
        description:
          "Immersed in a dynamic and transformative learning environment, engaging in rigorous academic pursuits while embracing enriching experiences and diverse perspectives that fostered personal growth, intellectual curiosity, critical thinking, problem-solving, and communication skills.",
      },
      {
        duration: "06/01/2021 - 09/01/2022",
        position: "Software Engineer Intern",
        organization: "CKM Analytix",
        description:
          "Promptly establishing myself as an integral contributor to the company product and an independent problem solver, I excelled in collaborating with others while demonstrating a strong ability to learn and consistently deliver high-quality results.",
      },
      {
        duration: "01/01/2021 - 02/01/2022",
        position: "Software Developer Trainee",
        organization: "NYC Tech Talent Pipeline",
        description:
          "Emerging as a lead contributor to the project, I enthusiastically embraced complex technical challenges, actively seeking opportunities to utilize my knowledge and skills to navigate the development process, all while fostering a supportive work environment for the team.",
      },
      {
        duration: "06/01/2022 - Present",
        position: "Independent Developer",
        organization: "Unaffiliated",
        description:
          "Actively expanding my skillset through challenging online certification courses and complex engineering projects, significantly augmenting my ability to adapt, innovate, and maintain a high standard of excellence in software development.",
      },
    ];

    timelineItems.forEach((item) => {
      const timelineItem = document.createElement("div");
      timelineItem.className = "timeline-item";

      const timelineIcon = document.createElement("div");
      timelineIcon.className = "timeline-icon";

      const iFASolid = document.createElement("i");
      iFASolid.className = "fa-solid fa-calendar-days";
      timelineIcon.appendChild(iFASolid);

      timelineItem.appendChild(timelineIcon);

      const pTimelineDuration = document.createElement("p");
      pTimelineDuration.className = "timeline-duration";
      pTimelineDuration.textContent = item.duration;
      timelineItem.appendChild(pTimelineDuration);

      const h5Position = document.createElement("h5");
      const spanOrganization = document.createElement("span");
      spanOrganization.textContent = item.organization;
      h5Position.innerHTML = `${item.position}<span>${item.organization}</span>`;
      timelineItem.appendChild(h5Position);

      const pDescription = document.createElement("p");
      pDescription.textContent = item.description;
      timelineItem.appendChild(pDescription);

      timeline.appendChild(timelineItem);
    });

    this.section.appendChild(timeline);
  }
}
