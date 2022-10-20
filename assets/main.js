// * Dati inziali
let NomeUtente = document.getElementById('NomeUtente');

let km = document.getElementById('Km');

let età = document.getElementById('età');

const prezzo_km = 0.21;


// Dati generazione buttons
let button_genera = document.getElementById('genera');

let button_annulla = document.getElementById('annulla');

// Prezzo base

let prezzo_totale = km * prezzo_km;

// Prezzo scontato 20% <18

let prezzo_minori = prezzo_totale * 0.8;

// Prezzo scontato 40% >65

let prezzo_senior = prezzo_totale * 0.6;

// ! IF

genera.addEventListener("click", function() {

    if (età.value == 'minorenne'){
    prezzo_totale =  prezzo_minori.toFixed(2);
  } else if (età.value == 'senior'){
    prezzo_totale = prezzo_senior.toFixed(2);
  } else {
    prezzo_totale = prezzo_totale
  }

  document.getElementById("demo").innerHTML = "Hello World";
  document.getElementById('prezzo_biglietto').innerHTML = "Costo biglietto è: "+ prezzo_totale + "€";
  
});

