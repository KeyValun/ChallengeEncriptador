const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const image = document.querySelector(".logo")

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    mensaje.style.backgroundColor = "rgba(19,25,59,255)"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesncriptado = desencriptar(textArea.value)
    mensaje.value = textoDesncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    mensaje.style.backgroundColor = "rgba(19,25,59,255)"
}

function desencriptar(stringDesncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesncriptada = stringDesncriptada.toLowerCase()

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesncriptada.includes(matrizCodigo[i][1])){
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesncriptada

}

function copiarAlPortapapeles() {
    var texto = document.querySelector(".mensaje").value;
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    mensaje.value = "";
    mensaje.style.backgroundImage = "";
    document.body.removeChild(elementoTemporal);

}
