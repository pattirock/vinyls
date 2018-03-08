import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBlS5-lzkzlhu-4tcptITBf2IlKZY6COPI",
  authDomain: "vinyls-database.firebaseapp.com",
  databaseURL: "https://vinyls-database.firebaseio.com",
  projectId: "vinyls-database",
  storageBucket: "vinyls-database.appspot.com",
  messagingSenderId: "205093749808",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};