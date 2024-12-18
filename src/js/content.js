import experience from "../data/experience/init.js";
import education from "../data/education/init.js";
import projects from "../data/projects.js";
import skills from "../data/skills.js";

const sections = [
  {
    name: "experience",
    data: experience,
    columns: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  {
    name: "education",
    data: education,
    columns: "grid-cols-1 md:grid-cols-2",
  },
  {
    name: "skills",
    data: skills,
    columns: "grid-cols-1 md:grid-cols-2",
  },
  {
    name: "projects",
    data: projects,
    columns: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
];

const content = document.getElementById("content-dynamic");

sections.forEach(({ name, data, columns }) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.id = name;
  sectionDiv.className = "container mx-auto p-10 md:p-10 pb-0 scroll-mt-16";
  sectionDiv.innerHTML = `
        <h1 class="text-2xl md:text-4xl capitalize">${name}</h1>
        <div id="${name}-container" class="grid ${columns} gap-10 mt-10"></div>
    `;
  content.appendChild(sectionDiv);

  // ["nav-menu", "nav-mobile-main"].forEach((id) => {
  //   const navLink = document.createElement("a");
  //   navLink.href = `#${name}`;
  //   navLink.className = `${
  //     id === "nav-menu" ? "ml-5 underline-animation" : "mb-5"
  //   } capitalize`;
  //   navLink.textContent = name;
  //   document.getElementById(id).appendChild(navLink);
  // });

  if (data) {
    const container = document.getElementById(`${name}-container`);
    const promises = data.map(
      ({ title, date, description, descriptionHTMLFile }) => {
        const div = document.createElement("div");
        div.className =
          "bg-gray-800 p-5 rounded-lg hover:scale-[1.02] transition-transform";

        if (descriptionHTMLFile) {
          return fetch(`./data/${descriptionHTMLFile}`)
            .then((response) => response.text())
            .then((html) => {
              div.innerHTML = `
              <h2 class="text-lg md:text-2xl">${title}</h2>
              <p class="text-sm md:text-base text-gray-300 italic">${date}</p>
              <div class="mt-5">${html}</div>
            `;
              return div;
            });
        } else if (description) {
          div.innerHTML = `
            <h2 class="text-lg md:text-2xl">${title}</h2>
            <p class="text-sm md:text-base text-gray-300 italic">${date}</p>
            <p class="mt-5">${description}</p>
        `;
          return Promise.resolve(div);
        }
      }
    );

    Promise.all(promises).then((elements) => {
      elements.forEach((element) => {
        if (element) container.appendChild(element);
      });
    });
  }
});
