function sumaStrings(arr: string[]):number {
    let resultado: number = 0
    for (let i: number = 0; i < arr.length; i++) {
        resultado = arr[i].length + resultado
    }
    return resultado
}

function evenNumber(n:number){
    if (n % 2 == 0) {
        console.log(`El numero es par`)
    
    } else {
        console.log(`El numero es impar`)
    }
}

let arr1: string [] = ["Casa","Coche","Ciudad","Cesta"]
let arr2: string [] = ["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"]
let arr3: string [] = ["Venezuela","Veneno","Voltaje"]

console.log(sumaStrings(arr1))
evenNumber(sumaStrings(arr1))

console.log(sumaStrings(arr2))
evenNumber(sumaStrings(arr2))

console.log(sumaStrings(arr3))
evenNumber(sumaStrings(arr3))