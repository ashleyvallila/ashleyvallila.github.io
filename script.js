const header = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu");
const siteNav = document.querySelector("#links");

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  },
  { passive: true }
);

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});
