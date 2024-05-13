const FORM=document.getElementById("formulario");
const NOM=document.getElementById("nombre");
const EMPRESA=document.getElementById("empresa");
const WEB=document.getElementById("web");
const CORREO=document.getElementById("email");
const MENSAJE=document.getElementById("mensaje");


let nomError = document.getElementById("nom-error");
let empError = document.getElementById("empresa-error");
let webError = document.getElementById("web-error");
let emailError = document.getElementById("email-error");
let mensError = document.getElementById("mensaje-error");


FORM.addEventListener("submit",e =>{
    e.preventDefault();

    comprobarCampos();
})


function comprobarCampos(){
    const NOMVALUE=NOM.value.trim();
    const EMPRESAVALUE= EMPRESA.value.trim();
    const WEBVALUE= WEB.value.trim();
    const CORREOVALUE=CORREO.value.trim();
    const MENSAJEVALUE=MENSAJE.value.trim();

    if(NOMVALUE === ""){
        document.querySelector("#nombre").style.border="1px solid red";
        nomError.classList.toggle("mostrar"); //añade una clase en el atributo class="" sin borrar el resto

    }else{
        document.querySelector("#nombre").style.border="1px solid green";
        nomError.className = "ocultar"; //escribe una class en el atributo class="", borrando el resto del contenido
    }


    if(EMPRESAVALUE ===""){
        document.querySelector("#empresa").style.border="1px solid red";
        empError.classList.toggle("mostrar");

    }else{
        document.querySelector("#empresa").style.border="1px solid green";
        empError.className = "ocultar";
    }


    if(WEBVALUE === ""){
        document.getElementById("#web").style.border="1px solid red";
        webError.classList.toggle("mostrar");
    }else{
        document.querySelector("#web").style.border="1px solid green";
        webError.className = "ocultar";
    }

    if(CORREOVALUE === ""){
        document.getElementById("#email").style.border="1px solid red";
        emailError.classList.toggle("mostrar");
    }else{
        document.querySelector("#email").style.border="1px solid green";
        emailError.className = "ocultar";
    }

    if(MENSAJEVALUE === ""){
        document.getElementById("#mensaje").style.border="1px solid red";
        mensError.classList.toggle("mostrar");
    }else{
        document.getElementById("#mensaje").style.border="1px solid green";
        mensError.className="ocultar";
    }

}


