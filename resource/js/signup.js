const $ = require("jquery");
$("#signUpForm").submit(async function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var conpassword = document.getElementById("conpass").value;
  if (!email && !password && !name) {
    document.getElementById("err").innerHTML = "Email and Password are require";
  } else if (password != conpassword) {
    document.getElementById("err").innerHTML =
      "passport and conform passport is not";
  } else {
    const response = await fetch("http://34.238.235.137:3000/api/register", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("response>>>>", response);
    const data = await response.json();
    console.log("data >>>>>", data);
    if (data) {
      if (data.err == 0) {
        const user_data = data.Data;

        window.localStorage.setItem("user_id", user_data._id);
        window.localStorage.setItem("email", user_data.email);
        window.localStorage.setItem("token", user_data.Token);
        window.localStorage.setItem("user_name", user_data.name);
        window.location.replace("./home.html");
      } else {
        document.getElementById("err").innerHTML = data.ReturnMsg;
      }
    } else {
      document.getElementById("err").innerHTML = data.ReturnMsg;
    }
  }
});
