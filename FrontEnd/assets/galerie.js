//recuperation des données de l'API à travers la fonction fetch
fetch("http://localhost:5678/api/works")
         .then(res => {
            // Recuperation de la reponse en json
           console.log(res)
           return res.json(); 
         } )
         .then(array => {
            console.log (array);
            let displayWorks = '';
            //recuperation des chaque image titre
            for(let element of array){
            //ajout au DOM des éléments recuperé selon la structure suivante
               displayWorks += `
               <figure>
				<img src="${element.imageUrl}" alt="${element.title}">
				<figcaption>${element.title}</figcaption>
			</figure> `;
            let gallery = document.querySelector(".gallery");
            //Insertion de la structure dans le div gallery
            gallery.innerHTML = displayWorks;


            const btnTous = document.getElementById("btn-tous");
         // affichage des tous les imgages à travers le boutton "tous"
            btnTous.addEventListener("click", function(){
               const allWorks = array.filter(function(array){
                  return array;
               });
               document.querySelector(".gallery").innerHTML = "";
               console.log(allWorks);
              gallery.innerHTML = displayWorks;
            })



              const btnObjets = document.getElementById("btn-objets");
              // affichage des images de la categorie objets à treaers le boutton "objets"
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
                // affichage des images de la categorie appartements à treaers le boutton "appartements"
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
               // affichage des images de la categorie hotel à travers le boutton "hotel"
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

            
           // Ajout des éléments de la modale au DOM dans le div "photosModal"
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

            //requete de la function delete à travers l'API en clicquant l'icone corbeille
            document.querySelectorAll(".fa-trash-can").forEach(element =>{
               element.addEventListener("click", function (event){
                  event.preventDefault();

               let idDelete = element.dataset.id;
               console.log(idDelete);

               let token = localStorage.getItem("access-token");
               fetch('http://localhost:5678/api/works/'+ idDelete, {
                        method:'DELETE',
                       headers:{ 
                         'accept': 'application/json',
                         'Authorization':`Bearer ${token}`
                      }

                       })
            
                   .then(response => response.json)
                   .then(response => console.log(response))
                   .catch(error => console.error(error))
                })
               });

              

              
             

             


            }
            
         })

let changeConnexion = function (event) {
   //Recuperation des éléments à cacher est à montrer après le login
   let token = localStorage.getItem("access-token");
   let connexion = document.getElementById("connexion");
   let logoModifier = document.querySelector(".logo-modifier");
   let modifierPhoto = document.querySelector(".modifier-photo");
   let modeEdition = document.querySelector(".mode-edition");
   let filtres = document.querySelector(".filtres");
   
   //Condition pour l'affichge de certains éléments
   if(token !== null){
       connexion.innerHTML = "logout";
     logoModifier.style.display = "flex";
     modifierPhoto.style.display = "flex";
     filtres.style.display = "none"
     modeEdition.style.display = "flex";
   }else{
      connexion.innerHTML = "login";
      logoModifier.style.display = "none";
      modifierPhoto.style.display  = "none";
      filtres.style.display = "flex";
      modeEdition.style.display = "none"
   }
   //Suppression des données sauvegarde dans la cache est effectuation du logout 
   connexion.addEventListener("click", function(event){
      localStorage.removeItem("access-token");
      window.location.replace("index.html")
   })
}

changeConnexion();

//Creation des variables à utiliser pour la modale
let logoModifier = document.querySelector(".logo-modifier");
let xCloseModal = document.querySelector(".fa-xmark");
let body = document.querySelector("body");
let buttonAjout = document.querySelector(".button-ajout");
let iconPrecedent = document.querySelector(".fa-arrow-left");
let introduction = document.getElementById("introduction");


//Fonction pour ouvrir la modale
let openModal = function (open){
   open.preventDefault();
   let target = document.querySelector(".modal");
   target.style.display = "flex";
   target.removeAttribute("aria-hidden");
   target.setAttribute("arial-modal", "true");
   body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  
}

// Fonction pour fermer la modale
let closeModal = function(close){
  close.preventDefault();  
  let target = document.querySelector(".modal");
  target.style.display= "none";
  target.setAttribute("aria-hidden", "true");
  target.setAttribute("arial-modal", "false");
  body.style.backgroundColor = "white";
 
}

// Fonction pour ouvrir la deuxieme modale avec les formulaires
let openModal2 = function(open){
   open.preventDefault();
   let formulaireModal = document.querySelector(".formulaire-modal");
   let modalWrapper = document.querySelector(".modal-wrapper");
   formulaireModal.style.display = "block";
   modalWrapper.style.display = "none";
   body.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
}

// Fonction pour fermer la deuxieme modale à travers l'icone flèche et affichage de la modale precedent
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

 


//Recupertion des éléments à utiliser dans la deuxieme modale
 let btnValidation = document.querySelector(".btn-valider"); 
               let form = document.querySelector(".formulaires")
               let inputImg  = document.getElementById("image");
               let  inputTitle = document.getElementById("titre");
               let inputCategory = document.getElementById("types-categorie");
               let imgForm = document.querySelector("img-form");

               let message = document.createElement("small");
               form.appendChild(message);
               
               //Affichege de l'image qu'on veut envoyer à l'api 
               inputImg.addEventListener("change", function(){
                  
                  document.querySelector(".fa-image").style.display = "none";
                  document.getElementById("label-image").style.display = "none";  
                  document.querySelector(".text-form").style.display = "none";
                  let fileReader = new FileReader();
                  

                  fileReader.onload = function (){

                     img = document.querySelector(".img-form");
                     img.style.display = "block"
                     img.src = fileReader.result;
                    
                  }
                  
                  fileReader.readAsDataURL(inputImg.files[0])
                 
              }, false);

                            
               //Evenement clicque pour envoyer le donnée
               btnValidation.addEventListener("click", function(){
                  enterValues()
               });
               
               //Fonction avec condition et affichage des messages lors de l'envoie
               function enterValues(){
                  const imageData = inputImg.files[0];
                  const titleData =  inputTitle.value;
                  const  categoryData = inputCategory.selectedOptions[0].value;
                   
                  if (!imageData || !titleData || !categoryData){
                     message.textContent = "Tout le champs doivent etre rempli";
                     message.style.color = "red";
                     setTimeout(()=> {
                        message.textContent ="";
                     }, 4000)
                     inputImg.value = "";
                     inputTitle.value = "";
                     img.style.display="none";
                     document.querySelector(".fa-image").style.display = "block";
                     document.getElementById("label-image").style.display = "block";  
                     document.querySelector(".text-form").style.display = "block";
                     console.log(imageData, titleData, categoryData)
                  } else {
                     addWork(imageData, titleData, categoryData);
                     message.textContent = "contenu envoyé correctement";
                     message.style.color = "green";
                     setTimeout(()=> {
                        message.textContent ="";
                     }, 2000)
                     inputImg.value = "";
                     inputTitle.value = "";
                     img.style.display= "none";
                     document.querySelector(".fa-image").style.display = "block";
                     document.getElementById("label-image").style.display = "block";  
                     document.querySelector(".text-form").style.display = "block";
                  }
               }
                

                //Fonction qu'envoie la requete à l'API pour envoyer les données du formulaire
                function addWork(file, title, category) {
                  let formData = new FormData();
                  formData.append("image", file);
                  formData.append("title", title);
                  formData.append("category", category);
                  console.log(formData);
                  let token = window.localStorage.getItem("access-token");
                  fetch("http://localhost:5678/api/works", {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${token}`,
                      /*accept: "application/json",
                      "Content-Type": "multipart/form-data",*/
                    },
                    body: formData,
                  })
                    .then((res) => res.json)
                    .then((res) => console.log(res))
                    .catch((err) => console.error(err));
                } 

 