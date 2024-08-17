fetch('./annunci.json').then((response)=> response.json()).then((data)=>{


    let radWr = document.querySelector('#radWr');
    let carWr = document.querySelector('#caWr');

    function radioCreate(){
        let cate = data.map((annuncio)=> annuncio.category);

        

       let unicat = Array.from(new Set(cate));



        unicat.forEach( (category)=>{
            let div = document.createElement('div');

            div.classList.add('form-check');

            div.innerHTML =
            `<input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
             <label class="form-check-label" for="${category}">
                 ${category}
             </label>`;


            radWr.appendChild(div);

        } )
        

    }

            


        radioCreate();


    

        

    function showCar(array){
        carWr.innerHTML = '';
        array.forEach( (annuncio, i)=>{
            let div = document.createElement('div')
            div.classList.add('card-custom');
            div.innerHTML = `
                    <img src="https://picsum.photos/${400 + i}" alt="immagine casuale" class="img-fluid img-card" 
                    <p class="h2">${annuncio.name}</p>
                    <p  class="h3 h3p">${annuncio.category}</p>
                    <p class ="lead lea1">${annuncio.price} € </p>`
                    carWr.appendChild(div);
        } );
    }

    showCar(data);

    function filtre(categoria) {
        
        if (categoria != 'All'){
            let filtro = data.filter((annuncio)=> annuncio.category == categoria)

        
            showCar(filtro)
        }else{
            showCar(data);
        }

    };



    let radiobuttons = document.querySelectorAll('.form-check-input');
    

    radiobuttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            filtre(button.id);
        } )
    });


    function setPric(){
        let prices = data.map((annuncio)=> +annuncio.price);
        prices.sort((a, b)=> a-b);
        let maxP = Math.ceil(prices.pop());
        console.log(maxP);
        
    }

    setPric();

});