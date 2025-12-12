import "./App.css";
import Home from "./components/pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";

// useEffect -- for api then convert to context
// useContext -- for api should be on the highest level
// set up the api -- log it to see what it prints
// generate a random cookie feature and css
// work on history and deleting adding cookies to history
// implement search

function App() {
  const [fortune, setFortune] = useState(""); // stores the advice data
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");

      const result = await response.json(); // wait for the data to come back to u
      console.log(result.slip.advice);
      setFortune(result.slip.advice);
    } catch (err) {
      setError(err);
    }
  };

  // you can do try, catch, finally
  // triggered by btn click --> this is why its outside instead of inside of useEffect -- its global scope

  // get rid of useEffect bc u dont want the fortune to come up when the page firsts loads
  // useEffect(() => {
  //   fetchData();
  // }, []); //  pings api when page loads

  return (
    <>
      <Header></Header>
      <Home fetchData={fetchData} tony={fortune} error={error}></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
