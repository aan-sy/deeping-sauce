const header = document.querySelector('.header');
let headerHeight = header.getBoundingClientRect().height;
const homeSection = document.querySelector('.home');
const homeHeight = homeSection.getBoundingClientRect().height;
const toggleBtn = document.querySelector('.toggle-menu');
const menu = document.querySelector('header .menu');

window.addEventListener('resize', _.debounce(() => {
  headerHeight = header.getBoundingClientRect().height;
}, 1000))

let prevY = 0;
let currentY = 0;
let isScrollDown = false;

const checkScrollDown = () => {
  currentY = scrollY;
  isScrollDown = prevY < currentY ? true : false;
  prevY = currentY;
}

const show = () => {  
  if(isScrollDown && (currentY >= homeHeight) && !menu.classList.contains('open')) {
    header.style.transform = `translateY(-${headerHeight}px)`
  } else if(!isScrollDown) {
    header.style.transform = 'translateY(0)';
  }
}

const makeDarker = () => {
  if(isScrollDown && (currentY >= headerHeight)) {
    header.classList.add('dark');
  } else if(!isScrollDown && (currentY < headerHeight)) {
    header.classList.remove('dark');
  }
}

document.addEventListener('scroll', () => {
  checkScrollDown();
  show();
  makeDarker();
})

// 모바일에서 nav 메뉴 토글
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  if(menu.classList.contains('open')) {
    toggleBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
  }
})

menu.addEventListener('click', e => {
  menu.classList.remove('open');
  toggleBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
})