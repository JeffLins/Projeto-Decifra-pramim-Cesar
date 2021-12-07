//Variaveis

var reciveData = document.getElementById('txt')
var increment = document.getElementById('key1')
var rangeIncrement = document.querySelector('#key1')
var rangeOut = document.querySelector('#outputKey1')
var codeButton = document.getElementById('codeBtn1')
var decodeButton = document.getElementById('decodeBtn2')
var userOption = document.getElementById('options')
var botao = document.getElementById('pressione')
var result = document.getElementById('resp')
var divIncrement = document.getElementById('divIncrement')





rangeIncrement.addEventListener('input', function () {
  rangeOut.textContent = rangeIncrement.value
})

codeButton.addEventListener('click', function () {
  botao.textContent = 'Codificar'
})

decodeButton.addEventListener('click', function () {
  botao.textContent = 'Decodificar'
})

botao.addEventListener('click', writeText)


userOption.addEventListener('change', function () {
  var displayNone = userOption.value == '0' ? 'none' : 'flex'

  divIncrement.style.display = displayNone
})


//Saída codifica e decodifica
function writeText() {
  if (codeButton.checked) {
    document.getElementById('resp').innerHTML = encode(reciveData.value, +increment.value)
  } else {
    console.log('');
    document.getElementById('resp').innerHTML = decode(reciveData.value, +increment.value)
  }

}


//Codifica Cifra de Cesar e Base64
function encode(reciveData, increment) {
  var arr = reciveData.split('')
  var codeData = []
  var arrCode = []

  if (userOption.value == '1') {
     //Codifica Cifra de Cesar
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) { // guarda letras Maiuscula 
        var getOutAscii = ((arr[i].charCodeAt()) - 65 + increment) % 26
        codeData.push(getOutAscii + 65)

      } else if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) { // guarda letras minusculas
        var getOutAscii = ((arr[i].charCodeAt()) - 97 + increment) % 26
        codeData.push(getOutAscii + 97)
      } else {
        codeData.push(arr[i].charCodeAt())
      }
    }

    for (var j = 0; j < codeData.length; j++) {
      arrCode.push(String.fromCharCode(codeData[j]))
    }
  }

  else {
    //Codifica base64
    var data64 = btoa(reciveData)

    arrCode.push(data64)

  }
  return arrCode.join('')
}


//Decodifica Cifra de Cesar e Base64

function decode(reciveData, increment) {

  var arr = reciveData.split('')
  var codeData = []
  var arrCode = []

  if (userOption.value == '1') {

    //Decodifica Cifra de Cesar
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) {
        var getOutAscii = ((arr[i].charCodeAt()) - 65 - increment) % 26
        codeData.push((getOutAscii < 0 ? getOutAscii + 26 : getOutAscii) + 65)

      } else if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) {
        var getOutAscii = ((arr[i].charCodeAt()) - 97 - increment) % 26
        codeData.push((getOutAscii < 0 ? getOutAscii + 26 : getOutAscii) + 97)
      } else {
        codeData.push(arr[i].charCodeAt())
      }

    }

    for (var j = 0; j < codeData.length; j++) {
      arrCode.push(String.fromCharCode(codeData[j]))

    }
  }

  else {
    //Decodifica base64
    var data64 = atob(reciveData)

    arrCode.push(data64)
  }

  return arrCode.join('')
}