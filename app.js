//const argv = require ('process').argv;
//const argv = process.argv

const { log } = require('console');

const argv = require('process').argv

 //console.log(process.argv[5]);
//console.log(process.argv[2]);

const operacion = argv[2];
const numberA = +argv[3];
const numberB = +argv[4];

//Requerimos modulos//
const calculadora = require('./sumar')
const calculadora = require('./restar')
const calculadora = require('./multiplicar')
const calculadora = require('./dividir')


if (operacion === "sumar") {
//console.log(numberA + numberB); 

console.log(calculadora.sumar(numberA,numberB))

} else if (operacion === "restar") {
    //console.log(numberA-numberB); 
    console.log(calculadora.restar (numberA,numberB))
} else if (operacion === "multiplicar") {
        console.log(calculadora.multiplicar(numberA, numberB));
      } else if (operacion === "dividir") {
        console.log(calculadora.dividir(numberA, numberB));
      }
      else {
        console.log("Operacion no reconocida");
      }