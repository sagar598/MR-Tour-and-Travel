

// Function to initialize the navbar
function initializeNavbar() {
    const button = document.querySelector('[data-collapse-toggle]');
    const menu = document.querySelector('#mobile-menu-2');
    const navLinks = document.querySelectorAll('#mobile-menu-2 a');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
  
    button.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
  
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            button.setAttribute('aria-expanded', 'false');
            menu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
  }
  
  // Function to fetch and insert HTML content
  function fetchAndInsert(url, placeholderId, callback) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(placeholderId).innerHTML = html;
            if (callback) {
                callback(); // Execute the callback function after inserting HTML
            }
        })
        .catch(error => console.error(`Error fetching ${url}:`, error));
  }
  
  // Load the header HTML
  document.addEventListener("DOMContentLoaded", function () {
    fetchAndInsert('/header.html', 'header-placeholder', function () {
        // After loading the header, initialize the navbar
        initializeNavbar();
  
        // Add event listener to change navbar styles on scroll
        const navbar = document.querySelector('header nav');
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                // Scrolled down, add styles
                navbar.classList.remove('bg-transparent', 'text-white');
                navbar.classList.add('bg-white', 'text-customBlue');
            } else {
                // At the top, remove styles
                navbar.classList.remove('bg-white', 'text-customBlue');
                navbar.classList.add('bg-transparent', 'text-white');
            }
        });
    });
  });
  
  // Load the footer HTML
  document.addEventListener("DOMContentLoaded", function () {
    fetchAndInsert('/footer.html', 'footer-placeholder');
  });

  





// Car Slider 

document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.getElementById('sliderContainer');
    const slides = sliderContainer.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth;
    const slidesToShow = 3;
    let currentIndex = 0;
  
    // Duplicate slides for continuous loop
    for (let i = 0; i < slidesToShow; i++) {
        const clone = slides[i].cloneNode(true);
        sliderContainer.appendChild(clone);
    }
  
    function updateSlider() {
        sliderContainer.style.transition = 'transform 0.5s ease-in-out';
        sliderContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
    }
  
    function nextSlide() {
        currentIndex++;
        updateSlider();
    }
  
    function prevSlide() {
        currentIndex--;
        updateSlider();
    }
  
    function handleTransitionEnd() {
        if (currentIndex >= slides.length) {
            currentIndex = 0;
            sliderContainer.style.transition = 'none';
            sliderContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
        } else if (currentIndex < 0) {
            currentIndex = slides.length - 1;
            sliderContainer.style.transition = 'none';
            sliderContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
        }
    }
  
    sliderContainer.addEventListener('transitionend', handleTransitionEnd);
  
    function initSlider() {
        setInterval(nextSlide, 3000); // Auto-advance slides every 3 seconds
    }
  
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
  
    initSlider();
  });
  