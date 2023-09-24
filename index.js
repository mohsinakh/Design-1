// Get all sliders by their common class name
var sliders = document.querySelectorAll(".slider");

// Function to set the background color based on the slider value
function setSliderColor(slider) {
  return function() {
    // Calculate the color based on the value (adjust the range as needed)
    var color = "linear-gradient(to right, #fd6f00 " + slider.value + "%, #ccc " + slider.value + "%)";
    // Apply the calculated color to the ::after pseudo-element of the specific slider
    slider.style.background = color;
  };
}

// Initial setup for each slider
sliders.forEach(function(slider) {
  var onSliderChange = setSliderColor(slider);
  onSliderChange(); // Set initial color
  slider.addEventListener("input", onSliderChange); // Update color when slider is moved
});

