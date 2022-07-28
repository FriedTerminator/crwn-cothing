import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxdoH8YMfJeYTlhcavHwX9gOqEeBHo7-E",
    authDomain: "crwn-clothing-bcba3.firebaseapp.com",
    projectId: "crwn-clothing-bcba3",
    storageBucket: "crwn-clothing-bcba3.appspot.com",
    messagingSenderId: "283903425192",
    appId: "1:283903425192:web:1179ff7e37f277a085e09d"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);