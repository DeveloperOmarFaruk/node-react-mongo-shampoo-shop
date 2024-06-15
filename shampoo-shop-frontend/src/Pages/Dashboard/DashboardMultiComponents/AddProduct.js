import React from "react";
import useFunction from "../../../Hooks/useFunction";

const AddProduct = () => {
  const {
    disPrice,
    productImageRef,
    productAddData,
    handleProductDataChange,
    handleProductAdd,
  } = useFunction();

  return (
    <div style={{ padding: "3rem 1.3rem 1rem 0rem", margin: "0px" }}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h4 style={{ color: "#c033ca" }}> Product Add Form</h4>
      </div>

      <div className="row ">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <form onSubmit={handleProductAdd}>
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
                value={productAddData.productCategory}
                onChange={handleProductDataChange}
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
                value={productAddData.productTitle}
                onChange={handleProductDataChange}
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
                value={productAddData.productDescription}
                onChange={handleProductDataChange}
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
                value={productAddData.productPrice}
                onChange={handleProductDataChange}
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
                value={productAddData.productDiscount}
                onChange={handleProductDataChange}
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
                value={disPrice}
                onChange={handleProductDataChange}
                style={{ border: "1px solid #c033ca" }}
                disabled
              />
              <label for="floatingInput">Discount Price</label>
            </div>

            <button
              type="submit"
              className="btn text-white"
              style={{ backgroundColor: "#c033ca" }}
            >
              Submit Product
            </button>
          </form>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
      </div>
    </div>
  );
};

export default AddProduct;
