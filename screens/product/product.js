const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

const updateValue = (e) => {
  sliderValue.innerText = e.target.value;
};

slider.addEventListener("input", updateValue);
