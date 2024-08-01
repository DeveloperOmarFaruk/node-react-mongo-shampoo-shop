import React from "react";
import useFunction from "../../Hooks/useFunction";
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

const MyOrderTable = () => {
  const { orders } = useFunction();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th scope="col"> S.No.</th>
            <th scope="col"> Title</th>
            <th scope="col">Category</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Pay</th>
            <th scope="col">Delivery</th>
            <th scope="col">Image</th>
          </tr>
        </thead>

        <tbody>
          {(rowsPerPage > 0
            ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : orders
          ).map((item, index) => (
            <tr key={item._id}>
              <td data-label="S.No.">{index + 1}</td>
              <td data-label="Title">
                {item.orderProducts.map((product) => (
                  <p key={product._id}>{product.productTitle}</p>
                ))}
              </td>
              <td data-label="Category">
                {item.orderProducts.map((product) => (
                  <p key={product._id}>{product.productCategory}</p>
                ))}
              </td>
              <td data-label="Quantity">
                {" "}
                {item.orderProducts.map((product) => (
                  <p key={product._id}>{product.productQuantity} pis</p>
                ))}{" "}
              </td>
              <td data-label="Total Pay">$ {item.totalPay}</td>
              <td data-label="Delivery">$ {item.deliveryCharge}</td>
              <td data-label="Image">
                {item.orderProducts.map((product) => (
                  <img
                    key={product._id}
                    src={product.productImage}
                    alt="product_image"
                    style={{
                      margin: "10px",
                      width: "60px",
                      heigh: "60px",
                      borderRadius: "10px",
                    }}
                  />
                ))}
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
            count={orders.length}
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
    </>
  );
};

export default MyOrderTable;
