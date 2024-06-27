const form = document.getElementById('login_form');

function myGreeting(username) {
  let message = "Welcome to NonTechLearning class".concat(' ', username)

  alert(message)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value == "") {
      document.getElementById("form_missing_username").removeAttribute("hidden")

      let form_missing_item = document.getElementById("form_missing_password")
      if (!(form_missing_item.hasAttribute('hidden'))) {
        form_missing_item.setAttribute("hidden")
      }

      let form_success_item = document.getElementById("form_submit_success")
      if (!(form_success_item.hasAttribute('hidden'))) {
        form_success_item.setAttribute("hidden")
      }
    } else if (password.value == "") {
      document.getElementById("form_missing_password").removeAttribute("hidden")
    } else {
      document.getElementById("form_submit_success").removeAttribute("hidden")

      setTimeout(myGreeting(username.value), 5000);
    }
  });
