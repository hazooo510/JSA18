let btnLogin = document.getElementById('login-btn') 
btnLogin.onclick = function(){
    let usernameInput = document.getElementById('username')
    let passwordInput = document.getElementById('password')

    let username = usernameInput.value
    let password = passwordInput.value

    let user = localStorage.getItem('register_information')

    let userObject = JSON.parse(user)
    
    if(username != userObject.username){
        alert('Sai username')
    }
    else if(password != userObject.password){
        alert('Sai password')
    }
    else{
        alert('Đăng nhập thành công')
        // Chuyển hướng đến trang chính
        window.location.href = './Home_real.html';
    }
}
