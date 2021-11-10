const firebaseConfig = {
    apiKey: "AIzaSyAAxZEP_Pi4civ62bCQ8thtIlai2xcW6zA",
    authDomain: "kwitter-28814.firebaseapp.com",
    databaseURL: "https://kwitter-28814-default-rtdb.firebaseio.com",
    projectId: "kwitter-28814",
    storageBucket: "kwitter-28814.appspot.com",
    messagingSenderId: "700516053813",
    appId: "1:700516053813:web:cca36709f1582d67dfd27c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("roomname-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML = row;

                  //End code
            });
      });
}
getData();

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"AddingRoomName"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html" ; 
}
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);

      window.location = "kwitter_page.html"

}