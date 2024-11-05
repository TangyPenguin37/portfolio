document.addEventListener("DOMContentLoaded", () => {
  // document.querySelectorAll(".nav").forEach((nav) => {
  //   nav.style.opacity = window.scrollY > 100 ? 1 : 0;
  // });
  if (window.scrollY > 100) {
    document.querySelectorAll(".nav").forEach((nav) => {
      nav.style.opacity = 1;
    });
  } else {
    document.querySelectorAll(".nav").forEach((nav) => {
      nav.style.opacity = 0;
    });
    if (
      !document.getElementById("nav-mobile").classList.contains("hidden") &&
      window.innerWidth < 768
    ) {
      document.getElementById("nav-mobile").classList.add("hidden");
    }
  }
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX + window.scrollX) / document.body.scrollWidth;
  const y = (e.clientY + window.scrollY) / document.body.scrollHeight;
  document.body.style.background = `radial-gradient(circle at ${x * 100}% ${
    y * 100
  }%, #0e1646 0%, #000315 15%)`;
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.querySelectorAll(".nav").forEach((nav) => {
      nav.style.opacity = 1;
    });
  } else {
    document.querySelectorAll(".nav").forEach((nav) => {
      nav.style.opacity = 0;
    });
    if (
      !document.getElementById("nav-mobile").classList.contains("hidden") &&
      window.innerWidth < 768
    ) {
      document.getElementById("nav-mobile").classList.add("hidden");
    }
  }
});
