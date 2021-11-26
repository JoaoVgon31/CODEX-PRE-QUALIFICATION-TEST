import firebase from 'firebase';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { firebaseConfig } = require('./firebasekeys.json');

firebase.initializeApp(firebaseConfig);

export default firebase;
