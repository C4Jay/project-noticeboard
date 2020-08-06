import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDUeV4MTuIOehh3qbBZ_GiIPCwa0LD8y3o",
    authDomain: "choolakejinendra.firebaseapp.com",
    databaseURL: "https://choolakejinendra.firebaseio.com",
};

firebase.initializeApp(config);
export const db = firebase.database();