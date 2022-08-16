import './src/sass/main.scss'

const menu = document.querySelector('.sidebar__menu')
const menuSwitcher = document.querySelector('.sidebar__menu-switcher')
const html = document.querySelector('html')

menuSwitcher.addEventListener('click', () => {
  menu.classList.toggle('sidebar__menu-active')
  menuSwitcher.classList.toggle('sidebar__nav-btn-active')
  html.classList.toggle('noScroll')
})

menu.addEventListener('click', (e) => {
  if (e.target === menu) {
    menu.classList.toggle('sidebar__menu-active')
    menuSwitcher.classList.toggle('sidebar__nav-btn-active')
    html.classList.toggle('noScroll')
  }
})
