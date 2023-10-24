let form = document.forms.form_coba;
let element1 = form.elements.element_1;
let element2 = form.elements.element_2;
let button = form.elements.element_button;


button.addEventListener("click", function(){
    let hasil = parseFloat(element1.value) + parseFloat(element2.value)
    alert(hasil)
})