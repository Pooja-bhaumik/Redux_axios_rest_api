import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allReducers.products);
  //   const renderList = products.map((product) => {
  //     const { id, image, title, price, category } = product;
  //     return (
  //       <div className="four column wide">
  //         <div className="ui link cards">
  //           <div className="card">
  //             <div className="image">
  //               <img src={image} />
  //             </div>
  //             <div className="content">
  //               <div className="header">{title}</div>
  //               <div className="meta price">${price}</div>
  //               <div className="meta">{category}</div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          {products.map(({ id, image, title, price, category }) => {
            return (
              <div className="col-md-4">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductComponent;
