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