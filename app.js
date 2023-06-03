const argv = require ('process').argv;

const { log } = require('console');
const operacion = argv[2];
const numberA = +argv[3];
const numberB = +argv[4];

//Requerimos modulos//
const calculadora = require('sumar')
const calculadora1 = require('restar')
const calculadora2 = require('multiplicar')
const calculadora3 = require('dividir')


if (operacion === "sumar") {
//console.log(numberA + numberB); 

console.log(calculadora.sumar(numberA,numberB))

} else if (operacion === "restar") {
    //console.log(numberA-numberB); 
    console.log(calculadora1.restar (numberA,numberB))
} else if (operacion === "multiplicar") {
        console.log(calculadora2.multiplicar(numberA, numberB));
      } else if (operacion === "dividir") {
        console.log(calculadora3.dividir(numberA, numberB));
      }
      else {
        console.log("Operacion no reconocida");
      }