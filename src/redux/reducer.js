import {
  changePasswordFailed,
  changePasswordLoading,
  changePasswordSuccess,
  changeProfileFailed,
  changeProfileLoading,
  changeProfileSuccess,
  logOutFailed,
  logOutLoading,
  logOutSuccess,
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
  uploadAvatarFailed,
  uploadAvatarLoading,
  uploadAvatarSuccess,
} from "./constant";

// create state for products

export const products = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case productsLoading:
      return payload;
    case productsFailed:
      return payload;
    case productsSuccess:
      return payload;

    default:
      return state;
  }
};

// create state for one product

export const oneProduct = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case oneProductLoading:
      return payload;
    case oneProductFailed:
      return payload;
    case oneProductSuccess:
      return payload;

    default:
      return state;
  }
};

// sing up

export const singUp = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case singUpLoading:
      return payload;
    case singUpFailed:
      return payload;
    case singUpSuccess:
      return payload;

    default:
      return state;
  }
};

// login

export const login = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case loginLoading:
      return payload;
    case loginFailed:
      return payload;
    case loginSuccess:
      return payload;

    default:
      return state;
  }
};

// profile

export const profile = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case proLoading:
      return payload;
    case proFailed:
      return payload;
    case proSuccess:
      return payload;

    default:
      return state;
  }
};

// submit

export const submit = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case submitLoading:
      return payload;
    case submitFailed:
      return payload;
    case submitSuccess:
      return payload;

    default:
      return state;
  }
};

// one order

export const oneOrder = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case oneOrderLoading:
      return payload;
    case oneOrderFailed:
      return payload;
    case oneOrderSuccess:
      return payload;

    default:
      return state;
  }
};

// one order

export const order = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case orderLoading:
      return payload;
    case orderFailed:
      return payload;
    case orderSuccess:
      return payload;

    default:
      return state;
  }
};

// change profile

export const changeProfile = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case changeProfileLoading:
      return payload;
    case changeProfileFailed:
      return payload;
    case changeProfileSuccess:
      return payload;

    default:
      return state;
  }
};

// change profile

export const changePass = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case changePasswordLoading:
      return payload;
    case changePasswordFailed:
      return payload;
    case changePasswordSuccess:
      return payload;

    default:
      return state;
  }
};

// upload Avatar

export const uploadAvatar = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case uploadAvatarLoading:
      return payload;
    case uploadAvatarFailed:
      return payload;
    case uploadAvatarSuccess:
      return payload;

    default:
      return state;
  }
};
