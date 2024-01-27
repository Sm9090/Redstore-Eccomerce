  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import {  getFirestore ,collection, addDoc ,getDoc ,doc,setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDmV2yS14h_d5oYWlSjM_m5nomskBadRT4",
    authDomain: "redstore-a2757.firebaseapp.com",
    projectId: "redstore-a2757",
    storageBucket: "redstore-a2757.appspot.com",
    messagingSenderId: "879292970156",
    appId: "1:879292970156:web:ed5cbaf3925ca02d145b09",
    measurementId: "G-NGWNTFERRF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

async function onRegister(user){

  const { email  , password , userName , phoneNumber} = user

  console.log('user 1 ==>' + user)
  createUserWithEmailAndPassword(auth, email, password )
  .then(async(userCredential) => {
  const user =  userCredential.user;
  console.log('authentication user ==>' + user)
  console.log(user.uid)
  try {
    const docRef = await setDoc(doc(db, "users",user.uid), {
      email,
      userName,
      phoneNumber
    });
    alert('registered sucessfully')
  } catch (e) {
    console.log("Error adding document: ", e);
  }
})
.catch((error) => {
  const errorMessage = error.message.split(':')[1];
  alert(errorMessage)
});
}

function signIn(user){
  const {email ,password} = user

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log( user)
    alert('Login Successfully')
    window.location.replace("../index.html")  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message.split(':')[1];
    alert(errorMessage)
  });

}
async function getUser(uid) {
      console.log('uid', uid)
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap)
      if (docSnap.exists()) {
          const user = docSnap.data()
          return user
      } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
      }
    }

    function logOut(){
      return signOut(auth)
    }
    


  export{

    onRegister,
    signIn,
    auth,
    onAuthStateChanged,
    getUser,
    logOut,
  }