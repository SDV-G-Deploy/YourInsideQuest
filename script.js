const sceneLinks = document.querySelectorAll('.scene-nav a');
const sections = [...document.querySelectorAll('.scene')];

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    sceneLinks.forEach((link) => {
      link.toggleAttribute('aria-current', link.hash === `#${visible.target.id}`);
    });
  },
  { threshold: [0.36, 0.58, 0.72] }
);

sections.forEach((section) => observer.observe(section));
