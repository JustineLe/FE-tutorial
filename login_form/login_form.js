const form = document.getElementById('login_form');

function myGreeting(username) {
  let message = "Welcome to NonTechLearning class".concat(' ', username)

  alert(message)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    if (username.value == "") {
      document.getElementById("form_missing_username").removeAttribute("hidden")
    } else if (password.value == "") {
      document.getElementById("form_missing_password").removeAttribute("hidden")
    } else {
      document.getElementById("form_submit_success").removeAttribute("hidden")

      setTimeout(myGreeting(username), 5000);
    }
  });
