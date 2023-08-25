let button = document.querySelector('#button')
let para = document.querySelector('#content')

button.onclick = (() => {
    if (button.innerHTML === "Click Me!") {
        button.innerHTML = "Clicked!";
      } else {
        button.innerHTML = "Click Me!";
      }
})
