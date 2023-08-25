let div = document.querySelector('.outerDiv')
console.log(div.childNodes)

let count = 0
div.childNodes[1].onclick = () =>{ 
    count++
    console.log(count);
    div.childNodes[3].innerHTML = count
}