let unit = 10
//1m =  3.280839895ft
//1ft = 0.3048m

//0.000 feet | 0 feet = 0.000 meters

//1 L, l = 0.2641720524 gal (US)
//1 gal (US) = 3.785411784 L, l

//1 kg = 2.20462262185 lb
//1 lb = 0.45359237 kg

//let volumeEl = document.getElementById("length")

let meterToFeet = unit * 3.280839895
let feetToMeter = unit * 0.3048

let kiloToPound = unit * 2.20462262185
let poundToKilo = unit * 0.45359237

let literToGallon = unit * 0.2641720524
let gallonToLiter = unit * 3.785411784


let unitEl = document.getElementById("unit")

unitEl.textContent = 10

document.getElementById("length").textContent = unit + " meters = " + meterToFeet.toFixed(3) + " feet | " + unit + " feet = " + feetToMeter + " meters"

document.getElementById("volume").textContent = unit + " liters = " + literToGallon.toFixed(3) + " gallon | " + unit + " gallons = " + gallonToLiter.toFixed(3) + " liters"

document.getElementById("mass").textContent = unit + " kilos = " + kiloToPound.toFixed(3) + " pounds | " + unit + " pounds = " + poundToKilo.toFixed(3) + " kilos"

