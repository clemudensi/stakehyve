import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDmnJ9MPf2ij481RB95aaWzU129f8BI1ac',
    authDomain: 'earnathon-dev.firebaseapp.com',
    databaseURL: 'https://earnathon-dev.firebaseio.com',
    projectId: 'earnathon-dev',
    storageBucket: 'earnathon-dev.appspot.com',
    messagingSenderId: '291744110058',
    appId: '1:291744110058:web:2abdf7c4da031765'
  };

export default class Firebase {
  constructor() {
    // Initialize Firebase
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();

  }

  doEmailVerify = async (email, history) => {
   try {
     await this.auth.currentUser.sendEmailVerification();
     alert(`verification email has been sent. check ${email} to continue`)
     history.push('/')
   }catch (error) {
     return {
       msg: "email not sent",
       error
     }
   }
    //  .then((res) => {
    //    console.log(res, 'res')
    //   return {
    //     msg: "email is sent",
    //     res
    //   }
    // }).catch((error) => {
    //    console.log(error, 'error')
    //   return {
    //     msg: "email not sent",
    //     error
    //   }
    // })
  };


  //API AUTHENTICATIONS FIREBASE

  doCreateUserWithEmailAndPassword = async (email, password, fname, lname, history) => {
    try{
     await this.auth.createUserWithEmailAndPassword(email, password)
     .then(cred => {
      fb.db.collection('users').doc(cred.user.uid).set({
        firstName: fname,
        lastName: lname,
        email,
        uid: cred.user.uid,
        initials: fname[ 0 ] + lname[ 0 ]
        })
     }).then( () => this.doEmailVerify(email, history))
    }catch(err){
     return err
    }
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doResetEmail = (email) =>
    this.auth.sendPasswordResetEmail(email);

  doResetPassword = (code, password) =>
    this.auth.confirmPasswordReset(code, password);


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

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doSignOut = () => this.auth.signOut();

  getCurrentUser = () => this.auth.currentUser;

//Users API

  getMe = async (uid, callback) => {
    const doc = this.getUserDoc(uid);
    await doc.onSnapshot(doc => {
      const user = doc.data();
      callback({ user })
    })
  };

  getUser = async uid => {
    const doc = this.getUserDoc(uid)
      .collection('privateDate')
      .doc('wallet');
    const res = await doc.get();
    if (res.exists) {
      return res.data();
    }
  };

  getUserDoc = uid => this.db.collection('users').doc(uid);

  getUsers = () => this.db.collection('users');

  getUserCourses = async uid =>
    await this.getUserDoc()
      .collection('courses')
      .get();
    }

export const fb = new Firebase();