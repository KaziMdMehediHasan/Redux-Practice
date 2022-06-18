import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {products.map((product) => {
        const { idMeal, strMeal, strMealThumb, strArea, strCategory } = product;
        return (
          <div className="four wide column" key={idMeal}>
            <Link to={`/product/${idMeal}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={strMealThumb} alt={strMeal} />
                  </div>
                  <div className="content">
                    <div className="header">{strMeal}</div>
                    <div className="meta price">{strArea}</div>
                    <div className="meta">{strCategory}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })};
    </>
  )
};

export default ProductComponent;
