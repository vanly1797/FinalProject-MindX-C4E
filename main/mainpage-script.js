// Get the plugin
let plug = document.getElementById("pluginSearch");
let plug1 = document.getElementById("pluginLogin");
let plug2 = document.getElementById("pluginCart");

// Get the button that opens the plugin
let btn = document.getElementById("btnSearch");
let btn1 = document.getElementById("btnLogin");
let btn2 = document.getElementById("btnCart");

// Get the <span> element that closes the plugin
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the plugin 
btn.onclick = function() {
  plug.style.display = "block";
}
btn1.onclick = function() {
  plug1.style.display = "block";
}
btn2.onclick = function() {
  plug2.style.display = "block";
}

// When the user clicks on <span> (x), close the plugin
span.onclick = function() {
  plug.style.display = "none";
}
span1.onclick = function() {
  plug1.style.display = "none";
}
span2.onclick = function() {
  plug2.style.display = "none";
}

// When the user clicks anywhere outside of the plugin, close it
window.onclick = function(event) {
  if (event.target == plug ||event.target == plug1||event.target == plug2) {
    plug.style.display = "none";
    plug1.style.display = "none";
    plug2.style.display = "none";
  }
}

// Login
let submit = document.getElementById("myForm");

submit.addEventListener("click", function () {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let username = document.getElementById("username").value;
    let usernameCheck = re.test(username);

    let pass = document.getElementById("pass").value;
    let passCheck = pass.split("").length;

    let total = document.getElementById("total");
    let login1 = document.getElementById("login1");
    let warning1 = document.getElementById("warning1");
    let warning2 = document.getElementById("warning2");

    if(usernameCheck && passCheck >= 8){
        total.remove("login");
        login1.style.display = "block";
    } else if (!usernameCheck && passCheck >= 8){
        warning1.style.display = "block";
    } else if (usernameCheck && passCheck < 8){
        warning2.style.display = "block";
    } else {
        warning1.style.display = "block";
        warning2.style.display = "block";
    }
})