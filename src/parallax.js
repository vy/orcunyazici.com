var menu, bannerHeader;

function updateHeader(scrollPosition, header) {
  if (scrollPosition === 0) {
    header.classList.remove('scrolled');
  } else {
    header.classList.add('scrolled');
  }
}

function updateBanner(scrollPosition, bannerHeader) {
  var diff = (700 - scrollPosition);
  if (diff >= 0) {
    bannerHeader.style.opacity = `${(diff - 400) / 200}`;
  }
}

function runOnScroll() {
  if (!menu) {
    menu = document.querySelector('.site-menu');
  }

  if (!bannerHeader) {
    bannerHeader = document.querySelector('.banner header');
  }

  var scrollPosition = this.scrollY;
  window.requestAnimationFrame(function () {
    updateHeader(scrollPosition, menu);
    updateBanner(scrollPosition, bannerHeader);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  menu = document.querySelector('.site-menu');
  bannerHeader = document.querySelector('.banner header');

  window.addEventListener("scroll", runOnScroll);
});
