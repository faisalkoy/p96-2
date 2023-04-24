// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA0U2NkkUyC0esY2YoxaiNW-S0_C6krF1s",
      authDomain: "lets-chat-web-app-7c721.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-7c721-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-7c721",
      storageBucket: "lets-chat-web-app-7c721.appspot.com",
      messagingSenderId: "931009743896",
      appId: "1:931009743896:web:e421d7c2566089b90a076d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name +" !";
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value ;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
