const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(open)
  );
});

siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});
