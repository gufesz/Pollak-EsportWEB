document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".content-button-main");
    
    if (button) {
        button.addEventListener("click", function () {
            window.location.href = "../html/home.html";
        });
    }
    
});