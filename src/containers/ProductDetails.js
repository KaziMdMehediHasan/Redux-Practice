import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleMeal,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { mealId } = useParams();
  let product = useSelector((state) => state.product);
  const { idMeal, strMeal, strMealThumb, strArea, strCategory, strInstructions } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (mealId && mealId !== "") dispatch(fetchSingleMeal(mealId));
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [mealId])
  return (
    <div className="ui grid container">
      <Link to="/">
        <h2>Go To Home</h2>
      </Link>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={strMealThumb} alt={strMeal} />
              </div>
              <div className="column rp">
                <h1>{strMeal}</h1>
                <h2>
                  <a className="ui teal tag label">${strArea}</a>
                </h2>
                <h3 className="ui brown block header">{strCategory}</h3>
                <p>{strInstructions}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
