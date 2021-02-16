// Ejercicio 3-Numeros impares
function oddNumberList(n:number){
    for (let i=0; i<n; i++){
        if( i % 2 !==0){
            console.log(i)
        }
    }
}

//Ejercicio 4- arrays sin reverse
function arrayReverse (arr: number[]){
    let resultado: number[] = []
    for(let i = arr.length-1; i>=0; i--){
        resultado.push (arr[i])
    }
    return resultado
}

//Ejercicio 5- arcoiris
function rainbowColor(color: string[]) {
    let resultado: string[] = []
    for (let i = 0; i < color.length; i++) {
        if (color[i] !== "rojo" && color[i] !== "naranja" && color[i] !== "amarillo" && color[i] !== "verde" && color[i] !== "azul" && "indigo" && color[i] !== "violeta") {
            resultado[i] = color[i]+ " " + "no está en el arcoiris"
        }else {
            resultado[i] = color[i]+ " " + "sí está en el arcoiris"
        }
    }
    console.log(resultado)
}
// Ejercicio 8 - suma de los caracteres

function nameEqual(word: string[]):number {
    let resultado: number = 0
        for(let i:number=0; i< word.length; i++){
            resultado = word[i].length + resultado       
        }
        return resultado;        
    }
// Ejercicio 10 - recorrer un array, hacer la suma de sus caracteres y decir si esta es par
function sumaStrings(arr: string[]) {
    let resultado: number = 0
    for (let i: number = 0; i < arr.length; i++) {
        resultado = arr[i].length + resultado
    }
    if (resultado % 2 == 0) {
        console.log(`La suma de ${resultado}es par`)

    } else {
        console.log(`La suma de ${resultado}es impar`)
    }

}
