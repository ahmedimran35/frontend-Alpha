import PropTypes from "prop-types";
import { createContext, memo, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Cookies from "js-cookie";
export const AuthContext = createContext(null);

const AuthProviders = memo(function AuthProvidersComponent({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const userEmail = currentUser?.email || user?.email;
      const name = currentUser?.displayName || user?.displayName;
      const payload = { email: userEmail, name };

      if (currentUser !== null) {
        axiosSecure.post("/auth/access-token", payload).then(() => {});
        Cookies.set("email", userEmail);
      } else {
        axiosSecure.get("/auth/clear-token").then(() => {});
      }
    });
    return () => {
      return unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosSecure]);

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    googleSignIn,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
});

AuthProviders.propTypes = {
  children: PropTypes.object,
};

export default AuthProviders;
