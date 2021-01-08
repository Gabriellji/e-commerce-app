import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

const GithubIcon = styled(FaGithub)`
  width: 50px;
  height: 50px;
`;
const LinkedinIcon = styled(FaLinkedin)`
  width: 50px;
  height: 50px;
`;
const InfoIcon = styled(FaInfoCircle)`
  width: 50px;
  height: 50px;
`;

export const textData = {
  login: {
    title: "Login",
    user: "Username",
    password: "Password",
    register: "Register",
    submit: "LOGIN!",
    text1: "Forgot your password?",
    text2: "Login with Google",
    text3: "Login with Facebook",
    fail: "Login failed. Please try again",
  },
  logout: {
    button: "Sign out",
  },
  navbar: {
    home: "HOME",
    first: "SHOP",
    second: "MAP",
    third: "CONTACT",
  },
  superNavbar: {
    logged: "Hello",
    notLogged: "Login / Sign Up",
  },
  homepage: {
    title1: "NORRIS Inc.",
    title2: "BUY LOCAL",
    title3: "FROM THE SAFETY OF YOUR HOME",
    // footer header
    title4: "BUY LOCAL, FROM THE SAFETY OF YOUR HOME",
  },
  shop: {
    cart: {
      exit: "Continue shopping",
      clear: "Delete all items",
      items: "Total Items: ",
      price: "Total Price:",
      empty: "You haven't added any items yet",
      add: "Add another one:",
      minus: "Remove one:",
      quantity: "Quantity: ",
      remove: "Delete from cart",
    },
    single: {
      continue: "Continue Shopping",
      add: "Add to cart",
      details: "Details",
    },
    checkout: {
      label: "CHECKOUT",
      name: "NORRIS INC.",
      currency: "GBP",
      pay: "Pay",
      text: "Your total is £",
      notLogged: "Login to Checkout"
    },
    banner: [
      {
        title: "LOCAL JEWELRY SHOPS",
        text: "Best local jewelry at your service",
      },
      {
        title: "LOCAL CLOTHES SHOPS",
        text: "Vintage and comfy, stylish and amazing",
      },
      {
        title: "LOCAL ELECTRONIC SHOPS",
        text: "New devices for you home, office and gaming",
      },
    ],
  },
  map: {
    title: "Buy local from our partner shops!",
    mapBox: "Partner shops",
    here: "WE ARE HERE!!",
  },
  contact: {
    title: "Feel free to contact us",
    button: "Contact our customer service",
    client: "Did you have any issue with your order?",
    seller: "Partner local store",
    form: {
      first: "Name",
      second: "Order ID",
      third: "Email",
      forth: "Telephone number",
      fifth: "Message",
      sixth: "Shop ID",
      seventh: "Order ID",
      placeholder: "Type your message here...",
      button: "Submit",
    },
    submitted: {
      title: "Thank you for contacting our customer service",
      text1: "Your message has been submitted",
      text2: "You can safely close the page or go back to shopping",
    },
  },
  footer: [
    {
      icon: <GithubIcon />,
      title: "Github",
      links: [
        { name: "Yauheniya Habrykava", link: "https://github.com/gabriellji" },
        { name: "Jacopo Luri", link: "https://github.com/JacopoLuri" },
        { name: "Mancini", link: "https://github.com/mancia08" },
        { name: "Carlos Orellana", link: "https://github.com/carlosaore" },
      ],
    },
    {
      icon: <LinkedinIcon />,
      title: "Linkedin",
      links: [
        {
          name: "Yauheniya Habrykava",
          link: "https://www.linkedin.com/in/evgeniya-gabrikova/",
        },
        {
          name: "Jacopo Luri",
          link: "https://www.linkedin.com/in/jacopo-luri-1111081a2/",
        },
        { name: "Mancini", link: "https://www.linkedin.com/in/mancia08/" },
        {
          name: "Carlos Orellana",
          link: "https://www.linkedin.com/in/carlosaore/",
        },
      ],
    },
    {
      icon: <InfoIcon />,
      title: "Norris Inc. Project",
      links: [
        {
          name: "GitHub Repo",
          link: "https://github.com/Gabriellji/e-commerce-app",
        },
        {
          name: "React Documentation",
          link: "https://reactjs.org/docs/getting-started.html",
        },
        {
          name: "Styled Components Documentation",
          link: "https://styled-components.com/docs",
        },
        {
          name: "React Router Documentation",
          link: "https://reactrouter.com/web/guides/quick-start",
        },
      ],
    },
  ],
  closing : "made with LOVE for Wild Code School"
};

