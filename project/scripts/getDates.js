document.getElementById("year").innerHTML = (new Date().getFullYear());
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

function myFunction() {
    var x = document.getElementById("myheader");
    if (x.className === "header-right") {
      x.className += " responsive";
    } else {
      x.className = "header-right";
    }
  }