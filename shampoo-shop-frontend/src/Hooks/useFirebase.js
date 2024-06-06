import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  getIdToken,
} from "firebase/auth";
import FirebaseInitilaiz from "../Firebase/FirebaseInitilaiz";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router";
import axios from "axios";

FirebaseInitilaiz();

const useFirebase = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState("");
  const alert = useAlert();
  const auth = getAuth();
  const navigate = useNavigate();
  const URL = `${process.env.REACT_APP_URL}`;

  // ===============================
  // Firebase Register Functionality
  // ===============================
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormRegister = (e) => {
    e.preventDefault();
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        const newUser = { email, displayName: name };
        setUserInfo(newUser);
        saveUserDB(email, name);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        alert.show("Register Successful");
        navigate(`/home`);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        setError(error.message);
      });
    setLoading(true);
  };

  // ============================
  // Save User DB Functionality
  // ============================
  const saveUserDB = async (email, displayName) => {
    const user = { email, displayName };
    const res = await axios.post(`${URL}/users`, user);
    if (res.data.insertedId) {
    }
  };

  // =====================================
  // Firebase Current User Functionality
  // =======================================

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
        getIdToken(user).then((idToken) => {
          setAuthToken(idToken);
        });
      }
      setLoading(false);
    });
  }, [auth]);

  // =====================================
  // Firebase Logout  Functionality
  // =======================================

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserInfo({});
        navigate(`/home`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    formData,
    error,
    userInfo,
    alert,
    auth,
    loading,
    authToken,
    navigate,
    setLoading,
    setError,
    setUserInfo,
    setFormData,
    handleRegisterChange,
    handleFormRegister,
    signInWithEmailAndPassword,
    handleLogout,
  };
};

export default useFirebase;
