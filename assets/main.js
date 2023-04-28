// * Dati inziali

let km = document.getElementById('Km');

let eta = document.getElementById('eta');

const prezzo_km = 0.21;


// Dati generazione buttons
let genera = document.getElementById('button-genera');

let annulla = document.getElementById('button-annulla');



// ! IF BUTTON GENERA

genera.addEventListener("click", function() {
  let NomePasseggero = document.getElementById('NomeUtente').value;
  console.log (km);
  console.log (eta.value);

  // Prezzo base

  let prezzo_totale = km.value * prezzo_km;

// Prezzo scontato 20% <18

  let prezzo_minori = prezzo_totale * 0.8;

// Prezzo scontato 40% >65

  let prezzo_senior = prezzo_totale * 0.6;

    if (eta.value === 'minorenne'){
    prezzo_totale =  prezzo_minori.toFixed(2);
  } else if (eta.value === 'senior'){
    prezzo_totale = prezzo_senior.toFixed(2);
  } else {
    prezzo_totale = prezzo_totale
  }

  document.getElementById("NomePass").innerHTML = NomePasseggero;
  document.getElementById("prezzo_biglietto").innerHTML = "Costo biglietto è: " + prezzo_totale + "€";
  document.getElementById("offert").innerHTML = "Biglietto base";
  document.getElementById("carrozza_random").innerHTML = Math.floor(Math.random() * 10);
  document.getElementById("codice_random").innerHTML = Math.floor(Math.random() * 99999);
});