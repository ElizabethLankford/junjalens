import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      JunjasLens
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="portfolio">Portfolio</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </header>
  );
}
export default Navbar;
