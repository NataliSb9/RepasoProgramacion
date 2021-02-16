//Ejercicio 6- numero par en un array
function evenNumber(arrNumber: number[]):string {
    let noPar: boolean = true
    let resultado= "Hay un numero par"
    let i: number = 0;
    while (i < arrNumber.length && noPar) {
        if (arrNumber[i] % 2 == 0) {
            noPar = false
            resultado= "Hay un numero par"
        }
        i++
    }
    return resultado;
}
//Ejercicio 7- Nombres con M
function nameM(name: string[]): boolean {
    let encontrado: boolean = true;
    let i: number = 0;
    while (i < name.length && encontrado) {
        if (name[i][0] !== "M") {
            encontrado = false;
        }
        i++
    }
    return encontrado
}


