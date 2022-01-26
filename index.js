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
