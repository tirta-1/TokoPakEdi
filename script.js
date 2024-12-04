// toggle class active
const navbaarNav = document.querySelector('.navbar-nav')
// klik hamburger menu
document.querySelector('#hamburger-menu').onclick = () =>{
    navbaarNav.classList.toggle('active');
}

// klik di luar sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbaarNav.contains(e.target)) {
        navbaarNav.classList.remove('active');
    }
})