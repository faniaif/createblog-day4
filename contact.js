function submitData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("Please fill your name");
  } else if (email == "") {
    return alert("Please fill your email");
  } else if (phone == "") {
    return alert("Phone Number cannot empty");
  } else if (subject == "") {
    return alert("choose one");
  } else if (message == "") {
    return alert("Enter your message");
  }

  let link = document.createElement("a");
  link.href = `mailto:${email}?subject=${subject}&body=Hi, nama saya ${name},  ${message}, Contact me on ${phone}`;
  link.click();

  let fill = {
    name,
    email,
    phone,
    subject,
    message,
  };

  console.log(fill);
}
