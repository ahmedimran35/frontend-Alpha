import { failedFireAlert, successFireAlert } from "../components/Alert/fireAlert";

/**
 * A function to sign up/in with google using firebase
 * @param {firebase function} googleSignIn 
//  * @param {object} Toast 
 */
export function signSn(googleSignIn) {
  googleSignIn()
    .then(() => {
      window.history.back();
      successFireAlert("Signed in successfully");
    })
    .catch(() => {
      failedFireAlert("Signed in failed!");
    });
}
