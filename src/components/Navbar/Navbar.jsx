import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Elementum</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <button className="menu-btn">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;