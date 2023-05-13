/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal')
    modalButtons = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')
    
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((mbutton, i)  => {
    mbutton.addEventListener('click', () => {
        modal(i)
    })
});

modalClose.forEach((mclose)  => {
    mclose.addEventListener('click', () => {
        modalViews.forEach((mview) => {
            mview.classList.remove('active-modal')
        })
    })
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

