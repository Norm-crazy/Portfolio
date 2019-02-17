$(document).ready(function() {

  $("#htmlBtn").click(function() {
    $(".js").fadeOut();
    if ($('.html').css('display') == 'none') {
      $('.html').fadeIn(1000);
    }
  });

  $("#jsBtn").click(function() {
    $(".html").fadeOut();
    if ($('.js').css('display') == 'none') {
      $('.js').fadeIn(1000);
    }
  });

  $("#allbtn").click(function() {
    $('.js').fadeIn(1000);
    $('.html').fadeIn(1000);
  });
});

// Firebace Contact
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlGe_6YZw1VtNP8xI9jLwYR4vN_It3pzs",
    authDomain: "contactform-93882.firebaseapp.com",
    databaseURL: "https://contactform-93882.firebaseio.com",
    projectId: "contactform-93882",
    storageBucket: "contactform-93882.appspot.com",
    messagingSenderId: "37043083971"
  };
  firebase.initializeApp(config);

  // Messages collection
  var messageRef = firebase.database().ref('messages');

// listen for Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save and show alert
  saveMessage(name, email, message);
  document.querySelector('.alert').style.display = 'block';

  // Hide alert
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// function to get vaule
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  })
}
