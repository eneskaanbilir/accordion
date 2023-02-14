let h2 = document.createElement("h2")
h2.textContent = "Accordion"
document.documentElement.append(h2)

let btn = document.createElement("button")
btn.classList.add("accordion")
btn.textContent= "Section 1"
document.documentElement.append(btn)

let div = document.createElement("div")
div.classList.add("panel")
div.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
btn.after(div);

let btn2 = document.createElement("button")
btn2.classList.add("accordion")
btn2.textContent= "Section 2"
document.documentElement.append(btn2)

let div2 = document.createElement("div")
div2.classList.add("panel")
div2.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
btn2.after(div2);

let btn3 = document.createElement("button")
btn3.classList.add("accordion")
btn3.textContent= "Section 3"
document.documentElement.append(btn3)

let div3 = document.createElement("div")
div3.classList.add("panel")
div3.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
btn3.after(div3);

let acc = document.getElementsByClassName("accordion");

for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
    })
}