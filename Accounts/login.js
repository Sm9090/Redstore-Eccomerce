import { onRegister , signIn } from "../firebase/firebase.js"

var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/

let regFoam =document.getElementById('regFoam')
let loginFoam = document.getElementById('loginFoam')

regFoam?.addEventListener('submit',  (e) => {
    e.preventDefault()
    const allInput = document.querySelectorAll('.input')
    const userName = allInput[0].value
    const email = allInput[1].value
    const phoneNumber = allInput[2].value
    const password = allInput[3].value
    const confirmPassword = allInput[4].value

    if(userName.value || email.value || phoneNumber.value || password.value ||confirmPassword.value){
        alert('fill All input !')
    }
    else if(userName.length < 3){
       alert('userName must be 3 characters')
       return;
   }
     else if(phoneNumber.length < 11){
         alert('phoneNumber 11 digits')
         return;
    }
    // else if(!regex.test(email.value)){
    //     return alert('please enter valid email')
    // }
    else if(password.length < 8){
        alert('password atleast of 8 characters')
        return;
    }
    else if(password.length != confirmPassword.length){
        alert("password doesn't match")
        return;
    }else{
    const user = {
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    }
    onRegister(user)
}
    
    for(let i = 0 ; i <= allInput.length ; i++){
        allInput[i].value = '';
    }

})

loginFoam?.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const logInput = document.querySelectorAll('.logInput')
    const email = logInput[0].value
    const password = logInput[1].value

    const user ={email , password}

    signIn(user)

})


        let indicator = document.getElementById('indicator')

          window.logIn = function(){
            loginFoam.style.transform = 'translateX(300px)'
            regFoam.style.transform = 'translateX(300px)'
            indicator.style.transform = 'translateX(0px)'
        }
         window.register = function (){
            loginFoam.style.transform = 'translateX(0px)'
            regFoam.style.transform = 'translateX(0px)'
            indicator.style.transform = 'translateX(100px)'
        }




        // if(!fullName.value || !email.value || !password.value || !confirmPassword.value){
        //     alert('Please fill the all input')
        //     return;
        // }
    
        // if(fullName.value.length <= 1 ){
        //     let err = document.getElementById('hide')
        //     err.className = ''
        //     // alert('Please put your name atleast 2 character')
        //     return;
        // }else if(fullName.value.length > 1){
        //     let err = document.getElementById('hide')
        //     err.className = 'display-none'
        // }
    
        // if(password.value != confirmPassword.value){
        //     alert('Password not match')
        //     return;
        // }
    
        // if(!regex.test(email.value)){
        //     alert('please input valid email address')
        //     return;
        // }
    
        // if(password.value.length < 8){
        //     alert('please enter atleast 8 characters long password')
        //     return;
        // }