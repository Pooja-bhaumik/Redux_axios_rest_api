import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const products = useSelector((state) => state.product);
  const { image, title, price, category, description } = products;
  const { productId } = useParams();

  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      // console.log(response.data);
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  return (
    <>
      {Object.keys(products).length === 0 ? (
        <div>.....loading</div>
      ) : (
        <div className="container">
          <div className="row py-4">
            <div className="col-4">
              <img src={image} className="img-fluid" />
            </div>
            <div
              className="col-8"
              style={{ boxShadow: "0px 0px 4px 0px #c3c0c0" }}
            >
              <h3>{title}</h3>
              <button className="btn btn-warning my-3">{price}</button>
              <div className="bg-success text-white my-3 py-2">
                <h5 className="pl-3">{category}</h5>
              </div>
              <p>{description}</p>
              <button className="btn btn-danger text-white">Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
