import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allReducers.products);

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          {products.map(({ id, image, title, price, category }) => {
            return (
              <div className="col-md-4" key={id}>
                <Link to={`/product/${id}`}>
                  <div className="card">
                    <div className="image">
                      <img src={image} className="img-fluid" />
                    </div>
                    <div className="content">
                      <div className="header">{title}</div>
                      <div className="meta price">${price}</div>
                      <div className="meta">{category}</div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductComponent;
