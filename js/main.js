import {Countrie} from './CountriesCard.js'
const container = document.querySelector(".container");
let myJson;
let arregloClas = new Array();
const buscar = document.querySelector(".sumbit");
const buscarValor = document.querySelector(".value");

export const userAction = async (url) => {

    container.innerHTML="";
    
    const response = await fetch(url);
     myJson= await response.json(); 


    for(let i = 0; i < 100; i++){
        container.innerHTML += `<div class='card'>
                                    <div class='card__header'>
                                        <img class='card__img' src="${myJson[i].flag}"/>
                                    </div>                    
                                    <div class='card__descrip'>
                                    <strong>Nombre:</strong> ${myJson[i].name} </br>
                                    <strong>Capital:</strong> ${myJson[i].capital ? myJson[i].capital : 'No disponible' }
                                    </div>
                                
                                </div>`;
        arregloClas.push(new Countrie(myJson[i].name,myJson[i].capital,myJson[i].region,myJson[i].flag));
    }

    console.log(arregloClas);

}


buscar.addEventListener('click',function(event) {

    console.log(buscarValor.value);
    let pais = document.querySelector(".value").value;
    if (pais === ''){
        userAction('https://restcountries.eu/rest/v2/all');
    }else{
        userAction(`https://restcountries.eu/rest/v2/name/${pais}}`);
    }
    
    event.preventDefault();
    
});


