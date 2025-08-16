
function toggleExpand(item) {
    const content = item.querySelector('.full-content');
    const arrow = item.querySelector('.sakura-arrow');
    
    content.classList.toggle('hidden');
    arrow.classList.toggle('rotated');
    
    if (!content.classList.contains('hidden')) {
        content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-section');
  
    const checkVisibility = () => {
      const windowBottom = window.innerHeight;
  
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowBottom - 100) {
          el.classList.add('is-visible');
        }
      });
    };
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
  });
  



  
