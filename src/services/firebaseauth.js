import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getUser } from './firestore.js';


const getFirebaseProject = function (client) {
    let projectName = "crebitbot";
    switch (client) {
        case 'RR4X':
            projectName = process.env.REACT_APP_FIREBASE_PROJECT_ID_RR4X;
            break;
        case '72Bank':
            projectName = process.env.REACT_APP_FIREBASE_API_KEY_72BANK;
            break;
        default:
            projectName = process.env.REACT_APP_FIREBASE_PROJECT_ID_CREBIT;
            break;
    }
    return projectName;
}


function getFirebaseConfig() {
    let client = getUrlParameter('client');
    let firebaseConfig = {
        'apiKey': process.env.REACT_APP_FIREBASE_API_KEY_CREBIT,
        'authDomain': process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_CREBIT,
        'projectId': process.env.REACT_APP_FIREBASE_PROJECT_ID_CREBIT
    };
    switch (client) {
        case 'RR4X':
            firebaseConfig = {
                'apiKey': process.env.REACT_APP_FIREBASE_API_KEY_RR4X,
                'authDomain': process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_RR4X,
                'projectId': process.env.REACT_APP_FIREBASE_PROJECT_ID_RR4X
            };
            break;
        case '72Bank':
            firebaseConfig = {
                'apiKey': process.env.REACT_APP_FIREBASE_API_KEY_72BANK,
                'authDomain': process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_72BANK,
                'projectId': process.env.REACT_APP_FIREBASE_PROJECT_ID_72BANK
            };
            break;
        default:
            break;
    }
    return firebaseConfig;
}


const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
let currentadmin = null;
let currentuser = null;

const signInWithGoogle = async (client, cpf, setAppMode) => {
    try {
        if (currentadmin == null) {
            const res = await signInWithPopup(auth, googleProvider);
            currentadmin = res.user;
            //console.log(user.uid);
            console.log(currentadmin.displayName);
            if (verificaAdmins(currentadmin.email)) {
                setAppMode('home');
            }
            currentuser = await getUser(db, getFirebaseProject(client), cpf);
            //console.log('user ' + currentuser);
            return currentuser;
        }
    } catch (err) {
        console.error(err);
        //alert(err.message);
    }
};

export {
    auth,
    db,
    currentuser,
    signInWithGoogle,
    //  logout,
    getFirebaseProject
};


function verificaAdmins(useremail) {
    let admins = [
        "alline.oliveira@gmail.com",
        "michellysabatiny@gmail.com",
        "marcusfellipe7@gmail.com",
        "arjan.duarte2017@gmail.com",
        "mserra.araujo@gmail.com",
        "eluiz98@gmail.com",
        "diogo@paxpay.com.br", 
        "luanriquelmedias@gmail.com"];
    if (admins.includes(useremail)) {
        return true;
    } else {
        alert('Não administrador');
    }
    return false;
}



function getUrlParameter(urlParameterName) {
    // tslint:disable-next-line: no-conditional-assignment
    if (urlParameterName = (new RegExp('[?&]' +
        encodeURIComponent(urlParameterName) + '=([^&]*)'))
        .exec(window.location.search)) {
        return decodeURIComponent(urlParameterName[1]);
    }
}



/*
const logout = () => {
    signOut(auth);
};

function AuthLogin(provider) {
        return this.angularFireAuth.signInWithPopup(provider)
          .then((result) => {
            result.user.getIdToken().then((token) => {
              // console.log(token);
              this.token = token;
              if (this.verificaAdmins(result.user.email)) {
                this.navController.navigateRoot('/home');
              }
              return true;
            });
          }).catch((error) => {
            window.alert(error);
          });
      }

function autoLogin() {
    return this.AuthLogin(provider);
} */

/*

function logoutUser() {
    return new Promise((resolve, reject) => {
        if (firebase.auth().currentUser) {
            firebase.auth().signOut()
                .then(() => {
                    //resolve();
                }).catch((error) => {
                    reject();
                });
        }
        this.token = null;
        this.userData = null;
        this.admin = '';
        localStorage.setItem('admin', '');
        console.log('Log out');
        this.navController.navigateRoot('/login');
    });
}
*/