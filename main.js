let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let imgnav= document.querySelector('#imgnav')
let consol = document.querySelector('#console')
let navcol = document.querySelector('.navcol')


window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-cielo');
        navcol.classList.remove('bg-black');
        navcol.classList.add('bg-cielo');
        navbar.style.height = '80px';
        links.forEach( (link)=>{
            link.style.color = 'var(--white)'
        } );
        imgnav.src= "http://127.0.0.1:5500/media/logo-w.png"
        consol.src ="http://127.0.0.1:5500/media/nav-w.png"
    }
    else{
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-cielo');
        navcol.classList.add('bg-black');
        navcol.classList.remove('bg-cielo');
        navbar.style.height = '160px';
        links.forEach( (link)=>{
            link.style.color = 'var(--violet)'
        } );
        imgnav.src= "http://127.0.0.1:5500/media/logo-v.png"
        consol.src ="http://127.0.0.1:5500/media/nav-v.png"
    }
})

// numeri
let firnum = document.querySelector('#first');
let secnum = document.querySelector('#second');
let thdnum = document.querySelector('#third')

function creaIntervall(n, element, time){
    let counter = 0
    
    
    let interval= setInterval(() => {
        if (counter < n) {
            counter++
            element.innerHTML= counter
        }
    }, time);

    setTimeout(() => {
        comferm=true
    }, 5000);
};


creaIntervall(300, firnum, 100);
creaIntervall(100, secnum, 50);
creaIntervall(150, thdnum, 20);
let conferm = true


let observer = new IntersectionObserver( (entris)=>{
    
    entris.forEach((entri)=>{
        
        if(entri.isIntersecting && conferm){
            creaIntervall(30, firnum, 100);
            creaIntervall(100, secnum, 50);
            creaIntervall(150, thdnum, 20);
            comferm = false;
        }
        
    })
    
} );


observer.observe(first)