import "./App.css";
import Home from "./components/pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";

function App() {
  const [fortune, setFortune] = useState(""); // stores the advice data
  const [error, setError] = useState(); // starts as undefined

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");

      const result = await response.json(); // wait for the data to come back to u
      // console.log(result);
      // console.log(result.slip.advice);
      setFortune(result.slip.advice);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <Header></Header>
      <Home fetchData={fetchData} fortune={fortune} error={error}></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
