import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.fieldValue = app.firestore.FieldValue;

    this.auth = app.auth();
    this.db = app.firestore();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doUpdateProfile = profile => this.auth.currentUser.updateProfile(profile);

  //User API

  user = uid => this.db.doc(`users/${uid}`);
  users = () => this.db.collection("users");
  userRole = uid => this.db.doc(`users/${uid}`).data().role;
  userExercises = uid => this.db.collection(`users/${uid}/exercises`);
  userRoutines = uid => this.db.collection(`users/${uid}/routines`);
  userRoutineExercises = (uid, routineId) =>
    this.db.collection(`users/${uid}/routines/${routineId}/exercises`);
}

export default Firebase;
