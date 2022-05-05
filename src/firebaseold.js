//import firebase from 'firebase';
//import { initializeApp } from "firebase/app";
//import React from 'react';
//import firestore from "./firestore";


// https://firebase.google.com/docs/firestore/quickstart#node.js


const firebaseConfig = {
    apiKey: "AIzaSyBOirtqREBSorZj55DFEPqnWxbWKaAJ2x4",
    authDomain: "rr4x-b8540.firebaseapp.com",
    projectId: "rr4x-b8540",
    storageBucket: "rr4x-b8540.appspot.com",
    messagingSenderId: "890848064177",
    appId: "1:890848064177:web:7fca39d9723a347cbda890"
  };

let db = null;

function initDB(client) {
    if (db == null) {
        let fileCredentials = './crebitbot-firebase-adminsdk-4qjk4-36da259bb2.json';
        if (client == 'PaxPay') {
            fileCredentials = './paxpay-38072-firebase-adminsdk-wru9t-a213b9e9af.json';
        } else if (client == 'RR4X') {
            fileCredentials = './rr4x-b8540-firebase-adminsdk-uk4w4-baf1388b20.json';
        }

        const config = {
            apiKey: "AIzaSyBOirtqREBSorZj55DFEPqnWxbWKaAJ2x4",
            authDomain: "rr4x-b8540.firebaseapp.com",
            projectId: "rr4x-b8540",
            storageBucket: "rr4x-b8540.appspot.com",
            messagingSenderId: "890848064177",
            appId: "1:890848064177:web:7fca39d9723a347cbda890"
         };
        //let firebaseServiceAccount = require(fileCredentials);
        firebase.initializeApp(config);
        /*firebase.initializeApp({
            credential: firebase.credential.cert(firebaseServiceAccount)
        });*/
        db = firebase.firestore();
        /* db.settings({
             timestampsInSnapshots: true
           });*/
    }
}



exports.queryByPhone = async function (client, phone) {
    initDB(client);
    if (phone != '') {
        const phone2 = phone.substring(2);
        let userdata = null;
        try {
            const queryRef = await db.collection('users')
                .where('telefone', 'in', [phone, phone2])
                .get();
            if (!queryRef.empty) {
                queryRef.forEach((user) => {
                    userdata = user.data();
                    userdata['id'] = user.id;
                });
            }
        } catch (_error) {
            console.log(_error);
        }
        return userdata;
    }
}

exports.queryByCPF = async function (cpf) {
    if (cpf != '') {
        let data = null;
        try {
            const queryRef = await db.collection('users')
                .where('cpf', '=', cpf)
                .get();
            if (!queryRef.empty) {
                queryRef.forEach((user) => {
                    data = user.data();
                    //let id = data.id;
                });
            }
        } catch (_error) {
            console.log(_error);
        }
        return data;
    }
}


exports.save = async function (user) {
    try {
        user['cadastradoEm'] = firebaseadmin.firestore.Timestamp.fromDate(new Date());
        const newUser = await db.collection('users').add(user);
        user['id'] = newUser.id;
        return user;
    } catch (_error) {
        console.log("Erro: " + _error);
    }
}


exports.update = async function (userdata) {
    try {
        const userRegister = await db.collection('users').doc(userdata['id']).set(userdata);
        return userRegister;
    } catch (_error) {
        console.log("Erro Firebase Update: " + _error);
    }
}