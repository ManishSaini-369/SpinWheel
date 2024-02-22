document.addEventListener("DOMContentLoaded", function() {
    var openModalBtn = document.getElementById("openModalBtn");
    var modal = document.getElementById("myModal");
    var closeModalBtn = modal.getElementsByClassName("close")[0];

    openModalBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 5000);

btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 5000);
}
