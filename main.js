function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const elenco_numeri = [];

while (elenco_numeri.length<5){
    let numero = getRndInteger(1, 100);
    if(!elenco_numeri.includes(numero)){
        elenco_numeri.push(numero)
    }
}

const all_content = document.querySelector('.all_content')
const ul = document.createElement('ul');
const h1 = document.createElement('h1');
all_content.append(h1);
h1.append('Memorizza velocemente i seguenti numeri')
all_content.style.display = 'flex'
ul.style.display = 'flex'
ul.style.listStyle = 'none'
ul.style.justifyContent = 'center'


for (let i = 0; i <elenco_numeri.length; i++){
    const li = document.createElement('li');
    all_content.append(ul);
    ul.append(li);
    li.append(elenco_numeri[i])
    li.style.cssText = 'border: 1px solid black; margin: 5px; padding:10px;' 
}


const numeri_indovinati = []
const numeri_errati = []

setTimeout(disapear, 30000)

function disapear (){
    h1.style.display = 'none'
    all_content.style.display = 'block'
    ul.style.display = 'none'
    
    for(let i = 0; i<elenco_numeri.length; i++){
        let numero_inserito = parseInt(prompt('inserisci un dei numeri'));
        if(elenco_numeri.includes(numero_inserito)){
            numeri_indovinati.push(numero_inserito);  
        }
        else{
            numeri_errati.push(numero_inserito);
        }
              
    }
    
    let div_numeri_indovinati = document.createElement('div');
    let div_numeri_errati = document.createElement('div');

    div_numeri_indovinati.append(`Hai indovinato ${numeri_indovinati.length} numeri: `)
    div_numeri_errati.append(`Hai sbagliato ${numeri_errati.length} numeri: `)

    for(let i = 0; i<numeri_indovinati.length; i++){
        div_numeri_indovinati.append(`${numeri_indovinati[i]}, `)
    }
    for(let i = 0; i<numeri_errati.length; i++){
        div_numeri_errati.append(`${numeri_errati[i]}, `)
    }
    
    all_content.append(div_numeri_indovinati);
    all_content.append(div_numeri_errati)

}

