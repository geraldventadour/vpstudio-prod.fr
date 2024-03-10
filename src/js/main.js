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