import "./global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import Desktop from "./Screens/Desktop.jsx";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Desktop />);


