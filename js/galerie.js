// =======================================
// GALERIE PHOTO - LIGHTBOX
// =======================================


const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const fermer = document.getElementById("fermer");


let imageActuelle = 0;


// Ouverture de la galerie

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        imageActuelle = index;

        ouvrirImage();

    });

});



// Afficher l'image sélectionnée

function ouvrirImage(){

    lightboxImage.src = images[imageActuelle].src;

    lightbox.style.display = "flex";

}



// Fermer la galerie

fermer.addEventListener("click", () => {

    lightbox.style.display = "none";

});



// Fermer en cliquant hors de l'image

lightbox.addEventListener("click", (e)=>{

    if(e.target === lightbox){

        lightbox.style.display="none";

    }

});



// Navigation clavier

document.addEventListener("keydown",(e)=>{


    if(lightbox.style.display !== "flex"){

        return;

    }



    if(e.key === "Escape"){

        lightbox.style.display="none";

    }



    if(e.key === "ArrowRight"){

        imageActuelle++;

        if(imageActuelle >= images.length){

            imageActuelle=0;

        }

        ouvrirImage();

    }




    if(e.key === "ArrowLeft"){

        imageActuelle--;

        if(imageActuelle < 0){

            imageActuelle=images.length-1;

        }

        ouvrirImage();

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