const btn = document.getElementById("click")
const n = document.getElementById('name')
const displayDiv = document.getElementById('display_div')
const nameReplace = document.getElementById('name_replace')
btn.addEventListener('click',function(){
    // alert(n.value)   
    nameReplace.innerHTML = n.value 
    displayDiv.style.backgroundColor = "#cfcfcf"
})
 

console.log(btn)