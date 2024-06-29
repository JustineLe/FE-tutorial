const form = document.getElementById('login_form');

function myGreeting(username) {
  let message = "Welcome to NonTechLearning class".concat(' ', username)

  alert(message)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    let form_missing_username = document.getElementById("form_missing_username");
    let form_missing_password = document.getElementById("form_missing_password");
    let form_success_item = document.getElementById("form_submit_success");
  
    if (username.value === "") {
      form_missing_username.removeAttribute("hidden");

      if (!(form_missing_password.hasAttribute('hidden'))) {
        form_missing_password.setAttribute("hidden", true);
      }

      if (!(form_success_item.hasAttribute('hidden'))) {
        form_success_item.setAttribute("hidden", true);
      }
    } else if (password.value === "") {
      form_missing_password.removeAttribute("hidden");

      if (!(form_missing_username.hasAttribute('hidden'))) {
        form_missing_username.setAttribute('hidden', true);
      }

      if (!(form_success_item.hasAttribute('hidden'))) {
        form_success_item.setAttribute("hidden", true);
      }
    } else {
      form_success_item.removeAttribute("hidden");

      if (!(form_missing_username.hasAttribute('hidden'))) {
        form_missing_username.setAttribute('hidden', true);
      }

      if (!(form_missing_password.hasAttribute('hidden'))) {
        form_missing_password.setAttribute("hidden", true);
      }
      setTimeout(myGreeting(username.value), 5000);
    }
  });
