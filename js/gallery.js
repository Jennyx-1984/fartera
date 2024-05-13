

let imagenes=[
                "imgs/figma_foto1-pase.jpg",
                "imgs/figma_foto2-pase.jpg",
                "imgs/figma_foto3-pase1.jpg"
            ];
let contador=0;
            console.log(imagenes[0],imagenes[1],imagenes[2]);

document.imagen.src = imagenes[contador];


let SliderDerecha = document.querySelector(".slider-derecho");
let SliderIzquierda = document.querySelector(".slider-izquierdo");
let $botonPausa=document.getElementById("pausa");
let intervalo=setInterval(MoverDerecha,1000);
let playing = true;

function MoverDerecha(){
contador++;
if(contador > imagenes.length-1){
    contador=0;
}
document.imagen.src=imagenes[contador];
}

SliderDerecha.addEventListener("click", MoverDerecha);


function MoverIzquierda(){
    contador--;
    if(contador < 0){
        contador=imagenes.length-1;
}

document.imagen.src=imagenes[contador];
}


function pausaSlider(){
    playing = false;
    clearInterval(intervalo);
}

function playSlider(){
   
    playing = true;
    intervalo = setInterval(MoverDerecha,1000);
}

$botonPausa.onclick = function(){
    if(playing){ 
        pausaSlider();
     }else{ 
        playSlider(); 
    }
};


SliderIzquierda.addEventListener("click",MoverIzquierda);
       

