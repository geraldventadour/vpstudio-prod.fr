
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
const textSection = document.querySelector("section.text");
const scrollwatcher = document.createElement('div');

scrollwatcher.setAttribute('data-fade-in-up-watcher','');
textSection.after(scrollwatcher);

const fadeInObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    textSection.classList.add('fadeInUp');
  }
})

fadeInObserver.observe(scrollwatcher);