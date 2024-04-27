
//works a little too well, because it is imported when the page is loaded,
// coming back from the redirect just loads the login page again

import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithRedirect} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";


const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithRedirect(auth, provider);

getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});