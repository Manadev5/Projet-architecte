
const buttonForm = document.getElementById("submit");
    

 buttonForm.addEventListener("click", function(event){
   
   event.preventDefault();

   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   console.log(email);
   console.log(password);
   let requestBody =JSON.stringify({email:email, password:password});
   console.log(requestBody);
   fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
   },
      body: requestBody
   })

   .then(res => {
      console.log(res)
      return res.json();
   })
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

