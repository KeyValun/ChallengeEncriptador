const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

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

    function copiarAlPortapapeles() {
        let textoEncriptado = document.getElementById("mensaje");
        textoEncriptado.select();
        textoEncriptado.setSelectionRange(0, 99999);
        document.execCommand("copiar");
    }
}
