import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListings = () => {
  const products = useSelector((state) => state);
  // console.log(products);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  // console.log("products:", products);

  return (
    <>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductListings;
