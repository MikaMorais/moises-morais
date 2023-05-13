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
let mixerPortfolio = mixitup('.project__container', {
    selectors: {
        target: '.project__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkProject = document.querySelectorAll('.project__item')

function activeProject() {
    linkProject.forEach(l => l.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(l => l.addEventListener('click', activeProject))

/*=============== SWIPER STAR PROJECTS ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

