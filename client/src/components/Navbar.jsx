import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      Header
      <div>
        <Link to="/">Home</Link>
        <Link to="portfolio">Portfolio</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </header>
  );
}
export default Navbar;
