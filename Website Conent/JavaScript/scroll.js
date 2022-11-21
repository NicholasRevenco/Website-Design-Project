/* I found this code online, but used a bit of my previous knowledge of JavaScript to understand what happens*/

function reveal() {
  //Finds the item that have the "reveal" class tag
  var reveals = document.querySelectorAll(".reveal");
  // A for loop that goes through where the user is in the site
  for (var i = 0; i < reveals.length; i++) {
    // The height of the window
    var windowHeight = window.innerHeight;
    // Sets elementTop to the position of in relative to the viewport
    var elementTop = reveals[i].getBoundingClientRect().top;
    // How far away the "reveal" tag it should react
    var elementVisible = 15;
    // If the user has scrolled past a certain point, the if statment will run
    if (elementTop < windowHeight - elementVisible) {
      // Active or inactive
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
