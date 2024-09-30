let numAge;

let numKm;

let prezzo; //prezzo del biglietto da definire//

let scontoMinorenni; //percentuale da sottrarre al prezzo definito solo per chi ha l'età<18 (20%= 20/100= 0.2)

let scontoAnziani; //percentuale da sottrarre al prezzo definito solo per chi ha l'età>65//


let numAge = Number(window.prompt("INSERISCI GLI ANNI DEL PASSEGGERO"));

let numKm = Number(window.prompt("INSERISCI I KM DA PERCORRERE"));


if (numAge > 18 || numAge == 18){

   prezzo = numKm * 0,21
}

else{
    prezzo = (numKm * 0,21 * 0,2)
}
console.log(prezzo);
