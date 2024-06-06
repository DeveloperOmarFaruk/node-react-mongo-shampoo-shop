import React from "react";

const useFunction = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Clicked Register Button");
  };
  return {
    handleRegister,
  };
};

export default useFunction;
