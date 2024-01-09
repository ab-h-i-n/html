const menuBtn = document.querySelector(".menu-icon");
const navBar = document.querySelector("nav");

menuBtn.addEventListener("click",()=>{
    if(navBar.classList.contains('expanded')){
        navBar.classList.remove('expanded');
    }else{
        navBar.classList.add('expanded');
    }
})


function changeText() {
    const text = document.querySelector('.changeing-heading .text');
    const textData = ['Monkey D Luffy', 'Captain', 'Emperor', 'King of the pirates'];
    let index = 0;

    setInterval(() => {
        text.style.opacity = 0;
        setTimeout(() => {
            text.innerText = textData[index];
            text.style.opacity = 1;
        }, 500); // Wait for the fade-out to complete before changing text
        index = (index + 1) % textData.length;
    }, 2500); // Adjusted the interval to allow for the fade-in/out effect
}

changeText();


const screen2 = document.querySelector('screen-2');

function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= window.innerHeight) {
        navBar.classList.add('scrolled');
        navBar.style.opacity = 1;

    }else{
        navBar.classList.remove('scrolled');
        navBar.style.opacity = 0;
    }
}


window.addEventListener('scroll', handleScroll);
