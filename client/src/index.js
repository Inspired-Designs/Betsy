import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import Navbar from "./components/Navbar.jsx";
import ImageGallery from "./components/Image-Gallery.jsx";
import imageLinks from "./imageData.js";
import Styles from "./styles/Navbar.css";
import Style from "./styles/Comp-2.css";
import ComponentTwo from "./components/comp-2.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <ImageGallery imageLinks={imageLinks} />
    <ComponentTwo />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
