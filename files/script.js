
var typed = new Typed(".text", {
    strings: ["Web Development" , "Technical Work" , "Designing"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
 document.body.classList.toggle('dark')
 })
