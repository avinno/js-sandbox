fetch('data.json', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  // use the json
  console.log(json.result[0].emails[0]);
});

// let test = document.getElementsByTagName("test")[0];

// test.innerHTML = "It worked.";

// Variables
let loginAttempts = 0;

function login() {
// Users Data
const user1 = {firstName:"Aaron", lastName:"Varga", username:"admin", password:"password"};
const user2 = {firstName:"John", lastName:"Doe", username:"john", password:"pass1"};
const user3 = {firstName:"Jane", lastName:"Doe", username:"jane", password:"pass2"};

// DOM Elements
let form = document.querySelector("#form");
let username = document.querySelector("#username").value;
let password = document.querySelector("#password").value;
let loginBtn = document.querySelector("#login-btn");
let welcomeMsg = document.querySelector("#welcome-msg");

let errorMsg = document.querySelector("#error-msg");
let userFirstName = document.querySelector("#user-first-name");

// Login Form Conditionals
if (username == "" && password == "") {
		errorMsg.innerHTML = "Please enter your login credentials before logging in."
  	errorMsg.style.display = "block";
  	loginAttempts++
  	form.reset();
  	event.preventDefault();
} else if (username == "" || password == "") {
  	errorMsg.innerHTML = "Please make sure to enter all required information before logging in."
  	errorMsg.style.display = "block";
  	loginAttempts++
  	form.reset();
  	event.preventDefault();
  } else if (username !== "admin" || password !== "password") {
  	errorMsg.innerHTML = "Wrong username and/or password.";
  	errorMsg.style.display = "block";
  	loginAttempts++
  	form.reset();
  	event.preventDefault();
  } else if (username == user1.username && password == user1.password) {
  	form.style.display = "none";
  	errorMsg.style.display = "none";
  	welcomeMsg.style.display = "block";
  	userFirstName.innerHTML = user1.firstName;
  	form.reset();
  	event.preventDefault();
  }

// Login Attempts Conditionals
  if (loginAttempts >= 5) {
  	// Add conditional to make sure user entered an actual username
  	// Leaving username and password empty three times locks account which is impossible, so do the above to fix
  	errorMsg.innerHTML = "You have attempted to login too many times incorrectly. Your account has been locked.";
  	form.style.display = "none";
  	form.reset();
  }
};