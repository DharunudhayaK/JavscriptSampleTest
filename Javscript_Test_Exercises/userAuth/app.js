let form = document.querySelector('.formLabel')
console.log(form.childNodes)
form.childNodes[13].addEventListener('click', (event) => {
    let obj = {bool : false}
    event.preventDefault()
    if (form.childNodes[3].value === '' || form.childNodes[9].value === '') {
        form.childNodes[5].innerHTML = "enter something"
        form.childNodes[11].innerHTML = "enter something"
    }
    else {
        form.childNodes[5].innerHTML = ""
        form.childNodes[11].innerHTML = ""
        form.childNodes[17].innerHTML = form.childNodes[3].value
        form.childNodes[19].innerHTML = form.childNodes[9].value
        obj['bool'] = true
    }
    form.childNodes[15].addEventListener('click',(event)=>{
        event.preventDefault()
        alert("confirm about log out")
        form.childNodes[3].value = '' 
        form.childNodes[9].value = ''
        form.childNodes[17].innerHTML = ""
        form.childNodes[19].innerHTML = ""
    })
})