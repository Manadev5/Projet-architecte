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
   let token = localStorage.getItem("access-token");
   let connexion = document.getElementById("connexion");
   let logoModifier = document.querySelector(".logo-modifier");
   let modifierPhoto = document.querySelector(".modifier-photo");
   let modeEdition = document.querySelector(".mode-edition");
   let introduction = document.getElementById("introduction")
   let filtres = document.querySelector(".filtres");
   
   
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



 let btnValidation = document.querySelector(".btn-valider"); 
               let form = document.querySelector(".formulaires")
               let inputImg  = document.getElementById("image");
               let  inputTitle = document.getElementById("titre");
               let inputCategory = document.getElementById("types-categorie");
               let imgForm = document.querySelector("img-form");
               let message = document.createElement("small");
               form.appendChild(message);

               inputImg.addEventListener("click", function(){
                  
                  document.querySelector(".fa-image").style.display = "none";
                  document.getElementById("label-image").style.display = "none";  
                  document.querySelector(".text-form").style.display = "none";
                  let fileReader = new FileReader();
                  

                  fileReader.onload = function (){

                     img = new Image();
                     img.src = fileReader.result;
                     document.querySelector(".formulaire-image").appendChild(img)
                  }
                  
                  fileReader.readAsDataURL(inputImg.files[0])
                 
              }, false);

                            

               btnValidation.addEventListener("click", function(){
                  enterValues()
               });

               function enterValues(){
                  let imageData = inputImg.files[0];
                  let titleData =  inputTitle.value;
                  let  categoryData = inputCategory.selectedOptions[0].id;
                   
                  if (!imageData || !titleData || !categoryData){
                     message.textContent = "Tout le champs doivent etre rempli";
                     message.style.color = "red";
                     setTimeout(()=> {
                        message.textContent ="";
                     }, 2000)
                     inputImg.value = "";
                     inputTitle.value = "";
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
                  }
               }

               function addWork(file, title, category){

                  /*let formData = new FormData();
                  formData.append("image",file);
                  formData.append("title", title);
                  formData.append("category", category);
                  console.log(formData);*/
                  const form = document.getElementById("form");
                  const submitter = document.querySelector("button[value=valider]");
                  const formData = new FormData(form, submitter);
                  formData.append("image", file);


                  for (const [key, value] of formData) {

                     console.log(`${key}: ${value}\n`);
                  }
                  

                  let token = window.localStorage.getItem("access-token");
                  
                  fetch('http://localhost:5678/api/works', {
                      method : 'POST',
                      headers :{
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                        
                      },
                      body : formData
                  })
                  .then(res => res.json)
                  .then(res => console.log(res))
                  .catch(err => console.error(err))
                  
               }

 