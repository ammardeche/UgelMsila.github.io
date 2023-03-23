let loginForm = document.getElementById("contact-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // First name
  let firstName = document.getElementById("firstName");
  if (firstName.value == "") {
    alert("من فضلك فم بادخال الاسم الاول");
  }

  // Last name
  let lastName = document.getElementById("lastName");
  if (lastName.value == "") {
    alert("من فضلك قم بادخال الاسم الثاني");
  }

  // Email
  let email = document.getElementById("email");
  if (email.value == "") {
    alert("من فضلك قم بادخال بريدك الالكتروني");
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
          alert("! لقد تم ارسال المعلومات بنجاح سنتصل بك في اقرب وقت");
          // Clear form
          firstName.value = "";
          lastName.value = "";
          email.value = "";
          faculty.value = "";
          message.value = "";
        } else {
          alert("حدث خطأ يرجي اعادة المحاولة");
        }
      })
      .catch((error) => {
        alert("حدث خطأ يرجي اعادة المحاولة");
      });
  }
});
