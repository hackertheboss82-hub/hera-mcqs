importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBU8C7r1hQVSK0NWjL5dW779iBLf8Of5LI",
  authDomain: "hera-mcqs-55022.firebaseapp.com",
  databaseURL: "https://hera-mcqs-55022-default-rtdb.firebaseio.com",
  projectId: "hera-mcqs-55022",
  storageBucket: "hera-mcqs-55022.firebasestorage.app",
  messagingSenderId: "878791404574",
  appId: "1:878791404574:web:042b1cee28c74ef409120f"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message:', payload);
});
