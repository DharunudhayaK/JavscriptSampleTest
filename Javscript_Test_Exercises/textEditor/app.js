let out = document.querySelector('.divLbel')
console.log(out.childNodes)

out.childNodes[3].oninput = () =>{
    console.log(out.childNodes[3].value)
    out.childNodes[5].innerHTML = out.childNodes[3].value
}