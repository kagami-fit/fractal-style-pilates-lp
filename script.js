const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");

toggle?.addEventListener("click", () => {
  nav?.classList.toggle("is-open");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
});

const updateCampaignDeadline = () => {
  const now = new Date();
  const monthIndex = now.getMonth();
  const lastDay = new Date(now.getFullYear(), monthIndex + 1, 0).getDate();
  const label = `${monthIndex + 1}月${lastDay}日まで`;

  document.querySelectorAll("[data-campaign-deadline]").forEach((el) => {
    el.textContent = label;
  });
};

updateCampaignDeadline();
