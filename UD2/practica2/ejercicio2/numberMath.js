const pi = Math.PI.toFixed(5);
const radio = 3.5;

const area = pi * Math.pow(radio, 2);
console.log(area);


const areaString = area.toString();
console.log(areaString)

console.log(areaString.slice(0,6))

const areaInt = parseInt(areaString, 10);
console.log(areaInt)

const areaRound = Math.round(area);
console.log(areaRound)

const areaMult = parseInt(Math.random()*20, 10) * area;
console.log(areaMult)

if (Number.isFinite(radio)){
    const area2 = pi * Math.pow(radio, 2);
    console.log(area2);
}