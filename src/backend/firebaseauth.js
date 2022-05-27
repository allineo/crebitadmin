import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getUser } from './firestore.js';


const getFirebaseProject = function (client) {
    let projectName = "crebitbot";
    switch (client) {
        case 'RR4X':
            projectName = "rr4x-b8540";
            break;
        case '72Bank':
            projectName = "bank-ff5c7";
            break;
        default:
            projectName = "crebitbot";
            break;
    }
    return projectName;
}


function getFirebaseConfig() {

    let client = getUrlParameter('client');

    let firebaseConfig = {
        "apiKey": "AIzaSyDjjlPT9eNsBfSU3elUEG3Ma8mNqrQovPw",
        "authDomain": "crebitbot.firebaseapp.com",
        "projectId": "crebitbot",
        "storageBucket": "crebitbot.appspot.com",
        "messagingSenderId": "831018541149",
        "appId": "1:831018541149:web:808a236e4a47949b6cedb4"
    };
    switch (client) {
        case 'RR4X':
            firebaseConfig = {
                "apiKey": "AIzaSyBOirtqREBSorZj55DFEPqnWxbWKaAJ2x4",
                "authDomain": "rr4x-b8540.firebaseapp.com",
                "projectId": "rr4x-b8540",
                "storageBucket": "rr4x-b8540.appspot.com",
                "messagingSenderId": "890848064177",
                "appId": "1:890848064177:web:7fca39d9723a347cbda890"
            };
            break;
        case '72Bank':
            firebaseConfig = {
                "apiKey": "AIzaSyAWQFDESFwCD1WgC84_L25py_vn1-DhrNc",
                "authDomain": "bank-ff5c7.firebaseapp.com",
                "projectId": "bank-ff5c7",
                "storageBucket": "bank-ff5c7.appspot.com",
                "messagingSenderId": "464807858968",
                "appId": "1:464807858968:web:774b10250517f44051046d"
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

const signInWithGoogle = async (client, cpf, setAppMode) => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        //console.log(user.uid);
        console.log(user.displayName);
        if (verificaAdmins(user.email)) {
            setAppMode('home');
        }

        let usuarioid = getUser(db, getFirebaseProject(client), cpf);
        //console.log('userid ' + userid);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export {
    auth,
    db,
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
        "diogo@paxpay.com.br"];
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