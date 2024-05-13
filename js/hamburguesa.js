
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

cerrar.style.display="none";
/*abrir.style.display="inline-block";*/

window.addEventListener('resize',function() {
    let anchoV1 = window.innerWidth;
    console.log("width: ", anchoV1, "px");   
    //if (anchoV1 >= 680){
        if(anchoV1 >=775){  
        abrir.style.display="none";
        cerrar.style.display="none";
        
}else{
    abrir.style.display="inline-block";
}
    })



    abrir.addEventListener("click",()=>{
        console.log(`Le diste a abrir`);
        nav.style.display="inline-block";
        nav.classList.add("visible");
        abrir.style.display="none";
        cerrar.style.display="inline-block";
    
        
    })
    
    
    cerrar.addEventListener("click",()=>{
        console.log(`Le diste a cerrar`);
        nav.classList.remove("visible");
        abrir.style.display="inline-block";
        cerrar.style.display="none";
    
    })





    

