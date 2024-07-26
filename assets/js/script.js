document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel img");
    let current = 0;
  
    function showNextImage() {
      images[current].classList.remove("active");
      images[current].classList.add("next");
  
      current = (current + 1) % images.length;
  
      images[current].classList.remove("next");
      images[current].classList.add("active");
    }
  
    setInterval(showNextImage, 3000); // Troca a imagem a cada 3 segundos
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const blurElements = document.querySelectorAll('.blur');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Se o elemento está visível, remova o desfoque
          entry.target.classList.add('in-view');
        } else {
          // Se o elemento não está visível, aplique o desfoque
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: [0, 1] });
  
    blurElements.forEach(element => {
      observer.observe(element);
    });
  });
  