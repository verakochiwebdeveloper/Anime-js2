const elements = document.querySelectorAll('.set-bg');

function forAnimeElements () {
    

    elements.forEach((elem) => {

        elem.style.backgroundImage =`url(${elem.dataset.setbg})`
    })
    
}

forAnimeElements()