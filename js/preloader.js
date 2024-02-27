const preloader = document.querySelector('.preloder');

function forAnimePreloader () {
    preloader.classList.add('active');

    setTimeout(() => {
        preloader.classList.remove('active')
    }, 500)
}

forAnimePreloader ()