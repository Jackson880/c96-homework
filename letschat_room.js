
var firebaseConfig = {
      apiKey: "AIzaSyBAgf6ezVVaq1UEZrZlKLKoZ03lwgOxMhQ",
      authDomain: "jacksonkwitter-514bc.firebaseapp.com",
      databaseURL: "https://jacksonkwitter-514bc-default-rtdb.firebaseio.com",
      projectId: "jacksonkwitter-514bc",
      storageBucket: "jacksonkwitter-514bc.appspot.com",
      messagingSenderId: "315554058311",
      appId: "1:315554058311:web:2a4a355e8a7baa9e2fa162"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 function addRoom()
 {
 room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"      
      });

      localStorage.setItem("room_name", room_name);

      window.location = "letschat_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}