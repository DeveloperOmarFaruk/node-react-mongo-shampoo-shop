import React from "react";
import "../../Components/MultipleComponents/MultipleComponents.css";
import useFirebase from "../../Hooks/useFirebase";
import { useLocation } from "react-router";

const Login = () => {
  const {
    navigate,
    alert,
    auth,
    userInfo,
    handleRegisterChange,
    formData,
    setUserInfo,
    setError,
    signInWithEmailAndPassword,
    setFormData,
    setLoading,
  } = useFirebase();

  const location = useLocation();
  const windowScroll = () => {
    window.scrollTo(0, 0);
    navigate(location?.state ? location.state : "/home");
  };

  // ===============================
  // Firebase Login Functionality
  // ===============================

  const handleLogin = (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user);
        alert.show("Login Successful");
        setFormData({
          email: "",
          password: "",
        });
        windowScroll();
      })
      .catch((error) => {
        setError(error.message);
      });

    setLoading(true);
  };

  return (
    <>
      <div style={{ padding: "12rem 0rem 8rem 0rem" }}>
        <div className="section">
          <div className="row gx-5 gy-5 flex-wrap-reverse row-edit">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div>
                <h1
                  className="text-center"
                  style={{ color: "#c033ca", marginBottom: "3rem" }}
                >
                  Login Form
                </h1>
                <form onSubmit={handleLogin}>
                  <div className="form-floating mb-4 mt-4">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleRegisterChange}
                      style={{ border: "1px solid #c033ca" }}
                    />
                    <label for="floatingInput">Email</label>
                  </div>

                  <div className="form-floating mb-4 mt-4">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleRegisterChange}
                      style={{ border: "1px solid #c033ca" }}
                    />
                    <label for="floatingInput">Password</label>
                  </div>

                  <button type="submit" className="common-button">
                    Login
                  </button>
                </form>

                <div className="text-center mt-4 mb-2">
                  <p>
                    Not a member?{" "}
                    <span
                      style={{ color: "#c033ca", cursor: "pointer" }}
                      onClick={() => navigate(`/register`)}
                    >
                      Register Now
                    </span>
                  </p>
                </div>
                {/* <div className="text-center  mb-2">
                  <p>Or</p>
                </div>
                <div className="text-center  mb-4">
                  <button type="submit" className="common-button">
                    <i className="fa-brands fa-google-plus-g"></i> Google
                  </button>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/online-sign-up-flat-female-character-vector_258190-1445.jpg?w=740"
                  alt="login_image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
