let opener = document.querySelector('.opener');
let circle= document.querySelector('.circle');
let flipCard = document.querySelector('.flipC');

let giochi =[
    {name:'Video-game', descriptions: 'Sono i Gioichi più Amati', url:'./media/gamepad.png' },
    {name:'Scacchi', descriptions: 'Goico di strateggia e ragionamento', url:'./media/scachi.png' },
    {name:'Poker', descriptions: 'Gioco di carte d`astuzia e fortuna', url:'./media/poker.png' },
    {name:'Tetris', descriptions: 'Gioco basato sulla bravura di incastrare le forme', url:'./media/tetriis.png' },
]


giochi.forEach((gioco)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${gioco.url})`;
    circle.appendChild(div);
})

let movedDivs = document.querySelectorAll('.moved')
let check=false
opener.addEventListener('click', ()=>{
    if(check == false){
        opener.style.transform= `rotate(45deg)`;

    movedDivs.forEach((moved, i)=>{
        let angle = (360*i) / movedDivs.length
        moved.style.transform = `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`;
    });
    check = true
    }else{
        check=false
        opener.style.transform= `rotate(0deg)`;
        movedDivs.forEach((moved, i)=>{
            moved.style.transform = `rotate(0deg) translate(0px)`;
        });
        flipCard.classList.add('d-none')
    }
});

let innerFace = document.querySelector('.inner-face')
let cardName = document.querySelector('#card-name');
let descript = document.querySelector('#description');


movedDivs.forEach((moved , i)=>{
    moved.addEventListener('click',()=>{

        flipCard.classList.remove('d-none');
        let gioco = giochi[i];

        innerFace.style.backgroundImage = `url(${gioco.url})`
        cardName.innerHTML = gioco.name
        descript.innerHTML = gioco.descriptions;

    })
});