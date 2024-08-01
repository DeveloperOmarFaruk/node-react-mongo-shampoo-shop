import React from "react";
import "../Dashboard.css";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import useFunction from "../../../Hooks/useFunction";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const ContactTable = () => {
  const { contacts, contact, handleViewContact, handleDeleteContact } =
    useFunction();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - contacts.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div style={{ margin: "4rem 0rem" }}>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th scope="col"> S.No.</th>
              <th scope="col"> Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Details</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {(rowsPerPage > 0
              ? contacts.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : contacts
            ).map((item, index) => (
              <tr key={item._id}>
                <td data-label="S.No.">{index + 1}</td>
                <td data-label="Email">{item.contactEmail}</td>
                <td data-label="Subject">{item.contactSubject}</td>
                <td data-label="Details">
                  <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => handleViewContact(item._id)}
                  >
                    View
                  </button>
                </td>

                <td data-label="Action">
                  <div
                    style={{
                      cursor: "pointer",
                      margin: "10px",
                      color: "red",
                    }}
                  >
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => handleDeleteContact(item._id)}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell />
          </TableRow>
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              // colSpan={8}
              count={contacts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "Rows Per Page",
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              style={{
                backgroundColor: "white",
                border: "none",
              }}
            />
          </TableRow>
        </TableFooter>
      </div>

      {/* ============================================== */}
      {/* =========== Order View Modal =============== */}
      {/* ============================================== */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="staticBackdropLabel"
                style={{ color: "#c033ca" }}
              >
                Contact Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                className="row mt-4 mb-4 pb-2 align-items-center"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-5">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>Email: </p>
                </div>
                <div className="col-7">
                  <p>{contact.contactEmail}</p>
                </div>
              </div>

              <div
                className="row mt-4 mb-4 pb-2 align-items-center"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-5">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>
                    Subject:{" "}
                  </p>
                </div>
                <div className="col-7">
                  <p>{contact.contactSubject}</p>
                </div>
              </div>

              <div
                className="row mt-4 mb-4 pb-2 align-items-center"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-5">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>
                    Message:{" "}
                  </p>
                </div>
                <div className="col-7">
                  <p>{contact.contactMessage}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn text-white"
                style={{ backgroundColor: "#c033ca" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTable;
