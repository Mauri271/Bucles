// Ejercicio N°1

// let numeroIngresado = prompt("ingrese un numero")

// for (let i = 0; i <= 10; i++) {
//     console.log(numeroIngresado * i)
    
// }

// Ejercicio N°2


// let numero = parseInt(prompt("Ingrese numero"))
// let numerosIngresados = []




// while(numero){
//     numerosIngresados.push(numero)
//     numero = parseInt(prompt("Ingrese numero"))
// }



// console.log(numero)
// console.log(numerosIngresados)


/* Ejercicio 3 */

// let numeroGuardado = numerosIngresados.slice(numerosIngresados.length-1)

// console.log(numeroGuardado)

// let numeroAdivinado = parseInt(prompt("Ingrese Numero a Adivinar"))

// let bucle = true

// while(bucle){
//     if(numeroGuardado[0] == numeroAdivinado){
//         alert(`Adivinaste el numero, y el numero es ${numeroGuardado[0]}`)
//         bucle = false
//     }else if(numeroAdivinado < numeroGuardado[0]){
//         numeroAdivinado = prompt(`El numero es menor, intente otro numero`)
//     }
//     else if(numeroAdivinado > numeroGuardado[0]){
//         numeroAdivinado = prompt(`El numero es mayor, intente otro numero`)
//     }
// }

/* Ejercicio 4 */
let numeroIngresado = parseInt(prompt("ingrese un numero para saber si es primo o compuesto"))
let numerosPrimos = []

for(let i=0; i <= numeroIngresado; i++){

    if(numeroIngresado % i == 0){
        numerosPrimos.push(i);

    }

}

if (numerosPrimos.length > 2){
    console.log(`el numero no es primo, es compuesto`)
} else {
    console.log(` el numero es primo`)
}

//Ejercicio 5

let numeroIngresado2 = parseInt(prompt("ingrese un numero para saber sus divisores"))
let divisores = []

for(let i=0; i <= numeroIngresado2; i++){

    if(numeroIngresado2 % i == 0){
        divisores.push(i);

    }

}


console.log(`los divisores de ${numeroIngresado2} son:`, divisores)


//Ejercicio n°6

let arrayAleatorio =["Sofía","Juan","Valentina","Carlos","Mariana","Pedro","Andrea","José","Gabriela","Ignacio"];

for(let i = 0; i < arrayAleatorio.length; i++) {
    console.log(arrayAleatorio[i])
}


//Ejercicio n°7

let arrayNumeros =[2,8,84,4,7,-25,65,20,-10,71];

for(let i = 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i] * 2)
}



//Ejercicio n°8
const familia = [
    {nombre: "Mauricio", apellido: "Echaniz", edad: 27, estudia: false, estatura: 1.85},
    {nombre: "Florencia", apellido: "Echaniz",edad: 25,estudia: true,estatura: 1.70},
    {nombre: "Gabriel", apellido: "Echaniz", edad: 52, estudia: false, estatura: 1.74},
    {nombre: "Elisa", apellido: "Gomez", edad: 57, estudia: false, estatura: 1.68},
    {nombre: "Yolanda", apellido: "Begue", edad: 74, estudia: false, estatura: 1.65}
    ]

    for(let i = 0; i < familia.length; i++){
        console.log(`Hola, mi nombre es ${familia[i].nombre}, tengo ${familia[i].edad} años, y mi estatura es de ${familia[i].estatura}`)
    }



//Ejercicio N°9

let arrayNumeros2 =[3,8,84,4,7,-25,65,20,-10,71];

for(let i = 0; i < arrayNumeros2.length; i++) {
    if(arrayNumeros2[i] %2 != 0){
        console.log(arrayNumeros2[i])
    }
}


//Ejercicio N°10

let numeroPrimo = parseInt(prompt("ingrese numeros para saber si son pares o impares"))

let numerosPares =[];
let numerosImpares =[]

while(numeroPrimo){

    if(numeroPrimo % 2){
        numerosImpares.push(numeroPrimo)
        numeroPrimo = parseInt(prompt("ingrese numeros para saber si son pares o impares"))
    } else {
        numerosPares.push(numeroPrimo)
        numeroPrimo = parseInt(prompt("ingrese numeros para saber si son pares o impares"))
    }

    
    
}

console.log(`estos son los numeros pares ${numerosPares}`)
console.log(`estos son los numeros impares ${numerosImpares}`)



//Ejercicio N°11


for(let i = 0; i < arrayNumeros2.length; i++) {  
    newArrayNums = Math.max(...arrayNumeros2)  
               
}  
console.log( `estos son los numeros del array ${arrayNumeros2} y el numero más grande es ${newArrayNums}`)


//Ejercicio N°12

for (let i = 0; i < arrayNumeros2.length; i++){
    newArrayNumsDos = Math.min(...arrayNumeros2)
} 
console.log( `estos son los numeros del array ${arrayNumeros2} y el numero más chico es ${newArrayNumsDos}`)



//Ejercicio N°13

// let jugador1 = prompt("ingrese su nombre")
// let jugador2 = prompt("ingrese su nombre")

// let mano1 = prompt(`${jugador1} ingrese su mano`)
// let mano2 = prompt(`${jugador2} ingrese su mano`)

// let bucle = true
// while( bucle) {
//     if (mano1 === mano2) {
//         mano1 = prompt(`${jugador1} ingrese su mano`)
//         mano2 = prompt(`${jugador2} ingrese su mano`)
//     } else if ( mano1 ===  "tijera" && mano2 === "piedra"){
//         alert(`gano el jugador ${jugador2}`)
//         bucle = false
//     } else if ( mano2 ===  "tijera" && mano1 === "piedra"){
//         alert(`gano el jugador ${jugador1}`)
//         bucle = false
//     }else if ( mano2 ===  "tijera" && mano1 === "papel"){
//         alert(`gano el jugador ${jugador2}`)
//         bucle = false
//     }else if ( mano1 ===  "tijera" && mano2 === "papel"){
//         alert(`gano el jugador ${jugador1}`)
//         bucle = false
//     }else if ( mano1 ===  "piedra" && mano2 === "papel"){
//         alert(`gano el jugador ${jugador2}`)
//         bucle = false
//     }else if ( mano2 ===  "piedra" && mano1 === "papel"){
//         alert(`gano el jugador ${jugador1}`)
//         bucle = false
// }
// }


//Ejercicio N°14

for (let i = 0; i < 6; i++){
    console.log("*".repeat(i))

}



//Ejercicio N°15

for (let i = 5; i > 0; i--){
    console.log("*".repeat(i))

}



//Ejercicio N°16
let numeros = [5, 2, 9, 1, 7, 4, 8, 3, 10, 6];


for (let i = 0; i < numeros.length; i++) {

}



