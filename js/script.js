const links = document.querySelector('.nav__links');
const navBtn = document.querySelector('.menu-btn');

navBtn.addEventListener('click', toggle);
let show = false;
console.log(!show)
function toggle() {
    if(!show) {
        links.classList.add('open');
        show = true;
    } 
    else {
        links.classList.remove('open');
        show = false;
    }
}