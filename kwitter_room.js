var firebaseConfig = {
      apiKey: "AIzaSyCJ3TGo5ksftTZ_V00JaaYSHAxOeQFa1IE",
      authDomain: "kwitter1-c806a.firebaseapp.com",
      databaseURL: "https://kwitter1-c806a-default-rtdb.firebaseio.com",
      projectId: "kwitter1-c806a",
      storageBucket: "kwitter1-c806a.appspot.com",
      messagingSenderId: "846023244750",
      appId: "1:846023244750:web:abeda7fe862d5f86e3099f"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   user_name = localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function addRoom(){
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
         purpose : "Ading room name"});
         localStorage.setItem("room_name" , room_name);
         window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room name - " + room_name);
     row = "<div class = 'room_name'id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML +=row;
     //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location = "kwitter.html";
}