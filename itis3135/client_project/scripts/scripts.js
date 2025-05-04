// Carousel 
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;


function updateCarousel() {
    const offset = -currentIndex * 100;  
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    updateCarousel();
}

// Tutorial Sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.tutorial-section');
    sections.forEach((section) => {
      section.classList.add('hidden');
      section.classList.remove('active');
    });
  
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.remove('hidden');
      target.classList.add('active');
    }
  }


  // JS For FAQs
document.querySelectorAll('.faq-item').forEach((faq) => {
faq.addEventListener('toggle', function() {
    if (faq.open) {
    // Close other FAQ items
    document.querySelectorAll('.faq-item').forEach((otherFaq) => {
        if (otherFaq !== faq) {
        otherFaq.removeAttribute('open');
        }
    });
    }
});
});

// Dynamic url loading for WAVE
function loadWAVE() {

    const currentPage = window.location.pathname;  // Get the path of the current page
    const webAIMUrl = `https://wave.webaim.org/report#/${window.location.origin}${currentPage}`;  // Form the WebAIM URL
    
    window.open(webAIMUrl, '_blank');  // Open the WAVE report in a new tab

}


  
  