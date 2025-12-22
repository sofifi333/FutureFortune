import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [fortune, setFortune] = useState("");
  const [error, setError] = useState();

  // controls whether history is visible
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  // handle api req
  const fetchData = async () => {
    try {
      setError(undefined);
      const response = await fetch("https://api.adviceslip.com/advice");
      const result = await response.json();
      setFortune(result.slip.advice);
    } catch (err) {
      setError(err);
    }
  };

  const clearFortune = () => {
    setFortune("");
    setError(undefined);
  };

  return (
    <div className="app-shell">
      <Header toggleHistory={toggleHistory} />

      <main className="app-main">
        <Home
          fetchData={fetchData}
          fortune={fortune}
          error={error}
          clearFortune={clearFortune}
          showHistory={showHistory}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
