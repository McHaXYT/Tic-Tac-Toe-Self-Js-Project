const openAboutBtn = document.getElementById('open-about-btn');
const openHowBtn = document.getElementById('open-how-btn');
const aboutContainer = document.getElementById('about-container-id');
const howContainer = document.getElementById('how-container');
const backBtnAbout = document.getElementById('close-btn-about');
const backBtnHow = document.getElementById('close-btn-how');

openAboutBtn.addEventListener('click', function() {
    aboutContainer.classList.remove('display-none');
});
openHowBtn.addEventListener('click', function() {
    howContainer.classList.remove('display-none');
});
backBtnAbout.addEventListener('click', function() {
    aboutContainer.classList.add('display-none');
});
backBtnHow.addEventListener('click', function() {
    howContainer.classList.add('display-none');
});
