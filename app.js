const argv = require ('process').argv;

const operacion = argv[2];
const numberA = +argv[3];
const numberB = +argv[4];

//Requerimos modulos//
const sumar = require('./sumar')
const restar = require('./restar')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')

switch (operacion){
  case "sumar":
      console.log(sumar.sumar(numberA,numberB));
      break;
  case "restar": 
      console.log(restar.restar (numberA,numberB));
  case "multiplicar":
      console.log(multiplicar(numberA, numberB));
      break;
  case "dividir":
      console.log(dividir(numberA, numberB));
      break;
  default:
      console.log("mo es una operacion")
} 
