const menuBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

/* STICKY NAVIGATION */

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);
obs.observe(sectionHeroEl);
