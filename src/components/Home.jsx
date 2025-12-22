import { useState } from "react";
import "./Components.css";

export default function Home({
  fortune, // current fortune string from App
  error, // error object from App if API fails
  fetchData, // function from App that fetches a new fortune
  clearFortune, // function from App that clears the current fortune
  showHistory, // boolean from App that controls history visibility
}) {
  const [started, setStarted] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const [history, setHistory] = useState([]);
  const [openHistoryId, setOpenHistoryId] = useState(null);

  const imageUnbroken = "/fortune-unbroken.png";
  const imageBroken = "/fortune-broken.png";

  // cAlled when user clicks "Generate Cookie"
  function handleStart() {
    setStarted(true);
  }

  // called when user clicks the cookie image
  function handleCookieClick() {
    if (!isOpened) {
      setIsOpened(true);
      fetchData();
    }
  }

  // when user clicks "Generate New Cookie"
  function handleGenerateNewCookie() {
    setIsOpened(false);
    clearFortune(); // app passes this
  }

  // called when user clicks "Save Cookie"
  function handleSaveCookie() {
    if (!fortune) return;
    const nextId = history.length + 1;
    setHistory([...history, { id: nextId, text: fortune }]);
  }

  // toggle for saved cookiezzz
  function toggleHistoryItem(id) {
    setOpenHistoryId(openHistoryId === id ? null : id);
  }

  return (
    <div className="home-layout">
      {/* the main content */}
      <section className="home-main">
        <div className="home-title">
          <h1 id="floating-home">Welcome to Future Fortune!</h1>
        </div>

        {/* when user first clicks on a cookie this section is run, but no more */}
        {!started && (
          <div className="cookie-generation">
            <p>Unveil your future! Click to generate your fortune!</p>
            <button id="gen-cookie-btn" onClick={handleStart}>
              Generate Cookie
            </button>
          </div>
        )}

        {started && (
          <div className="fortune">
            {!isOpened && <p>Click On The Cookie To See Your Fortune!</p>}

            {isOpened && (
              <p className="fortune-text">{fortune ? fortune : "Loading..."}</p>
            )}

            {error && (
              <p className="error-text">
                There is an error: {error?.message || String(error)}
              </p>
            )}

            <img
              className="cookie-img"
              src={fortune ? imageBroken : imageUnbroken}
              onClick={handleCookieClick}
              alt="fortune cookie"
            />

            {isOpened && (
              <div className="cookie-actions">
                <button onClick={handleSaveCookie}>Save Cookie</button>
                <button onClick={handleGenerateNewCookie}>
                  Generate New Cookie
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* sidebar that shows on right -- only when showHistory is true */}
      {showHistory && (
        <aside className="history">
          <h2 className="history-title">Previous Cookies</h2>

          {history.length === 0 ? (
            <p className="history-empty">No saved cookies yet.</p>
          ) : (
            <ul className="history-list">
              {history.map((item) => (
                <li key={item.id} className="history-item">
                  <button
                    className="history-btn"
                    onClick={() => toggleHistoryItem(item.id)}
                  >
                    Cookie {item.id}
                  </button>

                  {openHistoryId === item.id && (
                    <p className="history-fortune">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </aside>
      )}
    </div>
  );
}
