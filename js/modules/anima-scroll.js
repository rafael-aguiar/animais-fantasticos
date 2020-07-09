export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
  const halfWindow = window.innerHeight * 0.7;

  function animaScroll () {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindow < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      }
    })
  }

  animaScroll();
  window.addEventListener('scroll', animaScroll);
  }
}