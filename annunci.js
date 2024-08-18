fetch('./annunci.json').then((response)=> response.json()).then((data)=>{

        data.sort((a,b)=> a.price - b.price)

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

    let radiobuttons = document.querySelectorAll('.form-check-input');

    function filtre(array) {
        
        let categoria = Array.from(radiobuttons).find((button)=> button.checked).id;
        
        
        if (categoria != 'All'){
            let filtro = data.filter((annuncio)=> annuncio.category == categoria)
            

        
            return filtro;
        }else{
            return array
        }

    };



   
    

    radiobuttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            setPric();

           global();
        } )
    });


    let ran = document.querySelector('#raninp');
    let prc = document.querySelector('#prc')

    function setPric(){
        let prices = filtre(data).map((annuncio)=> +annuncio.price);
        prices.sort((a, b)=> a-b);
        let maxP = Math.ceil(prices.pop());
        ran.max=maxP;
        ran.value=maxP;
        prc.innerHTML = maxP;
    }

    setPric();

   
    function filtr(array){
        let filt =array.filter((annuncio)=> +annuncio.price <= ran.value)
        return filt;
    }

    ran.addEventListener( 'input', ()=>{
        prc.innerHTML = ran.value;
        global();


    } );



    let parola = document.querySelector('#parola')

    function filtreParola(array){
        let filterd = array.filter((annuncio)=> annuncio.name.toLowerCase().includes(parola.value.toLowerCase()))
        return filterd
    }

    parola.addEventListener('input', ()=>{
        global();
    })


function global(){

    let filtroByCategory = filtre(data);
    let filtroByPrice = filtr(filtroByCategory);
    let filtroByParola = filtreParola(filtroByPrice)


    showCar(filtroByParola)
;}


});