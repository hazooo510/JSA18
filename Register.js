let btnRegister = document.getElementById('register-btn')

btnRegister.onclick = function(){
    let usernameInput = document.getElementById('username')
    let passwordInput = document.getElementById('password')

    let username = usernameInput.value
    let password = passwordInput.value
    
    let emailInput = document.getElementById('email')
    let rePasswordInput = document.getElementById('re-password')

    let email = emailInput.value
    let rePassword = rePasswordInput.value

    let user = {
        username: username,
        password: password,
        email: email,
        rePassword: rePassword
    }

    console.log(user)
    localStorage.setItem('register_information', JSON.stringify(user))
}

