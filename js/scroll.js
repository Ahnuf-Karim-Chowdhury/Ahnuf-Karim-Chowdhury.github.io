const scrollAnimation = document.querySelector('[data-anima="scroll"]');

const halfWindow = window.innerHeight * 4.0;


function animaScroll(){
    const topItem = scrollAnimation.getBoundingClientRect().top;

    const visible = topItem - halfWindow < 0;

    if(visible){
        scrollAnimation.classList.add('show--button');
    } else {
        scrollAnimation.classList.remove('show--button');
    };

}

window.addEventListener('scroll', animaScroll);