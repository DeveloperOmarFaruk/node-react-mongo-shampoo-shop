import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import useFirebase from "./useFirebase";
import { useAlert } from "react-alert";
import { loadStripe } from "@stripe/stripe-js";

const useFunction = () => {
  const [isOpen, setIsopen] = useState(true);
  const [adminEmail, setAdminEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [productAddData, setProductAddData] = useState({
    productCategory: "",
    productTitle: "",
    productDescription: "",
    productPrice: "",
    productDiscount: "",
    productDiscountPrice: "",
  });
  const [productUpdateData, setProductUpdateData] = useState({
    productCategory: "",
    productTitle: "",
    productDescription: "",
    productPrice: "",
    productDiscount: "",
    productDiscountPrice: "",
  });
  const [shippingData, setShippingData] = useState({
    phone: "",
    address: "",
  });
  const [contactData, setContactData] = useState({
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
  });

  const productImageRef = useRef();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [productIncriDecri, setProductIncriDecri] = useState(1);
  const [productTotalAmount, setProductTotalAmount] = useState(0);
  const [temporaryOrders, setTemporaryOrders] = useState([]);
  const [orders, setOrders] = useState([]);
  const [ordersAdmin, setOrdersAdmin] = useState([]);
  const [orderAdmin, setOrderAdmin] = useState({});
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userInfo, authToken } = useFirebase();
  const alert = useAlert();
  const URL = `${process.env.REACT_APP_URL}`;
  const ImageHostURL = `${process.env.REACT_APP_IMAGE_URL}?key=${process.env.REACT_APP_IMAGE_KEY}`;

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
    axios
      .get(`${URL}/users/${userInfo.email}`)
      .then((res) => {
        setAdmin(res.data.admin);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userInfo.email]);

  // ==================================================
  // Product Add Functionality
  // ====================================================
  const handleProductDataChange = (e) => {
    const { name, value } = e.target;
    setProductAddData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const price = productAddData.productPrice;
  const per = productAddData.productDiscount;
  let disPrice;
  if (per === "") {
    disPrice = 0;
  } else if (per == 0) {
    disPrice = 0;
  } else {
    // const result = parseFloat((per / 100) * price).toFixed(2);
    const result = Math.round((per / 100) * price).toFixed(2);
    disPrice = price - result;
  }

  const handleProductAdd = async (e) => {
    e.preventDefault();
    const productImageFile = productImageRef.current.files[0];
    const formData = new FormData();
    formData.append("image", productImageFile);

    const res = await axios.post(ImageHostURL, formData);

    if (res.data.success) {
      const addProductData = {
        productImage: res.data.data.display_url,
        productCategory: productAddData.productCategory,
        productTitle: productAddData.productTitle,
        productDescription: productAddData.productDescription,
        productPrice: productAddData.productPrice,
        productDiscount: productAddData.productDiscount,
        productDiscountPrice: disPrice,
      };

      const productRes = await axios.post(`${URL}/products`, addProductData);

      if (productRes.data.insertedId) {
        alert.show("Product Add Successful");
        navigate(`/dashboard/products`);
        setProductAddData({
          productCategory: "",
          productTitle: "",
          productDescription: "",
          productPrice: "",
          productDiscount: "",
          productDiscountPrice: "",
        });
      }
    }
  };

  // ==================================================
  // Products Load Functionality
  // ====================================================

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${URL}/products`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, [URL]);

  // ==================================================
  // Product ID Load Functionality
  // ==================================================

  const handleProductView = async (id) => {
    const res = await axios.get(`${URL}/products/${id}`);
    if (res.data) {
      setProduct(res.data);
    }
  };

  // ==================================================
  // Product Delete Functionality
  // ==================================================

  const handleProductDelete = async (id) => {
    const res = await axios.delete(`${URL}/products/${id}`);
    if (res.data.deletedCount > 0) {
      alert.show("Product Delete Successful");
      const remainingData = products.filter((item) => item._id !== id);
      setProducts(remainingData);
    }
  };

  // ==================================================
  // Product Update Functionality
  // ==================================================

  const handleProductUpdateChange = (e) => {
    const { name, value } = e.target;
    setProductUpdateData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const updatePrice = productUpdateData.productPrice;
  const updatePer = productUpdateData.productDiscount;

  // const result = parseFloat((updatePer / 100) * updatePrice).toFixed(2);
  const result = Math.round((updatePer / 100) * updatePrice).toFixed(2);
  const updateDisPrice = updatePrice - result;

  const handleProductUpdate = async (e) => {
    e.preventDefault();
    const productImageFile = productImageRef.current.files[0];
    const formData = new FormData();
    formData.append("image", productImageFile);

    const res = await axios.post(ImageHostURL, formData);

    if (res.data.success) {
      const updateProductData = {
        productImage: res.data.data.display_url,
        productCategory:
          productUpdateData.productCategory || product.productCategory,
        productTitle: productUpdateData.productTitle || product.productTitle,
        productDescription:
          productUpdateData.productDescription || product.productDescription,
        productPrice: productUpdateData.productPrice || product.productPrice,
        productDiscount:
          productUpdateData.productDiscount || product.productDiscount,
        productDiscountPrice: updateDisPrice,
      };

      const productRes = await axios.put(
        `${URL}/products/${product._id}`,
        updateProductData
      );

      if (productRes.data.insertedId) {
        alert.show("Product Update Successful");
        setProductUpdateData({
          productCategory: "",
          productTitle: "",
          productDescription: "",
          productPrice: "",
          productDiscount: "",
          productDiscountPrice: "",
        });
      }
    }
  };

  // ==================================================
  // Product Purchase Functionality
  // ==================================================

  const handleProductIncriment = () => {
    if (productIncriDecri <= 3) {
      const productNumber = productIncriDecri + 1;
      if (product.productDiscountPrice) {
        const totalAmount = product.productDiscountPrice * productNumber;
        setProductTotalAmount(totalAmount);
      } else {
        const totalAmount = product.productPrice * productNumber;
        setProductTotalAmount(totalAmount);
      }
      setProductIncriDecri(productNumber);
    }
  };

  const handleProductDecriment = () => {
    if (productIncriDecri > 1) {
      const productNumber = productIncriDecri - 1;
      if (product.productDiscountPrice) {
        const totalAmount = product.productDiscountPrice * productNumber;
        setProductTotalAmount(totalAmount);
      } else {
        const totalAmount = product.productPrice * productNumber;
        setProductTotalAmount(totalAmount);
      }
      setProductIncriDecri(productNumber);
    }
  };

  // ==================================================
  // Product Temporary Order Confirm Functionality
  // ==================================================
  const handleConfirmOrder = async () => {
    let productAmount;
    if (productTotalAmount === 0) {
      if (product.productDiscountPrice) {
        productAmount = product.productDiscountPrice;
      } else {
        productAmount = product.productPrice;
      }
    } else {
      productAmount = productTotalAmount;
    }

    const temporaryProductAdd = {
      productImage: product.productImage,
      productCategory: product.productCategory,
      productTitle: product.productTitle,
      productDescription: product.productDescription,
      productPrice: product.productPrice,
      productDiscount: product.productDiscount,
      productDiscountPrice: product.productDiscountPrice,
      productQuantity: productIncriDecri,
      productTotalAmount: productAmount,
      email: userInfo.email,
    };

    const res = await axios.post(`${URL}/temporaryOrder`, temporaryProductAdd);
    if (res.data.insertedId) {
      alert.show("Product Added in your cart");
      navigate(`/cart`);
    }
  };

  // ====================================================
  // Temporary Order Load Functionality
  // ====================================================

  useEffect(() => {
    axios
      .get(`${URL}/temporaryOrder?email=${userInfo.email}`, {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        setTemporaryOrders(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [URL, userInfo.email, authToken]);

  // ====================================================
  // Temporary Order Delete Functionality
  // ====================================================
  const handleTemporaryOrderDelete = async (id) => {
    const res = await axios.delete(`${URL}/temporaryOrder/${id}`);
    if (res.data.deletedCount > 0) {
      alert.show("Product Cancle Successful");
      const remainingData = temporaryOrders.filter((item) => item._id !== id);
      setTemporaryOrders(remainingData);
    }
  };

  // ====================================================
  // Temporary Order Summary Functionality
  // ====================================================
  const itemTotal = temporaryOrders.reduce(
    (acc, curr) => acc + parseInt(curr.productTotalAmount),
    0
  );

  const quantityTotal = temporaryOrders.reduce(
    (acc, curr) => acc + curr.productQuantity,
    0
  );

  let deliveryCharge;
  if (quantityTotal === 0) {
    deliveryCharge = 0;
  } else if (quantityTotal <= 2) {
    deliveryCharge = 10;
  } else if (quantityTotal <= 9) {
    deliveryCharge = 8;
  } else {
    deliveryCharge = 0;
  }

  const totalPay = itemTotal + deliveryCharge;

  // ====================================================
  // Shipping Information and Checkout Functionality
  // ====================================================

  const handleShippingDataChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCheckoutStripe = async (e) => {
    e.preventDefault();

    const shippingAddData = {
      name: userInfo.displayName,
      email: userInfo.email,
      phone: shippingData.phone,
      address: shippingData.address,
      orderProducts: temporaryOrders,
      itemTotal: itemTotal,
      deliveryCharge: deliveryCharge,
      totalPay: totalPay,
      quantityTotal: quantityTotal,
    };

    if (shippingAddData.orderProducts.length > 0) {
      axios.post(`${URL}/orders`, shippingAddData);
    }

    const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
    const stripeData = {
      orderProducts: temporaryOrders,
      totalPay: totalPay,
      email: userInfo.email,
    };

    const res = await axios.post(`${URL}/create-checkout-session`, stripeData);
    const session = await res.data;
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  // ====================================================
  // All Temporary Order Delete Functionality
  // ====================================================

  const handleAllTempOrderDelete = async () => {
    const res = await axios.delete(
      `${URL}/temporaryOrder?email=${userInfo.email}`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    );
    if (res.data.deletedCount > 0) {
      console.log("all temp order deleted");
    }
  };

  const successPath = window.location.pathname;

  if (successPath === "/success") {
    handleAllTempOrderDelete();
  }

  // ====================================================
  //  Order Load Functionality
  // ====================================================

  useEffect(() => {
    axios
      .get(`${URL}/orders?email=${userInfo.email}`, {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [URL, userInfo.email, authToken]);

  // ====================================================
  //  Orders Admin Load Functionality
  // ====================================================

  useEffect(() => {
    axios
      .get(`${URL}/order/admin`)
      .then((res) => {
        setOrdersAdmin(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [URL]);

  // ====================================================
  //  Users Load Functionality
  // ====================================================

  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [URL]);

  // ====================================================
  //  Users Order Details Load Functionality
  // ====================================================

  const handleOrderAdminView = async (id) => {
    const res = await axios.get(`${URL}/order/admin/${id}`);
    if (res.data) {
      setOrderAdmin(res.data);
    }
  };

  // =========================================
  // Dashboard Contact Add Functionality
  // ===========================================

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const contactAddData = {
      contactEmail: contactData.contactEmail,
      contactSubject: contactData.contactSubject,
      contactMessage: contactData.contactMessage,
    };

    const res = await axios.post(`${URL}/contactUs`, contactAddData);

    if (res.data.insertedId) {
      alert.show("Submit Successful");
      setContactData({
        contactEmail: "",
        contactSubject: "",
        contactMessage: "",
      });
    }
  };

  // =========================================
  // Dashboard Contact Load Functionality
  // ===========================================
  useEffect(() => {
    axios.get(`${URL}/contactUs`).then((res) => {
      setContacts(res.data);
    });
  }, [URL]);

  // =========================================
  // Dashboard Contact View Load Functionality
  // ===========================================
  const handleViewContact = async (id) => {
    const res = await axios.get(`${URL}/contactUs/${id}`);
    setContact(res.data);
  };

  // =========================================
  // Dashboard Contact Delete Functionality
  // ===========================================
  const handleDeleteContact = async (id) => {
    const res = await axios.delete(`${URL}/contactUs/${id}`);
    if (res.data.deletedCount > 0) {
      alert.show("Contact Delete Successful");
      const remainingData = contacts.filter((item) => item._id !== id);
      setContacts(remainingData);
    }
  };

  return {
    URL,
    isOpen,
    admin,
    productAddData,
    disPrice,
    productImageRef,
    products,
    loading,
    product,
    productUpdateData,
    updateDisPrice,
    productIncriDecri,
    productTotalAmount,
    temporaryOrders,
    itemTotal,
    deliveryCharge,
    totalPay,
    shippingData,
    quantityTotal,
    orders,
    users,
    ordersAdmin,
    orderAdmin,
    contactData,
    contact,
    contacts,
    setIsopen,
    navigate,
    handleMakeAdmin,
    setAdminEmail,
    handleProductDataChange,
    handleProductAdd,
    handleProductView,
    handleProductDelete,
    handleProductUpdate,
    handleProductUpdateChange,
    setProduct,
    handleProductIncriment,
    handleProductDecriment,
    handleConfirmOrder,
    handleTemporaryOrderDelete,
    handleShippingDataChange,
    handleCheckoutStripe,
    handleOrderAdminView,
    handleViewContact,
    handleDeleteContact,
    handleContactChange,
    handleContactSubmit,
  };
};

export default useFunction;
