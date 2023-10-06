import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Body />
            <Footer />
        </>
    )
}

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<App />);
