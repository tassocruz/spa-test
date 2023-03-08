export default function Controls({
    imagHome,
    imagUniverso,
    imagExploracao
    
}) {

    function clickHome() {
        imagHome.classList.remove('hide')
        imagUniverso.classList.add('hide')
        imagExploracao.classList.add('hide')
    }
    
    function clickUniverso() {
        imagHome.classList.add('hide')
        imagUniverso.classList.remove('hide')
        imagExploracao.classList.add('hide')
    }
    
    function clickExploracao() {
        imagHome.classList.add('hide')
        imagUniverso.classList.add('hide')
        imagExploracao.classList.remove('hide')
    }

    return {
        clickHome,
        clickUniverso,
        clickExploracao
    }
}