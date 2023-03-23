let loginForm = document.getElementById("contact-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // First name
  let firstName = document.getElementById("firstName");
  if (firstName.value == "") {
    alert("Please enter your first name");
  }

  // Last name
  let lastName = document.getElementById("lastName");
  if (lastName.value == "") {
    alert("Please enter your last name");
  }

  // Email
  let email = document.getElementById("email");
  if (email.value == "") {
    alert("Please enter your email");
  }

  let faculty = document.getElementById("faculty");

  // message
  let message = document.getElementById("message");
  if (message.value == "") {
    alert("Please enter a message");
  }

  // handle submit
  if (
    firstName.value != "" &&
    lastName.value != "" &&
    email.value != "" &&
    message.value != ""
  ) {
    // Send request
    let data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      faculty: faculty.options[faculty.selectedIndex].text,
      message: message.value,
    };

    fetch("http://ammar-faculty.babylontech.net/SendMail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("We have received your message, thank you!");
          // Clear form
          firstName.value = "";
          lastName.value = "";
          email.value = "";
          faculty.value = "";
          message.value = "";
        } else {
          alert("Message failed to send");
        }
      })
      .catch((error) => {
        alert("Message failed to send");
      });
  }
});
