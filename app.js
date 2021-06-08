// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCgZG_eB78_DYQoHfDUAs7yRLHq-QXAYEA",
    authDomain: "e-commerce-5e4f5.firebaseapp.com",
    projectId: "e-commerce-5e4f5",
    storageBucket: "e-commerce-5e4f5.appspot.com",
    messagingSenderId: "312201925953",
    appId: "1:312201925953:web:2d78ebfc076897999abdc0"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// reference contactInfo Collections
let contactInfo = firebase.database().ref("infos");


//Listen for a submit
document.querySelector(".contact-form").addEventListener("submit",submitForm);


function submitForm(e) {
    e.preventDefault();
    //get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email , message);
    saveContactInfo(name,email,message); 
    document.querySelector(".contact-form").reset();
}
//save infos to Firebase
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

newContactInfo.set({
    name:name,
    email:email,
    message:message,
});
}