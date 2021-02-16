//Ejercicio 1.SignoZodiaco -hoja 1
function signoZodiaco (day: number, month: string): string {

    let resultado: string = ""
    if (day >= 19 && month == "marzo" || day <= 20 && month == "abril") {
        resultado = "aries"
    }
    if (day >= 21 && month == "abril" || day <= 20 && month == "mayo") {
        resultado = "tauro"
    }
    if (day >= 21 && month == "mayo" || day <= 20 && month == "junio") {
        resultado = "geminis"
    }
    if (day >= 22 && month == "junio" || day <= 22 && month == "julio") {
        resultado = "cancer"
    }
    if (day >= 23 && month == "julio" || day <= 22 && month == "agosto") {
        resultado = "leo"
    }
    if (day >= 23 && month == "agosto" || day <= 22 && month == "septiembre") {
        resultado = "virgo"
    }
    if (day >= 23 && month == "septiembre" || day <= 22 && month == "octubre") {
        resultado = "libra"
    }
    if (day >= 23 && month == "octubre" || day <= 22 && month == "noviembre") {
        resultado = "escorpio"
    }
    if (day >= 23 && month == "noviembre" || day <= 21 && month == "diciembre") {
        resultado = "sagitario"
    }
    if (day >= 22 && month == "diciembre" || day <= 20 && month == "enero") {
        resultado = "capricornio"
    }
    if (day >= 21 && month == "enero" || day <= 18 && month == "febrero") {
        resultado = "acuario"
    }
    if (day >= 19 && month == "febrero" || day <= 20 && month == "marzo") {
        resultado = "piscis"
    }
    return resultado
}
//ejercicio9 - Console si es par o no
function consoleNumber(number: number) {
    if (number % 2 == 0) {
        console.log("El numero es par")
    } else {
        console.log("No es par")
    }
}
