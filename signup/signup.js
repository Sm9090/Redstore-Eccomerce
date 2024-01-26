const users = JSON.parse(localStorage.getItem('users')) || []
var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/



function onSignUp(){
const allInput = document.getElementsByTagName('input')
const fullName = allInput[0]
const email = allInput[1]
const password = allInput[2]
const confirmPassword = allInput[3]

if(!fullName.value || !email.value || !password.value || !confirmPassword.value){
    alert('Please fill the all input')
    return;
}

if(fullName.value.length <= 1 ){
    let err = document.getElementById('hide')
    err.className = ''
    // alert('Please put your name atleast 2 character')
    return;
}else if(fullName.value.length > 1){
    let err = document.getElementById('hide')
    err.className = 'display-none'
}

if(password.value != confirmPassword.value){
    alert('Password not match')
    return;
}

if(!regex.test(email.value)){
    alert('please input valid email address')
    return;
}

if(password.value.length < 8){
    alert('please enter atleast 8 characters long password')
    return;
}
const user = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
}
users.push(user)
localStorage.setItem('users',JSON.stringify(users))
alert('registered Sucessfully')

for(var i=0 ; i<allInput.length; i++){
    allInput[i].value = ''
}
}

