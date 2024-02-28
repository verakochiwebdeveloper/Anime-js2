const elements = document.querySelectorAll('.set-bg');

function forAnimeElements () {
    for(let i = 0; i < elements.length; i++) {
        const srcAnimeElements = elements[i].dataset.setbg;

        elements[i].style.backgroundImage =`url(${srcAnimeElements})`
    }
}

forAnimeElements()