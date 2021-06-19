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

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";


function logout(){
    window.location = "teacher-logout.html";
}


function add_room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    })
    localStorage.setItem("room_name", room_name);
    window.location = "teacher-page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
console.log("Room Name:" + Room_names);
row = "<div class='room_name' id= "+ Room_names +"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;

//End code
});});}
getData();


function redirectToRoomName(name){
localStorage.setItem("room_name",name);
console.log(name);
window.location = "teacher-page.html";
}
