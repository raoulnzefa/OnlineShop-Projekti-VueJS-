import firebase from 'firebase';
import store from './store';
const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyAocTUI-O07-DWCkSRuOtBNWtiemjtv-90",
    databaseURL: "https://onlineshop-2021-default-rtdb.europe-west1.firebasedatabase.app/",
    authDomain: "onlineshop-2021.firebaseapp.com",
    projectId: "onlineshop-2021",
    storageBucket: "onlineshop-2021.appspot.com",
    messagingSenderId: "566655352098",
    appId: "1:566655352098:web:bdfa96145ffe522e57b97b"

};


firebase.initializeApp(config);

firebase.firestore().settings(settings);


firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

// firebase.auth().onAuthStateChanged(product => {
//     store.dispatch("fetchProduct", product);
// });

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

export default firebase;