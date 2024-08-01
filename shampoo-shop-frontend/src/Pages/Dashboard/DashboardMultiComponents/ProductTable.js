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

const ProductTable = () => {
  const {
    products,
    product,
    productImageRef,
    productUpdateData,
    updateDisPrice,
    handleProductView,
    handleProductDelete,
    handleProductUpdateChange,
    handleProductUpdate,
  } = useFunction();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

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
              <th scope="col"> Title</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Discount Price</th>
              <th scope="col">Discount</th>
              <th scope="col">Image</th>
              <th scope="col">Details</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {(rowsPerPage > 0
              ? products.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : products
            ).map((item, index) => (
              <tr key={item._id}>
                <td data-label="S.No.">{index + 1}</td>
                <td data-label="Title">{item.productTitle}</td>
                <td data-label="Category">{item.productCategory}</td>
                <td data-label="Price">$ {item.productPrice}</td>
                <td data-label="Discount Price">
                  {" "}
                  $
                  {item.productDiscountPrice == ""
                    ? 0
                    : item.productDiscountPrice}{" "}
                </td>
                <td data-label="Discount">
                  {item.productDiscount == "" ? 0 : item.productDiscount} %
                </td>
                <td data-label="Image">
                  <img
                    src={item.productImage}
                    alt="product_image"
                    style={{ width: "60px", height: "60px" }}
                  />
                </td>
                <td data-label="Details">
                  <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => handleProductView(item._id)}
                  >
                    View
                  </button>
                </td>

                <td data-label="Action">
                  <div className="d-flex  align-items-center justify-content-center fs-5">
                    <div
                      style={{
                        cursor: "pointer",
                        margin: "10px",
                        color: "green",
                      }}
                    >
                      <i
                        className="fa-solid fa-pen-to-square"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop1"
                        onClick={() => handleProductView(item._id)}
                      ></i>
                    </div>
                    <div
                      style={{
                        cursor: "pointer",
                        margin: "10px",
                        color: "red",
                      }}
                    >
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => handleProductDelete(item._id)}
                      ></i>
                    </div>
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
              count={products.length}
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
      {/* =========== Product View Modal =============== */}
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
                Product Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <img
                  src={product.productImage}
                  alt="product_image"
                  style={{ width: "50%", height: "200px" }}
                />
              </div>

              <div
                className="row mt-4 mb-4 pb-2"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-6">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>Title: </p>
                </div>
                <div className="col-6">
                  <p>{product.productTitle}</p>
                </div>
              </div>

              <div
                className="row mt-4 mb-4 pb-2"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-6">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>
                    Descripion:{" "}
                  </p>
                </div>
                <div className="col-6">
                  <p>{product.productDescription}</p>
                </div>
              </div>

              <div
                className="row mt-4 mb-4 pb-2"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-6">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>
                    Category:{" "}
                  </p>
                </div>
                <div className="col-6">
                  <p>{product.productCategory}</p>
                </div>
              </div>

              <div
                className="row mt-4 mb-4 pb-2"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-6">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>Price: </p>
                </div>
                <div className="col-6">
                  <p>$ {product.productPrice}</p>
                </div>
              </div>

              <div
                className="row mt-4 mb-4 pb-2"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-6">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>
                    Discount Price:{" "}
                  </p>
                </div>
                <div className="col-6">
                  <p>$ {product.productDiscountPrice}</p>
                </div>
              </div>

              <div
                className="row mt-4 mb-4 pb-2"
                style={{ borderBottom: "1px solid #c033ca" }}
              >
                <div className="col-6">
                  <p style={{ color: "#c033ca", fontWeight: "500" }}>
                    Discount:{" "}
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    {product.productDiscount == ""
                      ? 0
                      : product.productDiscount}{" "}
                    %
                  </p>
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

      {/* ============================================== */}
      {/* =========== Product Update Modal =============== */}
      {/* ============================================== */}

      <div
        className="modal fade"
        id="staticBackdrop1"
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
                Product Update Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleProductUpdate}>
              <div className="modal-body">
                <div className="form-floating mb-4 mt-3">
                  <input
                    type="file"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Upload Image"
                    ref={productImageRef}
                    required
                    style={{ border: "1px solid #c033ca" }}
                  />
                  <label for="floatingInput">Upload Image</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <select
                    className="form-select"
                    id="floatingSelectGrid"
                    name="productCategory"
                    value={
                      productUpdateData.productCategory ||
                      product.productCategory
                    }
                    onChange={handleProductUpdateChange}
                    required
                    style={{ border: "1px solid #c033ca" }}
                  >
                    <option selected>Select Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Baby">Baby</option>
                  </select>
                  <label for="floatingSelectGrid">Category</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Title"
                    name="productTitle"
                    value={
                      productUpdateData.productTitle || product.productTitle
                    }
                    onChange={handleProductUpdateChange}
                    required
                    style={{ border: "1px solid #c033ca" }}
                  />
                  <label for="floatingInput">Title</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    id="floatingTextarea2"
                    name="productDescription"
                    value={
                      productUpdateData.productDescription ||
                      product.productDescription
                    }
                    onChange={handleProductUpdateChange}
                    required
                    style={{ height: "100px", border: "1px solid #c033ca" }}
                  ></textarea>
                  <label for="floatingTextarea2">Description</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Price"
                    name="productPrice"
                    value={
                      productUpdateData.productPrice || product.productPrice
                    }
                    onChange={handleProductUpdateChange}
                    required
                    style={{ border: "1px solid #c033ca" }}
                  />
                  <label for="floatingInput">Price</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Discount %"
                    name="productDiscount"
                    value={
                      productUpdateData.productDiscount ||
                      product.productDiscount
                    }
                    onChange={handleProductUpdateChange}
                    style={{ border: "1px solid #c033ca" }}
                  />
                  <label for="floatingInput">Discount %</label>
                </div>

                <div className="form-floating mb-4 mt-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Discount Price"
                    name="productDiscountPrice"
                    value={
                      productUpdateData.productDiscountPrice ||
                      updateDisPrice ||
                      product.productDiscountPrice
                    }
                    onChange={handleProductUpdateChange}
                    style={{ border: "1px solid #c033ca" }}
                    // disabled
                  />
                  <label for="floatingInput">Discount Price</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn text-white"
                  style={{ backgroundColor: "#c033ca" }}
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
