// 스크롤 시, home 섹션 점점 투명하게
const homeSection = document.querySelector('.home');
let homeHeight = homeSection.getBoundingClientRect().height;

window.addEventListener('resize', _.debounce(() => {
  homeHeight = homeSection.getBoundingClientRect().height;
}, 1000))

const makeHomeTransparent = () => {
  const currentY = scrollY;
  if(currentY > homeHeight) return;
  homeSection.style.opacity = `${1 - (currentY/homeHeight)}`;
}

document.addEventListener('scroll', makeHomeTransparent);