import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./Info.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Info />
        <About />
        <Footer />
    </React.StrictMode>
);

/* 

Create separate components for:
DONE: - info (photo, name, buttons)
- about 
- interests
- footer (social icons)

*/
