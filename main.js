let navbar = document.querySelector('#navbar');
let links = document.querySelectorAll('.nav-link');
let imgnav= document.querySelector('#imgnav')

console.dir(imgnav);


window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-cielo');
        navbar.style.height = '80px';
        links.forEach( (link)=>{
            link.style.color = 'var(--white)'
        } );
        imgnav.src= "http://127.0.0.1:5500/media/logo-w.png"
    }
    else{
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-cielo');
        navbar.style.height = '160px';
        links.forEach( (link)=>{
            link.style.color = 'var(--violet)'
        } );
         imgnav.src= "http://127.0.0.1:5500/media/logo-v.png"
    }
})