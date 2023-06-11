/*if(document.getElementById("formm").value){
    window.alert("los datos fue enviado con exito");
}*/
const btnSwitch = document.querySelector("#switch");
const menu = document.querySelector("#icono");


menu.addEventListener("click", () =>{
    if(menu.classList.contains('bx-menu')){
        menu.classList.remove('bx-menu');
        menu.classList.toggle("bx-x");

    }else {
        menu.classList.remove('bx-x')
        menu.classList.toggle("bx-menu");
    }
       
})

btnSwitch.addEventListener("click", () =>{
    document.body.classList.toggle("claro");
    btnSwitch.classList.toggle("active");

    //vamos a guardar el modo en local storage
    if(document.body.classList.contains("claro")){
        localStorage.setItem('modo', 'true');
    } else{
        localStorage.setItem('modo', 'false');
    }
    
})
//obtenemos el modo actual

if(localStorage.getItem('modo')==='true'){
    document.body.classList.add("claro");
    btnSwitch.classList.add("active");
}else{
    document.body.classList.remove('claro');
    btnSwitch.classList.remove("active");
}
