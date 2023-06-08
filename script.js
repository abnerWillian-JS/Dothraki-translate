const trad = document.querySelector('#trad')
const input = document.querySelector('#txt')
const button = document.querySelector('#button')
const url = "https://api.funtranslations.com/translate/dothraki.json"

const translateUrl = (text) =>{
    return url + '?' + 'text=' + text
}

function enviar(){
    text = input.value 
    
    fetch(translateUrl (text))
    .then(respone => respone.json())
    .then(json => {
        const translatedText = json.contents.translated
        trad.innerText = translatedText
       })
}

button.addEventListener('click', enviar)