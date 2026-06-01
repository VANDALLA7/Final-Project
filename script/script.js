const navLinks = document.querySelectorAll('.header__nav-item a');
const nav = document.querySelector('.header__nav'); // Это тег <ul>

const line = document.createElement('div');
line.className = 'nav-line';
line.style.cssText = `
    position: absolute;
    bottom: 0;
    height: 4px;
    width: 35px;
    background-color: #C4C4C4;
    border-radius: 6px;
    transition: all 0.4s ease;
`;
nav.appendChild(line);

function moveLine(activeLink) {
    const linkCenter = activeLink.offsetLeft + (activeLink.offsetWidth / 2);
    const lineLeft = linkCenter - (35 / 2);
    line.style.left = lineLeft + 'px';
}

const activeLink = document.querySelector('.header__nav-item a.active');
if (activeLink) {
    moveLine(activeLink);
}

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        moveLine(link);
    });
});

nav.addEventListener('mouseleave', () => {
    if (activeLink) {
        moveLine(activeLink);
    }
});


document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider__pics');
  const slides = document.querySelectorAll('.slide');
  const btn = document.querySelector('.slider__btn');

  if (!track || slides.length === 0 || !btn) return;

  let currentIndex = 1;
  const slideWidth = 300;
  const gap = 1;

  function updateCarousel() {
    const offset = currentIndex * (slideWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
  }

  btn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    updateCarousel();
  });

  updateCarousel();
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribeForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const tel = document.getElementById('tel').value.trim();

    alert('Вы успешно подписались на рассылку!');
    form.reset();
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');
    
    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Анимация бургера в крестик
        const spans = burger.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Закрыть меню при клике на ссылку
    document.querySelectorAll('.header__nav-item a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.querySelectorAll('span').forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
});