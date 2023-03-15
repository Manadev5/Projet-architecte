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

            let logoModifier = document.querySelector(".logo-modifier");

            logoModifier.addEventListener("click" , function(){
               return array
            });
            let modalWorks ='';
            for(let element of array){
               modalWorks += `
              <figure>
			    <img src="${element.imageUrl}" alt="">
			    <figcaption>editer</figcaption>
			    <i class="fa-sharp fa-solid fa-trash-can" data-id="${element.id}"></i>
		       </figure> `;
             let photosModal = document.querySelector(".images-modal");
             photosModal.innerHTML="";
             photosModal.innerHTML = modalWorks;
            }

            document.querySelectorAll(".fa-trash-can").forEach(element =>{
               element.addEventListener("click", function (event){
                  event.preventDefault();

               let idDelete = element.dataset.id;
               console.log(idDelete);

               let token = localStorage.getItem("access-token");
               fetch(`http://localhost:5678/api/works/${idDelete}`, {
                        method:'DELETE',
                       headers:{ 
                         'accept': 'application/json',
                         'Authorization':`Bearer ${token}`
                      }
                      
                       })
            
                   .then(response => response.json())
                   .then(response => console.log(response))
                   .catch(error =>console.error(error) )
                })
               });

               let btnValidation = document.querySelector(".btn-valider"); 
               
               function addWork(){

                  let imageData = document.getElementById("image");
                  let titleData = document.getElementById("titre");
                  let categoryData = document.getElementById("types-categorie");

                  let formData = new FormData();
                  formData.append("image", imageData.files[0]);
                  formData.append("title", titleData.value);
                  formData.append("category", categoryData.categoryId);
                  console.log(imageData,titleData,categoryData);

                  let token = localStorage.getItem("access-token");
                  fetch('http://localhost:5678/api/works', {
                      method : 'POST',
                      headers :{
                        'accept' : 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                      },
                      body : formData
                  })
                  .then(res => res.json)
                  .then(res => console.log(res))
                  .catch(err => console.error(err))
               }
              
               btnValidation.addEventListener("click", function(){
                 addWork();
               })

             


            }
            
         })

let changeConnexion = function (event) {
   let token = localStorage.getItem("access-token");
   let connexion = document.getElementById("connexion");
   let logoModifier = document.querySelector(".logo-modifier");
   let modifierPhoto = document.querySelector(".modifier-photo");
   let filtres = document.querySelector(".filtres");
   
   
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

   connexion.addEventListener("click", function(event){
      localStorage.removeItem("access-token");
      window.location.replace("index.html")
   })
}

changeConnexion();

let logoModifier = document.querySelector(".logo-modifier");
let xCloseModal = document.querySelector(".fa-xmark");
let body = document.querySelector("body");
let buttonAjout = document.querySelector(".button-ajout");
let iconPrecedent = document.querySelector(".fa-arrow-left");


let openModal = function (open){
   open.preventDefault();
   let target = document.querySelector(".modal");
   target.style.display = "flex";
   target.removeAttribute("aria-hidden");
   target.setAttribute("arial-modal", "true");
   body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
   
 
}

let closeModal = function(close){
  close.preventDefault();  
  let target = document.querySelector(".modal");
  target.style.display= "none";
  target.setAttribute("aria-hidden", "true");
  target.setAttribute("arial-modal", "false");
  body.style.backgroundColor = "white";
}

let openModal2 = function(open){
   open.preventDefault();
   let formulaireModal = document.querySelector(".formulaire-modal");
   let modalWrapper = document.querySelector(".modal-wrapper");
   formulaireModal.style.display = "block";
   modalWrapper.style.display = "none";
   body.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
}

let closeModal2 = function(close){
   close.preventDefault();
   let formulaireModal = document.querySelector(".formulaire-modal");
   let modalWrapper = document.querySelector(".modal-wrapper");
   formulaireModal.style.display = "none";
   modalWrapper.style.display = "block";
   body.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
}

logoModifier.addEventListener("click", openModal);

xCloseModal.addEventListener("click", closeModal);

 buttonAjout.addEventListener("click", openModal2 );

 iconPrecedent.addEventListener("click", closeModal2);



 