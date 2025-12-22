import { useState } from "react";
import "../Components.css";

// Move title center
// add fortune cookie -- make it float up and down
// add button under fortune cooke --
// put description in a box underneath title

// fetch data -- is a function that is called each time the btn is clicked

export default function Home({ fortune, error, fetchData }) {
  const [image, setCookieImage] = useState("/fortune-unbroken.png");
  const [fortuneClass, setFortuneClass] = useState("fortune-hidden"); // this is used to show/hide the cookie by manipulating the class- starts at hidden
  const [isImageShown, setIsImageShown] = useState(false); // tracks if the user alrdy did initial click -- used in the function only
  const [cookieGeneration, setCookieGeneration] = useState("cookie-generation"); // used to hide the initial cookie generation -- maybe useEffect?

  // this function is used to hide the cookie and then show it
  function showFortune() {
    if (!isImageShown) {
      setFortuneClass("fortune");
      setCookieGeneration("cookie-gen-hidden");
      setIsImageShown(true);
    } else {
      console.log("Hi im shown");
    }
  }
  return (
    <div>
      <div className="home-title">
        <h1 id="floating-home">Welcome to Future Fortune!</h1>
      </div>

      <div className="main-content">
        <div className={cookieGeneration}>
          <p>Unveil your future! Click to generate your fortune!</p>
          <button id="gen-cookie-btn" onClick={showFortune}>
            Generate Cookie
          </button>
        </div>

        <div className={fortuneClass}>
          <p>Click On The Cookie To See Your Fortune!</p>
          <p>{error && `There is an error ${error}`}</p>
          <img
            src={!fortune ? image : "/fortune-broken.png"}
            onClick={showFortune}
          ></img>
        </div>
      </div>
    </div>
  );
}
