// toFixed(2) due decimali

const km = parseInt (prompt('Quanti kilometri devi percorrere?') );
const age = parseInt (prompt('Quanti anni hai?'));

const ticketPrice = (km * 0.21);
console.log(ticketPrice);


if (age < 18) {
    const discountedTicket = (ticketPrice * 0.8);
    console.log(discountedTicket.toFixed(2));
} 
else if (age > 65) {
    const discountedTicket = (ticketPrice * 0.6);
    console.log(discountedTicket.toFixed(2));
}
else{

}

// let discountedTicket;


// document.getElementById('output').innerHTML = 'Il prezzo del tuo biglietto è di: ' + discountedTicket
