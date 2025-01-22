const sections = document.querySelectorAll('.section');
const switcherBtns = document.querySelectorAll('.sections-switcher--button');
const identifiedPersonCounts = document.querySelectorAll('.identified-person-count');

switcherBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    switcherBtns.forEach((switcher) => {
      switcher.style.color = '#2D2D31';
    });
    btn.style.color = '#E7682A';

    const targetSection = btn.dataset.target;

    sections.forEach((section) => {
      if (section.id === targetSection) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});

identifiedPersonCounts.forEach((count) => {
  const personCount = parseInt(count.innerText);
  
  if (personCount >= 1) {
    count.style.color = '#E7682A';
  }
});
