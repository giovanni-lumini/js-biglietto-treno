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
let price_ticket_general
let price_ticket_under_18
let price_ticket_over_65
let cost_trip_general
let cost_trip_under_18
let cost_trip_over_65
let discount_20
let discount_40

//seconda fase: raccogliamo i dati 
km=prompt("Ciao, inserisci i km che vuoi percorrere");
console.log(km);

age=prompt("Ciao, inserisci la tua eta")
console.log(age);

price_ticket_general=0.21;

//terza fase: elaboriamo i dati+uotput
if(age<18){
    discount_20=((price_ticket_general*20)/100);
    console.log(discount_20);
    price_ticket_under_18=price_ticket_general-discount_20;
    console.log(price_ticket_under_18);
    cost_trip_under_18=km*price_ticket_under_18;
    console.log(`il prezzo per gli under 18 è ${cost_trip_under_18.toFixed(2)}€`);
} else if(age>65){
    discount_40=((price_ticket_general*40)/100);
    console.log(discount_40);
    price_ticket_over_65=price_ticket_general-discount_40;
    console.log(price_ticket_over_65);
    cost_trip_over_65=km*price_ticket_over_65;
    console.log(`il prezzo per gli over 65 è ${cost_trip_over_65.toFixed(2)}€`);
} else{
    cost_trip_general=km*price_ticket_general;
    console.log(`il prezzo è ${cost_trip_general.toFixed(2)}€`);
}

