const btn = document.getElementById('compile-btn')
const textArea = document.getElementById('text-editor')
const displayCode = document.getElementById('displayCode')

document.addEventListener('click', function(){
    // alert('The button is working')

    displayCode.innerHTML = textArea.value
})