var firebaseConfig = {
    apiKey: "AIzaSyAAxZEP_Pi4civ62bCQ8thtIlai2xcW6zA",
    authDomain: "kwitter-28814.firebaseapp.com",
    databaseURL: "https://kwitter-28814-default-rtdb.firebaseio.com",
    projectId: "kwitter-28814",
    storageBucket: "kwitter-28814.appspot.com",
    messagingSenderId: "700516053813",
    appId: "1:700516053813:web:cca36709f1582d67dfd27c"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0


});
document.getElementById("msg").value="";
}
function getData(){
firebase.database().ref("/"+room_name).on("value", function(snapshot) {document.getElementById("output").innerHTML=""; snapshot.forEach(function(childSnapshot){childkey=childSnapshot.key; childData=childSnapshot.val(); 
if(childkey!="purpose"){
firebase_message_id=childkey;
message_data=childData;

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

}
});});
}
getData();

function updateLike(message_id){
console.log("ClickedOnLikedButton"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_Likes=Number(likes)+1;
console.log(updated_Likes);
firebase.database().ref(room_name).child(message_id).update({
like:updated_Likes



});



}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html")



}
