const sceneLinks = [...document.querySelectorAll('.scene-nav a')];

const localNavTargets = sceneLinks
  .filter((link) => link.hash)
  .map((link) => ({ link, target: document.getElementById(link.hash.slice(1)) }))
  .filter(({ target }) => target);

if (localNavTargets.length > 0) {
  const setActiveNav = (targetId) => {
    sceneLinks.forEach((link) => {
      const isActive = link.hash === `#${targetId}`;
      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const findPrimaryTarget = () => {
    const viewportFocusLine = window.innerHeight * 0.34;

    return localNavTargets
      .map(({ target }) => {
        const rect = target.getBoundingClientRect();
        const visible = rect.bottom > 0 && rect.top < window.innerHeight;
        return {
          target,
          visible,
          distance: Math.abs(rect.top - viewportFocusLine)
        };
      })
      .filter(({ visible }) => visible)
      .sort((a, b) => a.distance - b.distance)[0]?.target;
  };

  const syncActiveNav = () => {
    const hashTarget = window.location.hash
      ? document.getElementById(window.location.hash.slice(1))
      : null;
    const target = hashTarget || findPrimaryTarget() || localNavTargets[0].target;
    setActiveNav(target.id);
  };

  const activeObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActiveNav(visible.target.id);
    },
    {
      rootMargin: '-18% 0px -55%',
      threshold: [0.12, 0.28, 0.48, 0.68]
    }
  );

  localNavTargets.forEach(({ link, target }) => {
    activeObserver.observe(target);
    link.addEventListener('click', () => setActiveNav(target.id));
  });

  window.addEventListener('hashchange', syncActiveNav);
  window.addEventListener('load', syncActiveNav, { once: true });
  requestAnimationFrame(syncActiveNav);
}
