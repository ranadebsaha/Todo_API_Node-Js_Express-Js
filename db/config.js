const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo-list');



// const firebase=require("firebase");

// const firebaseConfig = {
//   apiKey: "AIzaSyB5A4ifzSJh10K2hGu52109K18VNw0wZEk",
//   authDomain: "test-2e11a.firebaseapp.com",
//   projectId: "test-2e11a",
//   storageBucket: "test-2e11a.firebasestorage.app",
//   messagingSenderId: "949110696337",
//   appId: "1:949110696337:web:8a9dfe2572bdfedd129230",
//   measurementId: "G-B62GL8VW9W"
// };


// const app = firebase.initializeApp(firebaseConfig);
// const db=firebase.firestore();
// const todos=db.collection("task");

// module.exports= todos;