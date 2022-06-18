import { ActionTypes } from "../constants/action-types";
import axios from "axios";


export const fetchMeals = () => {
  return async function (dispatch) {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
    dispatch({ type: ActionTypes.FETCH_MEALS, payload: response?.data?.meals });
  }
};

export const fetchSingleMeal = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response?.data?.meals[0] });
  }
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
