let kilometriViaggio = prompt("kilometri da percorrere");

let etaSoggetto = prompt("età");

let priceJourney = .21 * kilometriViaggio



if (etaSoggetto < 18){
    alert(priceJourney * .80);
}else if(etaSoggetto >= 18 && etaSoggetto <= 65){
   alert(priceJourney); 
}if(etaSoggetto > 65){
    alert(priceJourney * .60);
}

if (etaSoggetto < 18){
    upDateUtente = document.getElementById("prezzoBiglietto");
    upDateUtente.innerHTML = priceJourney * .80
}else if(etaSoggetto >= 18 && etaSoggetto <= 65){
    upDateUtente = document.getElementById("prezzoBiglietto");
    upDateUtente.innerHTML = priceJourney;
}if(etaSoggetto > 65){
    upDateUtente = document.getElementById("prezzoBiglietto");
    upDateUtente.innerHTML = priceJourney * .60
}
