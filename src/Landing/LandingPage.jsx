import "../Landing/css/Landing.css";
import Header from "./Header";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>High Quality Japanese Koi</h2>
          <p>Track health, feeding schedules, and water quality all in one place.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            <img src="/src/assets/koipond.jpg" alt="Koi Pond" />
          </div>
          <div className="water-overlay"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <div
            className="feature-slice"
            style={{ backgroundImage: "url('/src/assets/koifeed.jpg')" }}
          >
            <div className="feature-content">
              <h4>Health Tracking</h4>
              <p>Monitor the well-being of your Koi with ease.</p>
            </div>
          </div>
          <div
            className="feature-slice"
            style={{ backgroundImage: "url('/src/assets/koisched.jpg')" }}
          >
            <div className="feature-content">
              <h4>Feeding Schedules</h4>
              <p>Keep track of feeding times and quantities.</p>
            </div>
          </div>
          <div
            className="feature-slice"
            style={{ backgroundImage: "url('/src/assets/koiwaterqua.jpg')" }}
          >
            <div className="feature-content">
              <h4>Water Quality</h4>
              <p>Get alerts when water conditions need attention.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default LandingPage;