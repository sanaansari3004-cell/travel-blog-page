function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }
    if (email.indexOf("@") == -1) {
        alert("Enter valid email");
        return false;
    }
    alert("Registration Successful!");
    return true;
}