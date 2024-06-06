// import React, { createContext } from "react";
// import useFirebase from "../Hooks/useFirebase";
// import useFunction from "../Hooks/useFunction";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const {
//     formData,
//     alert,
//     handlelogin,
//     handleRegisterChange,
//     handleFormRegister,
//     setError,
//     setUserInfo,
//     setFormData,
//   } = useFirebase();
//   //   const { handleRegister } = useFunction();

//   return (
//     <>
//       <AuthContext.Provider
//         value={{
//           formData,
//           alert,
//           handlelogin,
//           setFormData,
//           handleRegisterChange,
//           handleFormRegister,
//           setError,
//           setUserInfo,
//         }}
//       >
//         {children}
//       </AuthContext.Provider>
//     </>
//   );
// };

// export { AuthContext, AuthProvider };
