// togle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle kela aktif untuk form

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// toggle aktif untuk shopping cart

const shoppingChart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingChart.classList.toggle('active');
    e.preventDefault();
};

// klik di luar element

const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shopChart = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!shopChart.contains(e.target) && !shoppingChart.contains(e.target)) {
        shoppingChart.classList.remove('active');
    }
});



// clik close detail
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// click do luar

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};