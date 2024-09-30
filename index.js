
let prezzo; //prezzo del biglietto da definire//

let numAge = Number(window.prompt("INSERISCI GLI ANNI DEL PASSEGGERO"));

let numKm = Number(window.prompt("INSERISCI I KM DA PERCORRERE"));

let scontoMinor = 0.2;

let scontoOld = 0.4;

let costKm = 0.21;



if (numAge > 18 && numAge < 65 || numAge == 18){

   prezzo = numKm * costKm
}

else if (numAge < 18){

    prezzo = numKm * costKm * scontoMinor
}

else {
    prezzo = numKm * costKm * scontoOld
}
console.log(prezzo);
