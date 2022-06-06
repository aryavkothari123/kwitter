var firebaseConfig = {
    apiKey: "AIzaSyBS2TqgDJMiV0j5lSApYwxCaKkIjlcCWnY",
    authDomain: "kwitter-d8351.firebaseapp.com",
    databaseURL: "https://kwitter-d8351-default-rtdb.firebaseio.com",
    projectId: "kwitter-d8351",
    storageBucket: "kwitter-d8351.appspot.com",
    messagingSenderId: "615272248717",
    appId: "1:615272248717:web:37b9d5b1fab71ca041b9c4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        test : "my name is Aryav"
    });
}