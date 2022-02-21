const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const drawerMenu = document.querySelector("#drawer-menu");
const drawer = document.querySelector("#drawer");
const menuIcon = document.querySelector("#menu-icon");

const updateValue = (e) => {
  sliderValue.innerText = e.target.value;
};

slider.addEventListener("input", updateValue);

const toggleFilter = () => {
  if (drawer.classList.contains("hide-nav")) {
    // To show side nav
    drawer.classList.remove("hide-nav");
    drawer.classList.add("show-nav");
    // To change menu icon
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    // To show side nav
    drawer.classList.remove("show-nav");
    drawer.classList.add("hide-nav");
    // To change menu icon
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
};

drawerMenu.addEventListener("click", toggleFilter);
