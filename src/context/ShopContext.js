import React, { useState } from "react";
import { loginData } from "./../data/loginData";

export const ShopContext = React.createContext();

const initialState = {
  loginIconClicked: false,
  mobileMenu: false,
  isLoggedIn: false,
  username: "",
  user: "",
  password: "",
  loginFailed: false,
  paymentOpen: false,
  googleUser: '',
  signByGoogle: false,
  signByFB: false,
  cartShown : false
};

const ShopProvider = ({ children }) => {
  let [state, setState] = useState(initialState);

  const [cart, setCart] = useState('');

  const [payment, setPayment] = useState(false);
  /* TOGGLE PAYMENT */
  const togglePayment = () =>
    setState({
      ...state,
      paymentOpen: !state.paymentOpen,
      mobileMenu: false,
      loginIconClicked: false,
    });
  /*MOBILE MENU TOGGLE*/
  const toggleMobileMenu = () =>
    setState({
      ...state,
      paymentOpen: false,
      mobileMenu: !state.mobileMenu,
      loginIconClicked: false,
    });

  /*ACCOUNT ICON TOGGLE*/
  const loginIconToggle = () =>
    setState({
      ...state,
      paymentOpen: false,
      loginIconClicked: !state.loginIconClicked,
      mobileMenu: false,
      cartShown: false
    });

  /*close everything*/
  const closeLogin = () => {
    window.scrollTo(0, 0);
    setState({
      ...state,
      paymentOpen: false,
      loginIconClicked: false,
      mobileMenu: false,
    });
  };

  /*CART TOGGLE*/
  const cartToggle = () =>
    setState({
      ...state,
      paymentOpen: false,
      cartShown: !state.cartShown,
      mobileMenu: false,
      loginIconClicked: false,
    });

  /*LOGIN AND LOGOUT LOGIC*/
  const username = (event) =>
    setState({
      ...state,
      username: event.target.value,
      loginFailed: false,
    });
  const password = (event) =>
    setState({ ...state, password: event.target.value, loginFailed: false });
  const login = () => {
    const account = loginData.filter(
      (account) => account.user === state.username
    );
    account.length === 0
      ? setState({ ...state, loginFailed: true, username: "", password: "" })
      : account[0].password === state.password
        ? setState({
          ...state,
          isLoggedIn: true,
          loginIconClicked: false,
          loginFailer: false,
          user: account[0].name,
          username: "",
          password: "",
        })
        : setState({ ...state, loginFailed: true });
  };
  const logout = () =>
    setState({
      ...state,
      isLoggedIn: !state.isLoggedIn,
      loginIconClicked: !state.loginIconClicked,
    });

  /*ADD STUFF TO CART LOGIC HERE*/
  /*addedItems:[] is already in state*/

  /*SHOP PRICE LOGIC HERE*/
  /*itemsPrice inside state and hardcoded*/

  return (
    <ShopContext.Provider
      value={{
        cart, 
        setCart,
        payment,
        setPayment,
        state,
        setState,
        toggleMobileMenu,
        loginIconToggle,
        login,
        logout,
        username,
        password,
        closeLogin,
        cartToggle,
        togglePayment
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
