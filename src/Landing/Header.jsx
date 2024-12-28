import "../Landing/css/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo Section */}
        <div className="logo">
          <img src="/src/assets/koi lgo.jpg" alt="Koi Management Logo" /> {/* Replace with your actual logo */}
        </div>

        {/* Navigation Section */}
        <nav className="nav-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#koi">Koi Details</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Call-to-Action Section */}
        <div className="cta-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
