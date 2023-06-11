import axios from "axios";
import {
  loginFailed,
  loginLoading,
  loginSuccess,
  oneOrderFailed,
  oneOrderLoading,
  oneOrderSuccess,
  oneProductFailed,
  oneProductLoading,
  oneProductSuccess,
  orderFailed,
  orderLoading,
  orderSuccess,
  proFailed,
  proLoading,
  proSuccess,
  productsFailed,
  productsLoading,
  productsSuccess,
  singUpFailed,
  singUpLoading,
  singUpSuccess,
  submitFailed,
  submitLoading,
  submitSuccess,
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
      payload: { data: [], loading: false, error: error.response.data },
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
      payload: { data: [], loading: false, error: error.response.data },
    });
    console.log(error);
  }
};

// action for sing up

export const getsingUp =
  (username, email, password, mobile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: singUpLoading,
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
        type: singUpSuccess,
        payload: { data: { ...data }, loading: false, error: "" },
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: singUpFailed,
        payload: {
          data: [],
          loading: false,
          error: error.response.data,
        },
      });
      console.log(error);
    }
  };

// action for login

export const getLogin = (user, pass) => async (dispatch, getState) => {
  try {
    dispatch({
      type: loginLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios.post("http://kzico.runflare.run/user/login", {
      email: `${user}`,
      password: `${pass}`,
    });
    dispatch({
      type: loginSuccess,
      payload: { data: { ...data }, loading: false, error: "" },
    });
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: loginFailed,
      payload: {
        data: [],
        loading: false,
        error: error.response.data,
      },
    });
    console.log(error);
  }
};

// action for profile

export const getprofile = (token) => async (dispatch, getState) => {
  try {
    dispatch({
      type: proLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: proSuccess,
      payload: { data: { ...data }, loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: proFailed,
      payload: {
        data: [],
        loading: false,
        error: error.response.data,
      },
    });
    console.log(error);
  }
};

// action for Submit

export const getSubmit =
  (token, address, city, postalCode, phone, TotalPrice, userOrders) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: submitLoading,
        payload: { data: [], loading: true, error: "" },
      });

      const { data } = await axios.post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: userOrders.map((item) => {
            return { product: item.product._id, qty: item.quantity };
          }),

          shippingAddress: {
            address: address,
            city: city,
            postalCode: postalCode,
            phone: phone,
          },
          paymentMethod: "cash",
          shippingPrice: "5",
          totalPrice: TotalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch({
        type: submitSuccess,
        payload: { data: { ...data }, loading: false, error: "" },
      });
    } catch (error) {
      dispatch({
        type: submitFailed,
        payload: {
          data: [],
          loading: false,
          error: error.response.data,
        },
      });
      console.log(error);
    }
  };

// action for one order

export const getOneOrder = (token, _id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: oneOrderLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios.get(`http://kzico.runflare.run/order/${_id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: oneOrderSuccess,
      payload: { data: { ...data }, loading: false, error: "" },
    });

    console.log(data);
  } catch (error) {
    dispatch({
      type: oneOrderFailed,
      payload: {
        data: [],
        loading: false,
        error: error.response.data,
      },
    });
    console.log(error);
  }
};

// action for order

export const getOrder = (token) => async (dispatch, getState) => {
  try {
    dispatch({
      type: orderLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios.get(`http://kzico.runflare.run/order/`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: orderSuccess,
      payload: { data: { ...data }, loading: false, error: "" },
    });

    console.log(data);
  } catch (error) {
    dispatch({
      type: orderFailed,
      payload: {
        data: [],
        loading: false,
        error: error.response.data,
      },
    });
    console.log(error);
  }
};
