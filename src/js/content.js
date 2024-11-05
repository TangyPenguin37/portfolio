import education from "./education.js";
import projects from "./projects.js";

const sections = [
  {
    name: "experience",
  },
  {
    name: "education",
    data: education,
    columns: "grid-cols-1",
  },
  {
    name: "skills",
  },
  {
    name: "projects",
    data: projects,
    columns: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
];

const content = document.getElementById("content");

sections.forEach(({ name, data, columns }) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.id = name;
  sectionDiv.className = "container mx-auto p-20 pb-0";
  sectionDiv.innerHTML = `
        <h1 class="text-4xl capitalize">${name}</h1>
        <div id="${name}-container" class="grid ${columns} gap-10 mt-10"></div>
    `;
  content.appendChild(sectionDiv);

  if (data) {
    data.forEach(({ title, date, description }) => {
      const div = document.createElement("div");
      div.className =
        "bg-gray-800 p-5 rounded-lg hover:scale-105 transition-transform";
      div.innerHTML = `
                <h2 class="text-2xl">${title}</h2>
                <p class="text-gray-300 italic">${date}</p>
                <p class="mt-5">${description}</p>
            `;
      document.getElementById(`${name}-container`).appendChild(div);
    });
  }
});

const div = document.createElement("div");
div.className = "h-20";
content.appendChild(div);
