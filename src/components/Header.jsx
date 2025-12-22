import "./Components.css";

export default function Header({ toggleHistory }) {
  return (
    <div className="header">
      <div className="history-wrapper">
        <button className="btn" onClick={toggleHistory}>
          My Cookies
        </button>
      </div>
    </div>
  );
}
