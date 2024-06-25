const form = document.getElementById('login_form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value == "" || password.value == "") {
      alert("Username or password is empty")
    } else {
      document.getElementById("form_submit_success").innerHTML = '<div>Success get the form<div>'
    }
  });
