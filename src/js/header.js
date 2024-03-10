const header = document.querySelector('header');
const scrollWatcher = document.createElement('div');
const scrollEndWatcher = document.createElement('div');
const firstArticle = document.querySelector('article');

scrollWatcher.setAttribute('data-scroll-watcher', '');
scrollEndWatcher.setAttribute('data-scroll-end-watcher','')
header.before(scrollWatcher);
firstArticle.after(scrollEndWatcher);

const navObserver = new IntersectionObserver((entries) => {
  header.classList.toggle('sticking', !entries[0].isIntersecting);
 /*  header.classList.toggle('hidden', !scrollEndWatcher.isIntersecting); */
});

navObserver.observe(scrollWatcher);

/* const articleObserver = new IntersectionObserver((entries) => {
  header.classList.toggle('hidden')
})

articleObserver.observe(scrollEndWatcher); */