import {
    btnPlay,
    btnUniverso,
    btnExploracao
} from "./elements.js"

export default function({controls}) {

    btnPlay.addEventListener('click', function() {
        controls.clickHome()
    })
    
    btnUniverso.addEventListener('click', function() {
        controls.clickUniverso()
    })
    
    btnExploracao.addEventListener('click', function() {
        controls.clickExploracao()
    })
    
}