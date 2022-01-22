const links = document.querySelectorAll('.header-menu__item a');
const characteristicLink = document.querySelector('.card-details__link-characteristics');

seamless.polyfill();

links.forEach((element) =>{
    scroll(element);
});

characteristicLink.addEventListener('click', () => {
    scroll(characteristicLink);
})

function scroll(element){
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const id = element.getAttribute('href').substring(1);
        const section = document.getElementById(id);
     
        if(section){
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            });
        };
    });
};