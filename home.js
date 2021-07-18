window.onload = function() {
    const submit = document.getElementById("submit");

    submit.onclick = saveEmail;
};

function saveEmail() {
    const inputEmail = document.getElementById("email");
    const email = inputEmail.value;

    localStorage.setItem("emailsave", email);

    alert("E-mail cadastrado");
}