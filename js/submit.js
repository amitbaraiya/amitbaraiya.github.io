var firebaseConfig = {
	apiKey: "AIzaSyDo_dCFl-lgSB9Rwya3LJ55UTJos8e-PH0",
    authDomain: "my-web-site-b9625.firebaseapp.com",
    databaseURL: "https://my-web-site-b9625-default-rtdb.firebaseio.com",
    projectId: "my-web-site-b9625",
    storageBucket: "my-web-site-b9625.appspot.com",
    messagingSenderId: "102395063586",
    appId: "1:102395063586:web:777704926e13c302c6c97b",
    measurementId: "G-DJK6JQ11Y9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log("Sending message");

var messagesRef = firebase.database().ref('messages');

const sendToFirebase = (name,email,subject,message) => {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
        subject: subject,
		message: message
	});
};

const get = (id) => {
	return document.getElementById(id).value;
};

const send = (e) => {
	e.preventDefault();
    console.log("Sending message");

	var name = get('contactName');
	var email = get('contactEmail');
    var subject = get('contactSubject');
	var message = get('contactMessage');

	sendToFirebase(name, email, subject, message);
	window.confirm("Message sent");
    return true;
};

document.getElementById("contactForm").addEventListener("submit", send);