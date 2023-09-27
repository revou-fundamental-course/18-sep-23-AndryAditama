//function untuk validasi form
function validationForm() {
    let name = document.forms['formContact']['yourName'].value;
    let email = document.forms['formContact']['yourEmail'].value;
    let opt = document.forms['formContact']['selection'].value;
    
    // console.log(name);
    // console.log(email);
    // console.log(opt);

    if(!name){
        document.getElementById("nameError").innerHTML = "Name cannot be blank!";
    }else{
        document.getElementById("nameError").innerHTML = "";
    }

    if(!email){
        document.getElementById("emailError").innerHTML = "Email cannot be blank!";
    }else{
        document.getElementById("emailError").innerHTML = "";
    }

    if(!opt){
        document.getElementById("selectError").innerHTML = "Interest cannot be blank!";
    }else{
        document.getElementById("selectError").innerHTML = "";
    }
};


let slideIndex = 1;
showDiv(slideIndex);

function plusDiv(n) {
    showDiv(slideIndex += n);
}

function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("images");
    if (n > x.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block"
}

setInterval(() => {
    plusDiv(1);
}, 3000)

// const carousel = document.getElementsByClassName("images");
// console.log(carousel);
// let currentIndex = 0;
// let interval = 5000;

// function nextSlide() {
//     carousel[currentIndex].classList.remove("active");
//     currentIndex = (currentIndex + 1) % carousel.length;
//     carousel[currentIndex].classList.add('active');
// }

// function startSlide(){
//     setInterval(nextSlide, interval);
// }

// (function(){
//     startSlide();
// })()

// let slideIndex = 1;
// showDiv(slideIndex);

// function plusDiv(n){
//     showDiv(slideIndex +=n);
// }

// function showDiv(n) {
//     var i;
//     var x = document.getElementsByClassName("images");
//     if (n > x.length) {
//         slideIndex = 1;
//     }

//     if (n < 1) {
//         slideIndex = x.length;
//     }

//     for (i = 0; i < x.length; i++){
//         x[1].style.display = "none";
//     }
//     x[slideIndex - 1].style.display = "block"
// }
