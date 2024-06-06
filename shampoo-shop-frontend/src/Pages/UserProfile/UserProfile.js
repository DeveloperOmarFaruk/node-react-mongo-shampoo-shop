import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const UserProfile = () => {
  const { userInfo } = useFirebase();

  return (
    <>
      <div style={{ padding: "15rem 0rem" }}>
        <div className="section">
          <div className="row gx-5 gy-5">
            <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12"></div>
            <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12">
              <div className="text-center">
                <h3 style={{ color: "#c033ca" }}>{userInfo.displayName}</h3>
                <p>{userInfo.email}</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
