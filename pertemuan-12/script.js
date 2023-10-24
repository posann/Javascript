// let form = document.forms.form_coba;
// let element1 = form.elements.element_1;
// let element2 = form.elements.element_2;
// let button = form.elements.element_button;


// button.addEventListener("click", function(){
//     let hasil = parseFloat(element1.value) + parseFloat(element2.value)
//     alert(hasil)
// })

let nama_mhs = [
    'Rio',
    'Abil',
    'Haeril',
    'Aryadi'
]

let asal_mhs = [
    'Afrika',
    'Jamaika',
    'Israel',
    'Gaza'
]

function pendaftaran_mhs(nama, asal){
    console.log(nama);
    console.log(asal);
}

for(i=0 ; i<4 ; i++){
    pendaftaran_mhs(nama_mhs[i], asal_mhs[i])
}

