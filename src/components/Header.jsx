import "./Components.css";
import search from "../assets/search.png";

export default function Header() {
  return (
    <div className="header">
      <button id="search-btn">
        <img src={search} />
      </button>
      <button id="history-btn">this is the history button</button>
    </div>
  );
}
