function UbahTampilan(){
    // tag input teks
    let teks = document.getElementById("teks").value
    // tag input back
    let background = document.getElementById("background").value
    UbahTeks(teks)
    UbahBackground(background)
}

function UbahTeks(value){
    // tag h5 dan p
    let teks_html = document.getElementById("teks_2")
    if(value == 1){
        teks_html.style.color = "red"
    }
    else if (value == 2){
        teks_html.style.color = "blue"
    } 
    else {
        teks_html.style.color = ""
    }
}

function UbahBackground(value){
    // tag a
    let back_html = document.getElementById("back_2")
    if(value == 1){
        back_html.style.backgroundColor = "green"
    }
    else if (value == 2){
        back_html.style.backgroundColor = "yellow"
    }
    else {
        back_html.style.background = ""
    }

}

document.getElementById("teks").addEventListener("change", UbahTampilan)
document.getElementById("background").addEventListener("change", UbahTampilan)


