/*---------------------------------------------------------------------*/
/*                            SHOW MENU                                */
/*---------------------------------------------------------------------*/

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


/*---------------------------------------------------------------------*/
/*                           MENU SHOW                                 */
/*---------------------------------------------------------------------*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*---------------------------------------------------------------------*/
/*                           MENU HIDDEN                               */
/*---------------------------------------------------------------------*/

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}




const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*---------------------------------------------------------------------*/
/*                      CHANGE BACKGROUND HEADER                       */
/*---------------------------------------------------------------------*/

function scrollheader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 100)
        header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollheader)

/*---------------------------------------------------------------------*/
/*                           SWIPER                                    */
/*---------------------------------------------------------------------*/

var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

/*---------------------------------------------------------------------*/
/*                              VIDEO                                  */
/*---------------------------------------------------------------------*/

const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

function playPause() {
    if (videoFile.paused) {
        // play video
        videoFile.play()

        // we change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        // pause video
        videoFile.pause()

        // we change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')


    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    //video ends, change icon 
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
videoFile.addEventListener('ended', finalVideo)

/*---------------------------------------------------------------------*/
/*                              SCROLL UP                              */
/*---------------------------------------------------------------------*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*---------------------------------------------------------------------*/
/*                       SCROLL ACTIVE LINK                            */
/*---------------------------------------------------------------------*/
const seccion = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset


    seccion.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*---------------------------------------------------------------------*/
/*                           DARK LIGHT THEME                          */
/*---------------------------------------------------------------------*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*---------------------------------------------------------------------*/
/*                           SCROLL REVEAL                             */
/*---------------------------------------------------------------------*/

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,

})

sr.reveal(`.home__data, .home__social-link, .home__info, .discover__container, .experience__data, .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, .video__description, .subscribe__description`, {
    origin: 'left',

})

sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
    origin: 'right',
    interval: 100,
})