//let unit = 10;
//1m =  3.280839895ft
//1ft = 0.3048m

//0.000 feet | 0 feet = 0.000 meters

//1 L, l = 0.2641720524 gal (US)
//1 gal (US) = 3.785411784 L, l

//1 kg = 2.20462262185 lb
//1 lb = 0.45359237 kg

//let volumeEl = document.getElementById("length")

let unitEl = document.getElementById("unit");

//let convertEl = document.getElementById("convert-el")
//convertEl.textContent = unitEl.textContent

function convert() {
  let inputEl = document.getElementById("input-el").value;
  unitEl.textContent = inputEl;

  let meterToFeet = unitEl.textContent * 3.280839;
  let feetToMeter = unitEl.textContent * 0.3048;

  let kiloToPound = unitEl.textContent * 2.20462262185;
  let poundToKilo = unitEl.textContent * 0.45359237;

  let literToGallon = unitEl.textContent * 0.2641720524;
  let gallonToLiter = unitEl.textContent * 3.785411784;

  document.getElementById("length").textContent =
    unitEl.textContent +
    " meters = " +
    meterToFeet.toFixed(3) +
    " feet | " +
    unitEl.textContent +
    " feet = " +
    feetToMeter.toFixed(3) +
    " meters";

  document.getElementById("volume").textContent =
    unitEl.textContent +
    " liters = " +
    literToGallon.toFixed(3) +
    " gallon | " +
    unitEl.textContent +
    " gallons = " +
    gallonToLiter.toFixed(3) +
    " liters";

  document.getElementById("mass").textContent =
    unitEl.textContent +
    " kilos = " +
    kiloToPound.toFixed(3) +
    " pounds | " +
    unitEl.textContent +
    " pounds = " +
    poundToKilo.toFixed(3) +
    " kilos";
}
