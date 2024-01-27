import {auth ,getUser,logOut } from "./firebase/firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";



window.down = ()=>{
    const arrow =document.getElementById('arrow')
    const menu = document.getElementById('Menu')
        if(menu.style.display === 'none' || menu.style.display === ''){
            menu.style.display = 'block'
            arrow.style.transform = 'rotate(180deg)'
        }else{
            arrow.style.transform = 'rotate(0deg)'
            menu.style.display = 'none'
        }
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        console.log(user)
        const userData = await getUser(uid)
        console.log(userData)
        const arrow = document.getElementById('arrow')
      const userName = document.getElementById('userName')
      userName.innerHTML = userData.userName 
          userName.append(arrow)
    } else {    
        location.href = './Accounts/account.html'
    }
});
//   



getData()

function getData(){
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res =>{
        
        const data = res.products
        console.log(data)
        const latestProduct =  document.getElementById('Latest-Product')

        for(let i = 0 ; i < 8; i++){
            const createElement = document.createElement('div')
            createElement.className = 'col-4'

            const img = document.createElement('img')
            img.style.width = '200px'
            img.style.height = '200px'
            img.src = data[i].thumbnail

            const title = document.createElement('h4')
            title.innerHTML = data[i].title

            const price = document.createElement('p')
            price.innerHTML = `$${data[i].price}`

            const rating = document.createElement('div')
            rating.className = 'rating'
            rating.innerHTML = '<i class="fa fa-star" ></i>' + '<i class="fa fa-star" ></i>' +'<i class="fa fa-star" ></i>' + '<i class="fa fa-star-half" ></i>'

            createElement.append(img)
            createElement.append(title)
            createElement.append(rating)
            createElement.append(price)

            latestProduct.append(createElement)
        }
    })
}



const menuItems = document.getElementById('menuItems')
menuItems.style.maxHeight = "0px";

window.menuToggle =() =>{
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
}


window.handleLocation=()=>{
    const userName = document.getElementById('userName')
    if(userName.innerHTML === 'accounts'){
        location.href = './Accounts/account.html'
    }

}


window.logOut =() => {
    logOut()
}