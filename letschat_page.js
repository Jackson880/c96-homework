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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
        });
        document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
