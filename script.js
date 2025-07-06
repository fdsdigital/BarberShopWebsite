  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');
  const slides = document.querySelectorAll('.review-slide');
  let currentIndex = 0;
  let intervalId;

  function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
  }

  // Manual navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetAutoSlide();
    });
  });

  // Auto-rotation
  function startAutoSlide() {
    intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextIndex);
    }, 5000); // 5 seconds
  }

  function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  // Init
  goToSlide(0);
  startAutoSlide();

  // SERVICES ANIMATION
    document.addEventListener('DOMContentLoaded', function () {
    const target = document.querySelector('.services');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('visible');
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.2 }); // 20% visible before triggering

    if (target) {
      observer.observe(target);
    }
  });

  // INTRO FADE IN
    document.addEventListener('DOMContentLoaded', function () {
    const intro = document.querySelector('.intro');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intro.classList.add('visible');
          observer.unobserve(intro);
        }
      });
    }, { threshold: 0.2 });

    if (intro) {
      observer.observe(intro);
    }
  });

  // SERVICES FADE IN
    document.addEventListener('DOMContentLoaded', () => {
    const leftColumn = document.querySelector('.about-content_main');
    const rightColumn = document.querySelector('.schedule_link');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          leftColumn.classList.add('visible');
          rightColumn.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (leftColumn) {
      observer.observe(leftColumn);
    }
  });
  // HERO FADE IN
    document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hero.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (hero) {
      observer.observe(hero);
    }
  });
// CALENDLY WIDGET LINK FOR THE HERO ANCOR  document.addEventListener('DOMContentLoaded', function () {
   document.addEventListener('DOMContentLoaded', function () {
    const quoteBtn = document.getElementById('quote-trigger');
    if (quoteBtn) {
      quoteBtn.addEventListener('click', function (e) {
        e.preventDefault();
        Calendly.initPopupWidget({ url: 'https://calendly.com/matthewfslcc28/30min' });
      });
    }
  });
  // clickable ancor for cal
    document.addEventListener("DOMContentLoaded", () => {
    const launcher = document.getElementById("calendly-launcher");
    if (launcher) {
      launcher.onclick = function (event) {
        event.preventDefault();
        Calendly.initPopupWidget({
          url: "https://calendly.com/matthewfslcc28/30min"
        });
      };
    }
  });