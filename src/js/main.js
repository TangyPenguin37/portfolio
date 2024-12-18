function readMore(moreContentId, readMoreButtonId) {
  const moreContent = document.getElementById(moreContentId);
  const readMoreButton = document.getElementById(readMoreButtonId);
  if (
    moreContent.style.display === "none" ||
    moreContent.style.display === ""
  ) {
    $(moreContent).slideDown();
    readMoreButton.innerText = "Read Less ↑";
    moreContent.style.display = "block";
  } else {
    $(moreContent).slideUp();
    readMoreButton.innerText = "Read More ↓";
  }
}

const toggleNavMobile = () => {
  const navMobile = document.getElementById("nav-mobile");
  const isOff = navMobile.classList.toggle("off");
  navMobile.classList.toggle("on", !isOff);
  navMobile.style.transform = isOff ? "translateY(-200%)" : "translateY(0)";
};

const navElements = document.querySelectorAll(".nav");
let lastIsScrolled = null;

const navBar = () => {
  const isScrolled = window.scrollY > 700;
  if (isScrolled !== lastIsScrolled) {
    navElements.forEach((nav) => {
      nav.style.visibility = isScrolled ? "visible" : "hidden";
      nav.style.opacity = isScrolled ? 1 : 0;
    });
    lastIsScrolled = isScrolled;
  }
};

$(document).ready(() => {
  navBar();
  $(document).on("scroll", navBar);

  $(document).on("mousemove", (e) => {
    const x = (e.clientX + window.scrollX) / document.body.scrollWidth;
    const y = (e.clientY + window.scrollY) / document.body.scrollHeight;
    $("body").css(
      "background",
      `radial-gradient(circle at ${x * 100}% ${
        y * 100
      }%, #131e5b 0%, #000523 15%)`
    );
  });
});

const bigBall = document.querySelector(".cursor_ball-big");
const smallBall = document.querySelector(".cursor_ball-small");

const updateHoverables = () => {
  $("a, [id$='read-more']").each((_, el) => {
    el.addEventListener("mouseenter", () =>
      TweenMax.to(bigBall, 0.3, { scale: 4 })
    );
    el.addEventListener("mouseleave", () =>
      TweenMax.to(bigBall, 0.3, { scale: 1 })
    );
  });
};

document.body.addEventListener("mousemove", (e) => {
  TweenMax.to(bigBall, 0.4, { x: e.clientX - 15, y: e.clientY - 15 });
  TweenMax.to(smallBall, 0.1, { x: e.clientX - 5, y: e.clientY - 7 });
});

new MutationObserver(updateHoverables).observe(document.body, {
  childList: true,
  subtree: true,
});

updateHoverables();
