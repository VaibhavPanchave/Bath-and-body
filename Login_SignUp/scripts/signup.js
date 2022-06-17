document.getElementById("createAccount").addEventListener("click", getUserData)

async function getUserData(){
    let Fname = document.getElementById("signUpFName").value
    let Lname = document.getElementById("signUpLName").value
    let email = document.getElementById("signUpEmail").value
    let street = document.getElementById("signUpStreet").value
    let city = document.getElementById("signUpCity").value
    let state = document.getElementById("signUpState").value
    let zipcode = document.getElementById("signUpZipcode").value
    let phone = document.getElementById("signUpPhone").value
    let password = document.getElementById("signUpPassword").value

    let body = {"Fname" :Fname,
                "Lname": Lname, 
                "email": email,
                "street": street,
                "city": city,
                "state": state,
                "zipcode": zipcode, 
                "phone": phone,
                "password": password}

    await fetch(`https://bath-and-body-mock-server.herokuapp.com/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },  
        body: JSON.stringify(body),
    }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))
    
    alert("SignUp Sucessfully ")
    window.location.href="login.html"
}