import dishesListTpl from "../templates/listItems.hbs"
import dishes from './menu.json';
// import f from "./templates"

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.getElementById("theme-switch-toggle");
const currentTheme = localStorage.getItem("theme");
const bodyEl = document.querySelector("body");
const menu = document.querySelector("ul.menu.js-menu");

if (!currentTheme) {
    localStorage.setItem("theme", Theme.LIGHT)
    bodyEl.classList.add(Theme.LIGHT);
} else {
    bodyEl.classList.add(currentTheme);
    currentTheme === Theme.LIGHT ? themeSwitcher.checked = false : themeSwitcher.checked = true;
};

themeSwitcher.addEventListener("change", onThemeSwitcherChange)

function onThemeSwitcherChange() {
    if (themeSwitcher.checked) {
        localStorage.setItem("theme", Theme.DARK)
    } else {
        localStorage.setItem("theme", Theme.LIGHT)
    };
    bodyEl.classList.toggle(Theme.LIGHT);
    bodyEl.classList.toggle(Theme.DARK);
};

menu.innerHTML = dishesListTpl({ dishes });