const div = document.querySelector("div");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const p = document.querySelector("p");

btn.onclick = () => {
    let number = input.value
    p.innertext = ""
    let random = Math.floor(Math.random()  * number +1);
    p.innerHTML = random
    div.append(p)
}

