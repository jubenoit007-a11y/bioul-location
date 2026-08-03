// =======================================
// GALERIE PHOTO - LIGHTBOX
// =======================================


const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const fermer = document.getElementById("fermer");
const precedente = document.getElementById("precedente");
const suivante = document.getElementById("suivante");


let imageActuelle = 0;



// Ouverture

images.forEach((image, index)=>{


    image.addEventListener("click",()=>{

        imageActuelle = index;

        afficherImage();

        lightbox.style.display="flex";

    });


});




// Affichage image

function afficherImage(){

    lightboxImage.src = images[imageActuelle].src;

}



// Image suivante

suivante.addEventListener("click",()=>{


    imageActuelle++;


    if(imageActuelle >= images.length){

        imageActuelle=0;

    }


    afficherImage();


});




// Image précédente

precedente.addEventListener("click",()=>{


    imageActuelle--;


    if(imageActuelle < 0){

        imageActuelle=images.length-1;

    }


    afficherImage();


});




// Fermeture

fermer.addEventListener("click",()=>{

    lightbox.style.display="none";

});




// Fermeture clic extérieur

lightbox.addEventListener("click",(e)=>{


    if(e.target === lightbox){

        lightbox.style.display="none";

    }


});




// Navigation clavier

document.addEventListener("keydown",(e)=>{


    if(lightbox.style.display !== "flex") return;



    if(e.key==="Escape"){

        lightbox.style.display="none";

    }


    if(e.key==="ArrowRight"){

        suivante.click();

    }


    if(e.key==="ArrowLeft"){

        precedente.click();

    }


});


// =======================================
// ANIMATION APPARITION AU SCROLL
// =======================================


const sections = document.querySelectorAll(".section");


const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }


    });


},

{

threshold:0.15

}

);




sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform="translateY(30px)";

    section.style.transition="all .8s ease";


    observer.observe(section);


});


// =======================================
// Bouton burger
// =======================================
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});