//Recuperation du bouton à cliquer
const buttonForm = document.getElementById("submit");
    
//àppele del'évenement click pour le bouton
 buttonForm.addEventListener("click", function(event){
   
   event.preventDefault();
//recuperation des valuers des input du formulaire
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   console.log(email);
   console.log(password);
   //Traduction des valeurs en langage JSON
   let requestBody =JSON.stringify({email:email, password:password});
   console.log(requestBody);
   //requete POST à l'API
   fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
   },
      body: requestBody
   })
  // Traitement de la reponse
   .then(res => {
      console.log(res)
      return res.json();
   })
   
   //Condition pour enregister le donne dans le locale storage 
   .then(data => {
      if(data.token){
         localStorage.setItem("access-token", data.token);
         localStorage.setItem("userId", data.userId);
         window.location.href ="index.html";
            
      } else{
         alert("mot de passe ou email incorrect");
      }
   })

   .catch(error => console.error(error))

   
});

