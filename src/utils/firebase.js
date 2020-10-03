import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmnJ9MPf2ij481RB95aaWzU129f8BI1ac",
    authDomain: "earnathon-dev.firebaseapp.com",
    databaseURL: "https://earnathon-dev.firebaseio.com",
    projectId: "earnathon-dev",
    storageBucket: "earnathon-dev.appspot.com",
    messagingSenderId: "291744110058",
    appId: "1:291744110058:web:2abdf7c4da031765"
  };

  export default class Firebase {
    constructor() {
      // Initialize Firebase
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
      this.db = app.firestore();
   
    }

//API AUTHENTICATIONS FIREBASE

doCreateUserWithEmailAndPassword = async (email, password, fname, lname) => {
  try{
     await this.auth.createUserWithEmailAndPassword(email, password)
     .then(cred => {
      fb.db.collection('users').doc(cred.user.uid).set({
          firstName: fname,
          lastName: lname,
          email,
          uid: cred.user.uid,
          initials: fname[0] + lname[0]
        })
     }).then( async() => {
       await this.doEmailVerify()
     })
  }catch(e){
   console.log(e)
  }
}


doSignInWithEmailAndPassword = (email, password) =>{
this.auth.signInWithEmailAndPassword(email, password);
};

// doEmailVerify = async () => {
// //  const user = await this.getcurrentUser();
 
// this.auth.sendEmailVerification().then(() => {
//   console.log("email is sent")
// }).catch((error) => {
//   console.log("email not sent", error)
// })
// };

doEmailVerify = () => {
  try{ 
    const mail = this.auth.currentUser.sendEmailVerification()
    console.log(window.location.origin)
    return mail
  }catch(e){
    console.log(e)
  }
}

onAuthUserListener = (next, fallback) =>
this.auth.onAuthStateChanged(async user => {
  try {
    if (this.auth.currentUser) {
      const user = await this.getUser(this.auth.currentUser.uid);
      if (user) {
        if (next) {
          console.log('next1');
          return next(user);
        }
      }
    }
  } catch (error) {
    if (fallback) {
      console.log('fallback1', error);
      return fallback();
    }
  }
  if (fallback) {
    console.log('fallback2');
    return fallback();
  }
});


doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);


doSignOut = () => this.auth.signOut();

getcurrentUser = () => this.auth().currentUser;

//Users API

getMe = async (uid, callback) => {
  const doc = this.getUserDoc(uid);
  const unsubscribe = await doc.onSnapshot(doc => {
    const user = doc.data()
    callback({user})
  });
  return unsubscribe
};

getUser = async uid => {
  const doc = this.getUserDoc(uid)
    .collection('privateDate')
    .doc('wallet');
  const res = await doc.get();
  if (res.exists) {
    return res.data();
  }
  return;
};

getUserDoc = uid => this.db.collection('users').doc(uid);
getUsers = () => this.db.collection('users');

getUserCourses = async uid =>
    await this.getUserDoc()
      .collection('courses')
      .get();


  }

  export const fb = new Firebase();