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
