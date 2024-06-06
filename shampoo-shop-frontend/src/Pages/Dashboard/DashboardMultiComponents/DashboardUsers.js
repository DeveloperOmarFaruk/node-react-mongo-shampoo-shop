import React from "react";
import useFunction from "../../../Hooks/useFunction";

const DashboardUsers = () => {
  const { handleMakeAdmin, setAdminEmail } = useFunction();
  return (
    <>
      <div style={{ padding: "1rem 1.3rem 1rem 0rem", margin: "0px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <h4 style={{ color: "#c033ca" }}>Dashboard Users</h4>

          <button
            type="button"
            className="btn text-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "#c033ca" }}
          >
            Add Admin
          </button>
        </div>
      </div>

      {/* ========================================= */}
      {/* <!-- Add Admin  Modal --> */}
      {/* ========================================= */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
                style={{ color: "#c033ca" }}
              >
                Admin Create Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleMakeAdmin}>
              <div className="modal-body">
                <div className="form-floating mb-4 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email"
                    onChange={(e) => setAdminEmail(e.target.value)}
                    style={{ border: "1px solid #c033ca" }}
                  />
                  <label for="floatingInput">Email</label>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ backgroundColor: "#c033ca" }}
                >
                  Make Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUsers;
