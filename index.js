/*  ******************************************** Ejercicios 1 de JS (Condicionales) **********************************************  */
let number = 5
/* Positivo Negativo */
number >= 0 ? console.log('Numero positivo') : console.log('Numero Negativo')
/* Numero es 0 */
number === 0 ? console.log('Numero es 0') : console.log('No es 0')
/* Menor que 5 mayor que 3 */
if(number < 5 && number > 3) console.log('Numero menor a 5 y mayor a 3')
/* Mayor que 10 y menor que 60 */  
if(number > 10 && number < 60) console.log('Numero mmayor a 10 y menor a 60')
/* Menor a 3 y no es 0  */
if(number < 3 && number != 0) console.log('Numero menor a 3 y no es 0')
/* Menor que 0 */
if(number < 0) console.log('Numero menor que 0')
/* Imprime el último dijito del numero */
console.log(`El último digito del número ${number} es: ${number%10}`)

console.log(number)


/*  ******************************************** Ejercicios 2 de JS (Bucles) **********************************************  */
/* Cuadro */
let filas = 5
for (let index = 1; index <= filas; index++){
    if(index >= 2 && index < filas){
        console.log(`*        *`)
    }else{
        console.log(`**********`)
    }
}

/* Multiplos de 3 */
let numbers = 25;
for (let index = 1; index <= numbers; index++) {
    if(index % 3 === 0 && index % 5 === 0){
        console.log(`TzStriker`)
    }else if(index % 3 === 0){
        console.log(`Tz`)
    }else if(index % 5 === 0){
        console.log(`Striker`)
    }else{
        console.log(index)
    }
}

/* Tablas de multiplicar */
let queTabla = 0
for (let i = queTabla; i <= queTabla; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j} `)
    }
}

/* transformar un string */
let palabra = 'darwing'
let position = 3

let resultado =  palabra.split('')

for (let index = 0; index < palabra.length; index++) {
    if(index == position){
        resultado.splice(index,1)
    }
}

console.log(`palabra: ${palabra}`)
console.log(`position: ${position}`)
console.log('resultado:', resultado.join(''))



/****************************************************************Ejercicio 3 (Timer en un ciclo FOR)***********************************************************/

let minute = 13; 
let seconds = 0; 

let StringM;
let StringS;


for (let index = 0; index < 1000; index++) {
    if(index == 0) console.log(`0${minute}:0${seconds}`)

    seconds++
    
    seconds < 10 ? StringS = `0${seconds}` : StringS = `${seconds}`
    minute < 10 ? StringM = `0${minute}` : StringM = `${minute}`

    if(seconds >= 60 ){
        minute++ 
        minute >= 10 ? console.log(`${minute}:00`) : console.log(`0${minute}:00`)
        seconds = 0   
    }else{
        console.log(`${StringM}:${StringS}`)
    }
}

