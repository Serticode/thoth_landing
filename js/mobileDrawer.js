document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("site-nav");
  const trigger = document.getElementById("mobile-trigger");
  const scrim = document.getElementById("mobile-scrim");
  const drawer = document.getElementById("mobile-drawer");
  const closeBtn = document.getElementById("mobile-drawer-close");
  const links = drawer?.querySelectorAll(".mobile-drawer__link");

  // ── Mobile drawer ──

  function open() {
    trigger?.classList.add("mobile-trigger--open");
    scrim?.classList.add("mobile-scrim--open");
    drawer?.classList.add("mobile-drawer--open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    trigger?.classList.remove("mobile-trigger--open");
    scrim?.classList.remove("mobile-scrim--open");
    drawer?.classList.remove("mobile-drawer--open");
    document.body.style.overflow = "";
  }

  trigger?.addEventListener("click", () => {
    drawer?.classList.contains("mobile-drawer--open") ? close() : open();
  });

  scrim?.addEventListener("click", close);
  closeBtn?.addEventListener("click", close);
  links?.forEach((l) => l.addEventListener("click", close));

  // ── Auto hide on scroll ──

  let lastScroll = 0;
  const hideThreshold = 80;

  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current < hideThreshold) {
      nav?.classList.remove("nav--hidden");
      trigger?.classList.remove("mobile-trigger--hidden");
      return;
    }
    if (current > lastScroll + 8) {
      nav?.classList.add("nav--hidden");
      trigger?.classList.add("mobile-trigger--hidden");
    } else if (current < lastScroll - 8) {
      nav?.classList.remove("nav--hidden");
      trigger?.classList.remove("mobile-trigger--hidden");
    }
    lastScroll = current;
  }, { passive: true });
});
