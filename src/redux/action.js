import axios from "axios";
import {
  oneProductFailed,
  oneProductLoading,
  oneProductSuccess,
  productsFailed,
  productsLoading,
  productsSuccess,
} from "./constant";

// req for products

export const getProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: productsLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios("http://kzico.runflare.run/product/");
    dispatch({
      type: productsSuccess,
      payload: { data: [...data], loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: productsFailed,
      payload: { data: [], loading: false, error: error.message },
    });
    console.log(error);
  }
};

// req for one product

export const getOneProduct = (_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: oneProductLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios.get(
      `http://kzico.runflare.run/product/${_id}`,
    );
    dispatch({
      type: oneProductSuccess,
      payload: { data: { ...data }, loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: oneProductFailed,
      payload: { data: [], loading: false, error: error.message },
    });
    console.log(error);
  }
};

// action for sing up

export const getsingUp =
  (username, email, password, mobile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: oneProductLoading,
        payload: { data: [], loading: true, error: "" },
      });

      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: `${username}`,
          email: `${email}`,
          password: `${password}`,
          mobile: `${mobile}`,
        },
      );
      dispatch({
        type: oneProductSuccess,
        payload: { data: { ...data }, loading: false, error: "" },
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: oneProductFailed,
        payload: {
          data: [],
          loading: false,
          error: error,
        },
      });
      console.log(error.response.data.message);
    }
  };
