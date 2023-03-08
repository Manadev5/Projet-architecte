fetch("http://localhost:5678/api/works")
         .then(res => {
           console.log(res)
           return res.json(); 
         } )
         .then(array => {
            console.log (array);
            let displayWorks = '';
            for(let element of array){
               displayWorks += `
               <figure>
				<img src="${element.imageUrl}" alt="${element.title}">
				<figcaption>${element.title}</figcaption>
			</figure> `;
            let gallery = document.querySelector(".gallery");
            gallery.innerHTML = displayWorks;


            const btnTous = document.getElementById("btn-tous");

            btnTous.addEventListener("click", function(){
               const allWorks = array.filter(function(array){
                  return array;
               });
               document.querySelector(".gallery").innerHTML = "";
               console.log(allWorks);
              gallery.innerHTML = displayWorks;
            })



              const btnObjets = document.getElementById("btn-objets");

              btnObjets.addEventListener("click", function(){
               let objetsWorks = array.filter( function(array){
                  return array.categoryId === 1;
               });
               let visualWorks = '';
               for(let element of objetsWorks){
                  visualWorks += `
                  <figure>
               <img src="${element.imageUrl}" alt="${element.title}">
               <figcaption>${element.title}</figcaption>
            </figure> `;
               document.querySelector(".gallery").innerHTML = "";
               gallery.innerHTML = visualWorks;
               }
            })
              


               const btnAppartements = document.getElementById("btn-appartements");

              btnAppartements.addEventListener("click", function(){
               let appartsWorks = array.filter( function(array){
                  return array.categoryId === 2;
               });
               let visualWorks = '';
               for(let element of appartsWorks){
                  visualWorks += `
                  <figure>
               <img src="${element.imageUrl}" alt="${element.title}">
               <figcaption>${element.title}</figcaption>
            </figure> `;
               document.querySelector(".gallery").innerHTML = "";
               gallery.innerHTML = visualWorks;
               }
             
            })



               const btnHotel = document.getElementById("btn-hotel");

              btnHotel.addEventListener("click", function(){
               let hotelWorks = array.filter( function(array){
                  return array.categoryId === 3;
               });
               let visualWorks ='';
               for(let element of hotelWorks){
                  visualWorks += `
                  <figure>
               <img src="${element.imageUrl}" alt="${element.title}">
               <figcaption>${element.title}</figcaption>
            </figure> `;
               document.querySelector(".gallery").innerHTML = "";
               gallery.innerHTML = visualWorks;
               }
              
              
            })
            

            }
            
         })

let changeConnexion = function (event) {
   let token = localStorage.getItem("access-token");
   let connexion = document.getElementById("connexion");
   let logoModifier = document.querySelector(".logo-modifier");
   let modifierPhoto = document.querySelector(".modifier-photo");
   let filtres = document.querySelector(".filtres")

   if(token !== null){
       connexion.innerHTML = "logout";
     logoModifier.style.display = "flex";
     modifierPhoto.style.display = "flex";
     filtres.style.display = "none"
   }else{
      connexion.innerHTML = "login";
      logoModifier.style.display = "none";
      modifierPhoto.style.display  = "none";
      filtres.style.display = "flex";
   }
}

changeConnexion();

let logoModifier = document.querySelector(".logo-modifier");
let xCloseModal = document.querySelector(".fa-xmark");
let body = document.querySelector("body");
let modal = null;

let openModal = function (open){
   open.preventDefault();
   let target = document.querySelector(".modal");
   target.style.display = "flex";
   target.removeAttribute("aria-hidden");
   target.setAttribute("arial-modal", "true");
   body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
   modal = target;
   modal.addEventListener("click", closeModal)
 
}

let closeModal = function(close){
   if (modal === null) return
   close.preventDefault();
  let target = document.querySelector(".modal");
  target.style.display= "none";
  target.setAttribute("aria-hidden", "true");
  target.setAttribute("arial-modal", "false");
  body.style.backgroundColor = "white";
  modal.removeEventListener();
  modal = null
}

logoModifier.addEventListener("click", openModal);

xCloseModal.addEventListener("click", closeModal);