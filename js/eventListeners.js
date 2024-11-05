document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".bg-opacity-50").style.opacity =
    window.scrollY > 100 ? 1 : 0;
});
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX + window.scrollX) / document.body.scrollWidth;
  const y = (e.clientY + window.scrollY) / document.body.scrollHeight;
  document.body.style.background = `radial-gradient(circle at ${x * 100}% ${
    y * 100
  }%, #0e1646 0%, #000315 15%)`;
});
document.addEventListener("scroll", () => {
  document.querySelector(".bg-opacity-50").style.opacity =
    window.scrollY > 100 ? 1 : 0;
});
