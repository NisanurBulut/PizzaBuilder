import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const addIngredient = (name) => {
  debugger;
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredintName: name,
  };
};

export const removeIngredient = (name) => {
  debugger;
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredintName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};
export const fetchIngredientsFail=()=>{
  return {
    type:actionTypes.FETCH_INGREDIENTS_FAILED
  }
}
export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get('ingredients')
      .then((response) => {
        dispatch(setIngredients(response.data))
      })
      .catch((err) => {
        dispatch(fetchIngredientsFail())
      });
  };
};
