import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useFirebase from "./useFirebase";
import { useAlert } from "react-alert";

const useFunction = () => {
  const [isOpen, setIsopen] = useState(true);
  const [adminEmail, setAdminEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const { userInfo, authToken } = useFirebase();
  const alert = useAlert();
  const URL = `${process.env.REACT_APP_URL}`;

  // ==================================================
  // Admin Create Functionality
  // ====================================================
  const handleMakeAdmin = async (e) => {
    e.preventDefault();

    const user = { adminEmail };
    const res = await axios.put(`${URL}/users/admin`, user, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });

    if (res.data.matchedCount > 0) {
      alert.show("Admin Create Successful");
      setAdminEmail(" ");
    }
  };

  // ==================================================
  // Admin Load Functionality
  // ====================================================

  useEffect(() => {
    axios.get(`${URL}/users/${userInfo.email}`).then((res) => {
      setAdmin(res.data.admin);
    });
  }, [userInfo.email]);

  return {
    isOpen,
    admin,
    setIsopen,
    navigate,
    handleMakeAdmin,
    setAdminEmail,
  };
};

export default useFunction;
