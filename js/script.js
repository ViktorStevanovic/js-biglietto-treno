// toFixed(2) due decimali

const km = parseInt (prompt('Quanti kilometri devi percorrere?') );
const age = parseInt (prompt('Quanti anni hai?'));

let ticketPrice = (km * 0.21);
console.log(ticketPrice);


if (age < 18) {
    ticketPrice = (ticketPrice * 0.8);
} 
else if (age > 65) {
    ticketPrice = (ticketPrice * 0.6);
}
else{

}

console.log(ticketPrice.toFixed(2));


document.getElementById('output').innerHTML = 'Il prezzo del tuo biglietto è di: ' + ticketPrice
