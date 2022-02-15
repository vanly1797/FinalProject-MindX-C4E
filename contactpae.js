//Get the button:
mybutton = document.getElementById("myBackToTop");
const socialBtn = document.getElementById("link");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    socialBtn.style.display = "block"
    
  } else {
    mybutton.style.display = "none";
    socialBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}