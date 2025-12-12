import { useState } from "react";
import "../Components.css";

// Move title center
// add fortune cookie -- make it float up and down
// add button under fortune cooke --
// put description in a box underneath title

export default function Home({ tony, error, fetchData }) {
  const [cookieImage, setCookieImage] = useState("/fortune-unbroken.png");

  return (
    <div>
      <div className="home-title">
        <h1 id="floating-home">Welcome to Future Fortune!</h1>
      </div>

      <div className="main-content">
        <div className="home-description">
          <p>Unveil your future! Click to generate your fortune!</p>
          <button id="gen-cookie-btn" onClick={fetchData}>
            Generate Cookie
          </button>
        </div>

        <div className="fortune">
          {/* <button id="fortune-btn" onClick={fetchData}> */}
          {/* {" "}
            FORTUNEEEE{" "}
          </button> */}
          <p>Here is your Fortune! {tony}</p>
          <p>{error && `There is an error ${error}`}</p>
          <img src={!tony ? cookieImage : "/fortune-broken.png"}></img>
        </div>
      </div>
    </div>
  );
}
