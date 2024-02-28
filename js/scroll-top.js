const scrollTop = document.querySelector('#scrollToTopButton')

/*
scrollTop.addEventListener( 'click', (event)=> {
    event.preventDefault()
    console.log(event);

})
*/

function scrollTopFunction () {
    scrollTop.addEventListener( 'click', (event)=> {
        event.preventDefault
        
        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
        
    })
}
    scrollTopFunction();
