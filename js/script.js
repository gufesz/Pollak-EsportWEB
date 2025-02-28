document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".content-button-main");
    
    if (button) {
        button.addEventListener("click", function () {
            window.location.href = "../html/home.html";
        });
    }
    
});

function myFunction() {
    var x = document.getElementById("jelszok");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function myFunction2() {
  var x = document.getElementById("jelszok2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

