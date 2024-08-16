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
            conferm = false;
        }
        
    })
    
} );


observer.observe(first)




























// swiper
    
let reviw=[
    {user: 'Fatima', descrizione: `Ottimi Prodotti`, rank:5},
    {user: 'Vincenzo', descrizione: `prodotti rovinati e arrivati in ritardo`, rank:1},
    {user: 'Antonella', descrizione: `Qualità prezzo`, rank:3},
]


let Wrap = document.querySelector('.swiper-wrapper')

reviw.forEach( (recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide')
    div.innerHTML= ` 
    
                    <div class="card-rec">
                            <p class="lead text-center p2p">
                               ${recensione.descrizione}
                            </p>
                            <p class="h4 text-center">${recensione.user}</p>
                            <div class="d-flex justify-content-center star">
                              
                            </div>
                        </div>
                      </div>`;
                Wrap.appendChild(div);
    
});


let stelle = document.querySelectorAll('.star');

stelle.forEach((star, index)=>{
    for(let i = 1; i <= reviw[index].rank; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        star.appendChild(icon)
    }

    let diff = 5 - reviw[index].rank;

    for(let i = 1; i <= diff; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star');
        star.appendChild(icon)
    }

});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
      grabCursor: true,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });