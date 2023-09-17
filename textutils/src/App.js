import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#110646 ";
      handleAlert("Dark mode has been activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode has been activated", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          mode={mode}
          title="TextUtils"
          homeText="Home"
          aboutText="About Us"
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />

        <Routes>
          <Route
            path="/"
            element={<TextForm mode={mode} Heading="Type down below:" />}
          />
          <Route path="/about" element={<About mode= {mode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
