// modal menu 

const openMenuBtn = document.querySelectorAll('.menu-open-btn')

const closeMenuBtn = document.querySelector('.menu-close-btn')
const modalMenu = document.querySelector('.modal-menu')

openMenuBtn.forEach((button) => {
    button.addEventListener('click', () => {
    modalMenu.classList.add('active')
    })
})

closeMenuBtn.addEventListener('click', () => {
    modalMenu.classList.remove('active')
})

// modal video

const openVideoBtn = document.querySelector('.play-btn')
const videoBackground = document.querySelector('.video-background')
const videoUrl = document.querySelector('iframe')

openVideoBtn.addEventListener('click', () => {
    videoBackground.classList.add('active')
    videoUrl.setAttribute('src', 'https://www.youtube-nocookie.com/embed/7gquYRxLMFI')

})

videoBackground.addEventListener('click', () => {
    videoBackground.classList.remove('active')
    videoUrl.setAttribute('src', '')
})

// scroll transition 

const sections = document.querySelectorAll('.js-scroll')
const activeScreenHeight = window.innerHeight * 0.7

sections[0].classList.add('active')

function animeScroll () {
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top < activeScreenHeight) {
            section.classList.add('active')
        } else {
            section.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', animeScroll)

