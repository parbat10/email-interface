

function login(event){
  event.preventDefault();
  let inputEmail = document.querySelector('.js-email');
  let Email = inputEmail.value;
  
  let inputElement = document.querySelector('.js-password');
  let password = inputElement.value;

  if (Email === "admin@gmail.com" && password === "123456"){
    window.location.href = "home.html";
  }else{
    alert("wrong email or password. please re try ");
  }
};
