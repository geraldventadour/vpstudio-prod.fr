const header = document.querySelector('header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  header.classList.toggle('sticking', !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher)
