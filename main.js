const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const btns = document.querySelectorAll('.nav-btn');



menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});


