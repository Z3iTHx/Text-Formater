
function checkAll() {
    let color = document.getElementById("color").value;
    let size = document.getElementById("size").value;
    let spacing = document.getElementById("spacing").value;

    let font = document.querySelector("#font").value;

    const overline = document.getElementById("overline");
    const inline = document.getElementById("inline");
    const underline = document.getElementById("underline");
    const amongUs = document.getElementById("amogus")
    
    const input = document.querySelector(".content-input-text").value;
    const output = document.querySelector(".content-output-text");    

    output.innerHTML = input;
    output.style.letterSpacing = `${spacing}px`;
    output.style.color = `${color}`;
    output.style.fontSize = `${size}px`;

    if(font == "Default") {
        output.style.fontFamily = "'Aboreto', cursive"
    } else if(font == "Arial") {
        output.style.fontFamily = "Arial, Helvetica, sans-serif"
    } else if(font == "TimesNewRoman") {
        output.style.fontFamily = "'Times New Roman', Times, serif"
    }

    if(input == "sus" || input == "SUS") {
        
    } else {

    }

    if(amongUs.checked == true) {
        output.classList.add("amogus")
    } else {
        output.classList.remove("amogus")
    }

    if(overline.checked == true && inline.checked == false && underline.checked == false) {
        output.style.textDecoration = "overline"
    } else if(overline.checked == false && inline.checked == true && underline.checked == false) {
        output.style.textDecoration = "line-through"
    } else if(overline.checked == false && inline.checked == false && underline.checked == true) {
        output.style.textDecoration = "underline"
    } else if(overline.checked == true && inline.checked == true && underline.checked == false) {
        output.style.textDecoration = "overline line-through"
    } else if(overline.checked == true && inline.checked == false && underline.checked == true){
        output.style.textDecoration = "overline underline"
    } else if(overline.checked == false && inline.checked == true && underline.checked == true) {
        output.style.textDecoration = "line-through underline"
    } else if(overline.checked == false && inline.checked == false && underline.checked == false) {
        output.style.textDecoration = "none"
    } else if(overline.checked == true && inline.checked == true && underline.checked == true) {
        output.style.textDecoration = "line-through underline overline"
    }
}

setInterval(() => {
    checkAll()
}, 10);