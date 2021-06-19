var firebaseConfig = {
    apiKey: "AIzaSyDcQBdGHJQMl1EdHW0JPu24VysPrc3B-KU",
    authDomain: "chatty-cce0e.firebaseapp.com",
    databaseURL: "https://chatty-cce0e-default-rtdb.firebaseio.com",
    projectId: "chatty-cce0e",
    storageBucket: "chatty-cce0e.appspot.com",
    messagingSenderId: "1010954879435",
    appId: "1:1010954879435:web:c93eca3d2c362be762b64e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name, 
            message:msg,
            like: 0
      });
      document.getElementById("message").value = "";
}
function logout(){
      localStorage.removeItem("user_name");
      window.location.replace("chatty-login.html");
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
username = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_tag = "<h4>" + username +"<img class='user_tick' src ='tick.png' ></h4>";
message_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id +"onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like +"</span></button><hr>";
row = name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML = row;

//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("Clicked on Like button-" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_like = Number(likes)+ 1;
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_like
      });
}