import ButtonCreator from "./submitbutton.js";

export default class ContactCreator {
  constructor() {
    this.contactContainer = document.createElement("div");
    this.contactContainer.className = "contact-container";
    this.section = document.createElement("section");
    this.section.className = "section sec-5";
    this.section.id = "contact-id";

    this.section.appendChild(this.contactContainer);

    document.addEventListener("DOMContentLoaded", () => {
      this.init();
    });

    this.leftContact = document.createElement("div");
    this.leftContact.className = "left-contact";

    const contactHeading = document.createElement("h4");
    contactHeading.textContent = "Contacts";
    this.leftContact.appendChild(contactHeading);
    this.leftContact.appendChild(document.createElement("br"));

    const contactInfo = document.createElement("div");
    contactInfo.className = "contact-info";

    const contactItems = [
      {
        icon: "fa-solid fa-map-marker",
        label: "Location:",
        value: "New York City",
      },
      {
        icon: "fa-solid fa-paper-plane",
        label: "Email:",
        value: "apfb11@gmail.com",
      },
      {
        icon: "fa-solid fa-phone",
        label: "Mobile:",
        value: "1-347-803-8359",
      },
    ];

    contactItems.forEach((item) => {
      const contactItem = document.createElement("div");
      contactItem.className = "contact-item";

      const iconWrapper = document.createElement("div");
      iconWrapper.className = "icon";

      const icon = document.createElement("i");
      icon.className = item.icon;
      iconWrapper.appendChild(icon);

      const label = document.createElement("p");
      label.textContent = item.label;
      iconWrapper.appendChild(label);

      const value = document.createElement("p");
      const valueSpan = document.createElement("span");
      valueSpan.textContent = item.value || "";
      value.appendChild(valueSpan);

      contactItem.appendChild(iconWrapper);
      contactItem.appendChild(value);
      contactInfo.appendChild(contactItem);
    });

    const socialMediaHeading = document.createElement("h4");
    socialMediaHeading.textContent = "Social Media";
    this.leftContact.appendChild(socialMediaHeading);
    this.leftContact.appendChild(document.createElement("br"));

    const socialMediaInfo = document.createElement("div");
    socialMediaInfo.className = "social-media-info";

    const socialMediaItems = [
      {
        icon: "fa-brands fa-linkedin",
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/alexander-petrovski-4292b7205/",
      },
      {
        icon: "fa-brands fa-github",
        label: "GitHub",
        link: "https://github.com/AlexanPetrov",
      },
    ];

    socialMediaItems.forEach((item) => {
      const socialMediaItem = document.createElement("div");
      socialMediaItem.className = "social-media-item";

      const iconWrapper = document.createElement("div");
      iconWrapper.className = "icon";

      const icon = document.createElement("i");
      icon.className = item.icon;
      iconWrapper.appendChild(icon);

      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = item.label;
      iconWrapper.appendChild(link);

      const value = document.createElement("p");
      const valueSpan = document.createElement("span");
      valueSpan.textContent = item.value || "";
      value.appendChild(valueSpan);

      socialMediaItem.appendChild(iconWrapper);
      socialMediaItem.appendChild(value);
      socialMediaInfo.appendChild(socialMediaItem);
    });

    this.leftContact.appendChild(contactHeading);
    this.leftContact.appendChild(document.createElement("br"));
    this.leftContact.appendChild(contactInfo);

    this.leftContact.appendChild(socialMediaHeading);
    this.leftContact.appendChild(document.createElement("br"));
    this.leftContact.appendChild(socialMediaInfo);

    const docInfo = document.createElement("div");
    docInfo.className = "doc-info";

    const docHeading = document.createElement("h4");
    docHeading.textContent = "Request Documents";
    docInfo.appendChild(docHeading);
    docInfo.appendChild(document.createElement("br"));

    const docItems = [
      {
        icon: "fa-file-import",
        label: "College Transcripts",
        link: "#",
      },
      {
        icon: "fa-envelopes-bulk",
        label: "Recommendation Letters",
        link: "#",
      },
      {
        icon: "fas fa-envelope-open-text",
        label: "Reference Contacts",
        link: "#",
      },
    ];

    docItems.forEach((item) => {
      const docItem = document.createElement("div");
      docItem.className = "doc-item";

      const iconWrapper = document.createElement("div");
      iconWrapper.className = "icon";

      const icon = document.createElement("i");
      icon.className = `fa-solid ${item.icon}`;
      iconWrapper.appendChild(icon);

      const link = document.createElement("a");
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.addRequestToMessage(item.label);
      });
      link.textContent = item.label;
      iconWrapper.appendChild(link);

      docItem.appendChild(iconWrapper);
      docInfo.appendChild(docItem);
    });

    this.leftContact.appendChild(docInfo);

    const lang = document.createElement("div");
    lang.className = "lang";

    const langHeading = document.createElement("h4");
    langHeading.textContent = "Press & Languages";
    lang.appendChild(langHeading);
    lang.appendChild(document.createElement("br"));

    const mediaItem = document.createElement("div");
    mediaItem.className = "media-item";

    const mediaIconWrapper = document.createElement("div");
    mediaIconWrapper.className = "icon";

    const mediaIcon = document.createElement("i");
    mediaIcon.className = "fa-brands fa-square-youtube";
    mediaIconWrapper.appendChild(mediaIcon);

    const mediaLink = document.createElement("a");
    mediaLink.href =
      "https://www.youtube.com/watch?v=H6nJWBbX1gM&ab_channel=MagnerCenterVideo";
    mediaLink.target = "_blank";
    mediaLink.rel = "noopener";
    mediaLink.textContent = "Academic Interview";
    mediaIconWrapper.appendChild(mediaLink);

    mediaItem.appendChild(mediaIconWrapper);

    const langItem = document.createElement("div");
    langItem.className = "lang-item";

    const langIconWrapper = document.createElement("div");
    langIconWrapper.className = "icon";

    const langIcon = document.createElement("i");
    langIcon.className = "fa-solid fa-language";
    langIconWrapper.appendChild(langIcon);

    const langSpan = document.createElement("span");
    langSpan.textContent = "English - French - Russian";
    langIconWrapper.appendChild(langSpan);

    langItem.appendChild(langIconWrapper);

    lang.appendChild(mediaItem);
    lang.appendChild(langItem);

    this.leftContact.appendChild(lang);

    this.rightContact = document.createElement("div");
    this.rightContact.className = "right-contact";

    const contactTitle = document.createElement("h2");
    contactTitle.className = "contact-title";
    contactTitle.textContent = "Anchor Your Queries Here!";
    this.rightContact.appendChild(contactTitle);

    const contactForm = document.createElement("form");
    contactForm.className = "contact-form";
    contactForm.action = "";

    const inputControl2 = document.createElement("div");
    inputControl2.className = "input-control input-control-2";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.required = true;
    inputName.placeholder = "Name";
    inputName.id = "name";

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.required = true;
    inputEmail.placeholder = "Email";
    inputEmail.id = "email";

    inputControl2.appendChild(inputName);
    inputControl2.appendChild(inputEmail);

    const inputSubject = document.createElement("input");
    inputSubject.type = "text";
    inputSubject.required = true;
    inputSubject.placeholder = "Subject";
    inputSubject.id = "subject";

    const inputMessage = document.createElement("textarea");
    inputMessage.placeholder = "Message";
    inputMessage.name = "message";
    inputMessage.id = "area-id";
    inputMessage.cols = "15";
    inputMessage.rows = "8";

    const inputControl1 = document.createElement("div");
    inputControl1.className = "input-control";
    inputControl1.appendChild(inputSubject);

    const inputControl3 = document.createElement("div");
    inputControl3.className = "input-control";
    inputControl3.appendChild(inputMessage);

    contactForm.appendChild(inputControl2);
    contactForm.appendChild(inputControl1);
    contactForm.appendChild(inputControl3);

    this.rightContact.appendChild(contactForm);

    const buttonCreator = new ButtonCreator();
    const submitbutton = buttonCreator.createButton();
    this.rightContact.appendChild(submitbutton);

    this.contactContainer.appendChild(this.leftContact);
    this.contactContainer.appendChild(this.rightContact);

    this.contactShape = document.createElement("div");
    this.contactShape.className = "contact-shape";
    this.contactContainer.appendChild(this.contactShape);
  }

  addRequestToMessage(docLabel) {
    const messageBox = document.querySelector("#area-id");
    messageBox.value += `\n${docLabel} ARE REQUESTED.`;
  }

  attachFormSubmitEvent() {
    const form = this.rightContact.querySelector("form");
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("area-id").value;

        const payload = {
          name,
          email,
          subject,
          message,
        };

        if (this.isValidPayload(payload)) {
          await this.sendDataToBackend(payload);
        }
      });
    }
  }

  clearFields() {
    try {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("area-id").value = "";
      console.log("Fields cleared.");
    } catch (fieldClearError) {
      console.log("Error when clearing fields:", fieldClearError);
    }
  }

  async sendDataToBackend(payload) {
    try {
      console.log("Sending payload:", payload);
      const response = await fetch(
        "https://portfolio-submissions.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log(`Received response, status: ${response.status}`);

      this.clearFields();

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        const data = await response.json();
        console.log(`Server error: ${data.error || "Unknown error"}`);
        alert(`An error occurred: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.log("Caught a network or JSON error:", error);
      this.clearFields();
      alert("An error occurred. Please try again later.");
    }
  }

  isValidPayload(payload) {
    if (
      !payload.name ||
      !payload.email ||
      !payload.subject ||
      !payload.message
    ) {
      alert("All fields are required!");
      return false;
    }
    return true;
  }

  init() {
    const mainElementContact = document.querySelector("main");
    mainElementContact.appendChild(this.section);
    this.attachFormSubmitEvent();
  }

  getContactContainer() {
    return this.contactContainer;
  }
}

// import ButtonCreator from "./submitbutton.js";

// export default class ContactCreator {
//   constructor() {
//     this.contactContainer = document.createElement("div");
//     this.contactContainer.className = "contact-container";
//     this.section = document.createElement("section");
//     this.section.className = "section sec-5";
//     this.section.id = "contact-id";

//     this.section.appendChild(this.contactContainer);

//     document.addEventListener("DOMContentLoaded", () => {
//       this.init();
//     });

//     this.leftContact = document.createElement("div");
//     this.leftContact.className = "left-contact";

//     const contactHeading = document.createElement("h4");
//     contactHeading.textContent = "Contacts";
//     this.leftContact.appendChild(contactHeading);
//     this.leftContact.appendChild(document.createElement("br"));

//     const contactInfo = document.createElement("div");
//     contactInfo.className = "contact-info";

//     const contactItems = [
//       {
//         icon: "fa-solid fa-map-marker",
//         label: "Location:",
//         value: "New York City",
//       },
//       {
//         icon: "fa-solid fa-paper-plane",
//         label: "Email:",
//         value: "apfb11@gmail.com",
//       },
//       {
//         icon: "fa-solid fa-phone",
//         label: "Mobile:",
//         value: "1-347-803-8359",
//       },
//     ];

//     contactItems.forEach((item) => {
//       const contactItem = document.createElement("div");
//       contactItem.className = "contact-item";

//       const iconWrapper = document.createElement("div");
//       iconWrapper.className = "icon";

//       const icon = document.createElement("i");
//       icon.className = item.icon;
//       iconWrapper.appendChild(icon);

//       const label = document.createElement("p");
//       label.textContent = item.label;
//       iconWrapper.appendChild(label);

//       const value = document.createElement("p");
//       const valueSpan = document.createElement("span");
//       valueSpan.textContent = item.value || "";
//       value.appendChild(valueSpan);

//       contactItem.appendChild(iconWrapper);
//       contactItem.appendChild(value);
//       contactInfo.appendChild(contactItem);
//     });

//     const socialMediaHeading = document.createElement("h4");
//     socialMediaHeading.textContent = "Social Media";
//     this.leftContact.appendChild(socialMediaHeading);
//     this.leftContact.appendChild(document.createElement("br"));

//     const socialMediaInfo = document.createElement("div");
//     socialMediaInfo.className = "social-media-info";

//     const socialMediaItems = [
//       {
//         icon: "fa-brands fa-linkedin",
//         label: "LinkedIn",
//         link: "https://www.linkedin.com/in/alexander-petrovski-4292b7205/",
//       },
//       {
//         icon: "fa-brands fa-github",
//         label: "GitHub",
//         link: "https://github.com/AlexanPetrov",
//       },
//     ];

//     socialMediaItems.forEach((item) => {
//       const socialMediaItem = document.createElement("div");
//       socialMediaItem.className = "social-media-item";

//       const iconWrapper = document.createElement("div");
//       iconWrapper.className = "icon";

//       const icon = document.createElement("i");
//       icon.className = item.icon;
//       iconWrapper.appendChild(icon);

//       const link = document.createElement("a");
//       link.href = item.link;
//       link.target = "_blank";
//       link.rel = "noopener";
//       link.textContent = item.label;
//       iconWrapper.appendChild(link);

//       const value = document.createElement("p");
//       const valueSpan = document.createElement("span");
//       valueSpan.textContent = item.value || "";
//       value.appendChild(valueSpan);

//       socialMediaItem.appendChild(iconWrapper);
//       socialMediaItem.appendChild(value);
//       socialMediaInfo.appendChild(socialMediaItem);
//     });

//     this.leftContact.appendChild(contactHeading);
//     this.leftContact.appendChild(document.createElement("br"));
//     this.leftContact.appendChild(contactInfo);

//     this.leftContact.appendChild(socialMediaHeading);
//     this.leftContact.appendChild(document.createElement("br"));
//     this.leftContact.appendChild(socialMediaInfo);

//     const docInfo = document.createElement("div");
//     docInfo.className = "doc-info";

//     const docHeading = document.createElement("h4");
//     docHeading.textContent = "Request Documents";
//     docInfo.appendChild(docHeading);
//     docInfo.appendChild(document.createElement("br"));

//     const docItems = [
//       {
//         icon: "fa-file-import",
//         label: "College Transcripts",
//         link: "#",
//       },
//       {
//         icon: "fa-envelopes-bulk",
//         label: "Recommendation Letters",
//         link: "#",
//       },
//       {
//         icon: "fas fa-envelope-open-text",
//         label: "Reference Contacts",
//         link: "#",
//       },
//     ];

//     docItems.forEach((item) => {
//       const docItem = document.createElement("div");
//       docItem.className = "doc-item";

//       const iconWrapper = document.createElement("div");
//       iconWrapper.className = "icon";

//       const icon = document.createElement("i");
//       icon.className = `fa-solid ${item.icon}`;
//       iconWrapper.appendChild(icon);

//       const link = document.createElement("a");
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         this.addRequestToMessage(item.label);
//       });
//       link.textContent = item.label;
//       iconWrapper.appendChild(link);

//       docItem.appendChild(iconWrapper);
//       docInfo.appendChild(docItem);
//     });

//     this.leftContact.appendChild(docInfo);

//     const lang = document.createElement("div");
//     lang.className = "lang";

//     const langHeading = document.createElement("h4");
//     langHeading.textContent = "Press & Languages";
//     lang.appendChild(langHeading);
//     lang.appendChild(document.createElement("br"));

//     const mediaItem = document.createElement("div");
//     mediaItem.className = "media-item";

//     const mediaIconWrapper = document.createElement("div");
//     mediaIconWrapper.className = "icon";

//     const mediaIcon = document.createElement("i");
//     mediaIcon.className = "fa-brands fa-square-youtube";
//     mediaIconWrapper.appendChild(mediaIcon);

//     const mediaLink = document.createElement("a");
//     mediaLink.href =
//       "https://www.youtube.com/watch?v=H6nJWBbX1gM&ab_channel=MagnerCenterVideo";
//     mediaLink.target = "_blank";
//     mediaLink.rel = "noopener";
//     mediaLink.textContent = "Academic Interview";
//     mediaIconWrapper.appendChild(mediaLink);

//     mediaItem.appendChild(mediaIconWrapper);

//     const langItem = document.createElement("div");
//     langItem.className = "lang-item";

//     const langIconWrapper = document.createElement("div");
//     langIconWrapper.className = "icon";

//     const langIcon = document.createElement("i");
//     langIcon.className = "fa-solid fa-language";
//     langIconWrapper.appendChild(langIcon);

//     const langSpan = document.createElement("span");
//     langSpan.textContent = "English - French - Russian";
//     langIconWrapper.appendChild(langSpan);

//     langItem.appendChild(langIconWrapper);

//     lang.appendChild(mediaItem);
//     lang.appendChild(langItem);

//     this.leftContact.appendChild(lang);

//     this.rightContact = document.createElement("div");
//     this.rightContact.className = "right-contact";

//     const contactTitle = document.createElement("h2");
//     contactTitle.className = "contact-title";
//     contactTitle.textContent = "Anchor Your Queries Here!";
//     this.rightContact.appendChild(contactTitle);

//     const contactForm = document.createElement("form");
//     contactForm.className = "contact-form";
//     contactForm.action = "";

//     const inputControl2 = document.createElement("div");
//     inputControl2.className = "input-control input-control-2";

//     const inputName = document.createElement("input");
//     inputName.type = "text";
//     inputName.required = true;
//     inputName.placeholder = "Name";
//     inputName.id = "name";

//     const inputEmail = document.createElement("input");
//     inputEmail.type = "email";
//     inputEmail.required = true;
//     inputEmail.placeholder = "Email";
//     inputEmail.id = "email";

//     inputControl2.appendChild(inputName);
//     inputControl2.appendChild(inputEmail);

//     const inputSubject = document.createElement("input");
//     inputSubject.type = "text";
//     inputSubject.required = true;
//     inputSubject.placeholder = "Subject";
//     inputSubject.id = "subject";

//     const inputMessage = document.createElement("textarea");
//     inputMessage.placeholder = "Message";
//     inputMessage.name = "message";
//     inputMessage.id = "area-id";
//     inputMessage.cols = "15";
//     inputMessage.rows = "8";

//     const inputControl1 = document.createElement("div");
//     inputControl1.className = "input-control";
//     inputControl1.appendChild(inputSubject);

//     const inputControl3 = document.createElement("div");
//     inputControl3.className = "input-control";
//     inputControl3.appendChild(inputMessage);

//     contactForm.appendChild(inputControl2);
//     contactForm.appendChild(inputControl1);
//     contactForm.appendChild(inputControl3);

//     this.rightContact.appendChild(contactForm);

//     const buttonCreator = new ButtonCreator();
//     const submitbutton = buttonCreator.createButton();
//     this.rightContact.appendChild(submitbutton);

//     this.contactContainer.appendChild(this.leftContact);
//     this.contactContainer.appendChild(this.rightContact);

//     this.contactShape = document.createElement("div");
//     this.contactShape.className = "contact-shape";
//     this.contactContainer.appendChild(this.contactShape);
//   }

//   addRequestToMessage(docLabel) {
//     const messageBox = document.querySelector("#area-id");
//     messageBox.value += `\n${docLabel} ARE REQUESTED.`;
//   }

//   attachFormSubmitEvent() {
//     const form = this.rightContact.querySelector("form");
//     if (form) {
//       form.addEventListener("submit", async (event) => {
//         event.preventDefault();

//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const subject = document.getElementById("subject").value;
//         const message = document.getElementById("area-id").value;

//         const payload = {
//           name,
//           email,
//           subject,
//           message,
//         };

//         if (this.isValidPayload(payload)) {
//           await this.sendDataToBackend(payload);
//         }
//       });
//     }
//   }

//   async sendDataToBackend(payload) {
//     try {
//       // local response
//       // const response = await fetch("http://127.0.0.1:3000", {
//       const response = await fetch(
//         "https://portfolio-submissions.onrender.com",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         }
//       );

//       if (response.ok) {
//         alert("Message sent successfully!");
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("subject").value = "";
//         document.getElementById("area-id").value = "";
//       } else {
//         const data = await response.json();
//         alert(`An error occurred: ${data.error || "Unknown error"}`);
//       }
//     } catch (error) {
//       alert("An error occurred. Please try again later.");
//     }
//   }

//   isValidPayload(payload) {
//     if (
//       !payload.name ||
//       !payload.email ||
//       !payload.subject ||
//       !payload.message
//     ) {
//       alert("All fields are required!");
//       return false;
//     }
//     return true;
//   }

//   init() {
//     const mainElementContact = document.querySelector("main");
//     mainElementContact.appendChild(this.section);
//     this.attachFormSubmitEvent();
//   }

//   getContactContainer() {
//     return this.contactContainer;
//   }
// }
