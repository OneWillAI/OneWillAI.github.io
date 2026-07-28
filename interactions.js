(() => {
  const terms = [...document.querySelectorAll(".state-term, .disclaimer-term")];

  if (!terms.length) return;

  const close = (term) => {
    term.classList.remove("is-open");
    term.setAttribute("aria-expanded", "false");
  };

  const closeOthers = (current) => {
    terms.forEach((term) => {
      if (term !== current) close(term);
    });
  };

  const toggle = (term) => {
    const willOpen = !term.classList.contains("is-open");
    closeOthers(term);
    term.classList.toggle("is-open", willOpen);
    term.setAttribute("aria-expanded", String(willOpen));
  };

  terms.forEach((term) => {
    term.setAttribute("aria-expanded", "false");

    term.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      event.stopPropagation();
      toggle(term);
    });

    term.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle(term);
      }

      if (event.key === "Escape") {
        close(term);
        term.blur();
      }
    });

    term.addEventListener("focusout", () => {
      window.setTimeout(() => {
        if (!term.contains(document.activeElement)) close(term);
      }, 0);
    });
  });

  document.addEventListener("click", () => {
    terms.forEach(close);
  });
})();

(() => {
  const carousel = document.querySelector("[data-action-carousel]");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll("[data-action-slide]")];
  const dots = [...carousel.querySelectorAll("[data-action-dot]")];
  const previous = carousel.querySelector("[data-action-previous]");
  const next = carousel.querySelector("[data-action-next]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let carouselVisible = !("IntersectionObserver" in window);
  let touchStartX = null;

  const unloadVideo = (video) => {
    video.pause();

    if (video.dataset.loaded !== "true") return;

    video.querySelectorAll("source").forEach((source) => {
      source.removeAttribute("src");
    });
    video.removeAttribute("data-loaded");
    video.load();
  };

  const playVideo = (video) => {
    if (video.dataset.loaded !== "true") {
      video.querySelectorAll("source").forEach((source) => {
        source.src = source.dataset.src;
      });
      video.dataset.loaded = "true";
      video.load();
    }

    const playback = video.play();
    if (playback) playback.catch(() => {});
  };

  const syncVideos = () => {
    slides.forEach((slide, slideIndex) => {
      const video = slide.querySelector("[data-action-video]");
      const shouldPlay =
        slideIndex === current &&
        carouselVisible &&
        !document.hidden &&
        !reducedMotion.matches;

      if (shouldPlay) {
        playVideo(video);
      } else {
        unloadVideo(video);
      }
    });
  };

  const show = (index) => {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== current;
    });

    dots.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-pressed", String(dotIndex === current));
    });

    syncVideos();
  };

  previous.addEventListener("click", () => show(current - 1));
  next.addEventListener("click", () => show(current + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => show(index));
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(current - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      show(current + 1);
    }
  });

  carousel.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );

  carousel.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) return;
      const distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;

      if (Math.abs(distance) < 40) return;
      show(current + (distance < 0 ? 1 : -1));
    },
    { passive: true },
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        carouselVisible = entry.isIntersecting;
        syncVideos();
      },
      { threshold: 0.15 },
    );
    observer.observe(carousel);
  }

  const handleReducedMotion = () => syncVideos();
  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener("change", handleReducedMotion);
  } else {
    reducedMotion.addListener(handleReducedMotion);
  }

  document.addEventListener("visibilitychange", syncVideos);

  show(0);
})();
