let btn = document.querySelector('#button')
let outer = document.querySelector('.outerDiv')
let createDiv = document.createElement('div')
createDiv.setAttribute('class', 'divLabel')
outer.appendChild(createDiv)

console.log(outer)
btn.addEventListener('click', () => {

    fetch(`https://fakestoreapi.com/products/`)
        .then((response) => response.json())
        .then((response) => {

            let store = response
            store.map((value) => {
                let create = new Promise((resolve, reject) => {
                    (value.id) ? resolve(value) : reject(value)
                })
                create.then((value) => {
                    let img = document.createElement('img')
                    img.setAttribute('class', 'imgLabel')
                    img.src = value.image
                    createDiv.appendChild(img)
                })
                create.catch((value) => {
                    let err = document.createElement('p')
                    err.innerHTML = value
                    create.appendChild(err)
                })
            })
        })
})