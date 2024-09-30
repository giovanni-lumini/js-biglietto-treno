//Il programma dovrà chiedere all'utente:
//chilometri che vuole percorrere
//età del passeggero

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//Prezzo biglietto 0.21 € al km
//SE minorenni, va applicato uno sconto del 20%
//SE over 65, va applicato uno sconto del 40%

//L'output del prezzo finale va messo con massimo due decimali

console.log("hello");

//prima fase: preparazione
let km
let age
let ticket
let ticket_u_18
let ticket_o_65
let tot_u_18
let tot_o_65
let tot_other

//seconda fase: raccogliamo i dati 
km=prompt("Ciao, inserisci i km che vuoi percorrere");
console.log(km);

age=prompt("Ciao, inserisci la tua eta")
console.log(age);

ticket=0.21;
tot_other=km*ticket;
console.log(tot_other);

ticket_u_18=0.168;
tot_u_18=km*ticket_u_18;
console.log(tot_u_18);

ticket_o_65=0.126;
tot_o_65=km*ticket_o_65;
console.log(tot_o_65);

//terza fase: elaboriamo i dati+uotput
if(age<18){
    console.log(`il prezzo per gli under 18 è ${tot_u_18.toFixed(2)}€`);
} else if(age>65){
    console.log(`il prezzo per gli over 65 è ${tot_o_65.toFixed(2)}€`);
} else{
    console.log(`il prezzo è ${tot_other.toFixed(2)}€`);
}
