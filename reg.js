// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuqdoknGKwb64LT7LED-vyAeG1hrnKWG0",
  authDomain: "project-d5f59.firebaseapp.com",
  projectId: "project-d5f59",
  storageBucket: "project-d5f59.appspot.com",
  messagingSenderId: "564119352201",
  appId: "1:564119352201:web:50befe3bb8cab38b192758",
  measurementId: "G-90JW57MTP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

const email= document.getElementById('email').value;
const password= document.getElementById('password').value;

const submit= document.getElementById('submit').value;
submit.addEventListener("click",function(event){
    event.preventDefault()
 
    createUserWithEmailAndPassword(auth,name, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account....")
      window.location
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
})


    



