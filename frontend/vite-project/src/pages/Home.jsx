import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("home-theme") || "light");

  useEffect(() => {
    localStorage.setItem("home-theme", theme);
  }, [theme]);

  return (
  <main className="home-page" data-theme={theme}>
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Frame home">
        <span className="brand-mark">f.</span>
        <span>frame<span className="brand-dot">.</span></span>
      </Link>
      <label className="home-theme-picker">
        <span>Theme</span>
        <select aria-label="Choose home page theme" value={theme} onChange={(event) => setTheme(event.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="rose">Rose</option>
        </select>
      </label>
      <nav className="main-nav" aria-label="Main navigation">
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link" to="/feed">Explore</Link>
        <Link className="nav-cta" to="/create-post">Create a post <span aria-hidden="true">&rarr;</span></Link>
      </nav>
    </header>

    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> YOUR LITTLE CORNER OF THE INTERNET</p>
        <h1>Good things<br />happen <span>in a frame.</span></h1>
        <p className="hero-description">Welcome to my space for moments worth keeping. Browse what's new or add a little piece of your day.</p>
        <p className="welcome-note">Made with care by <strong>Amit Dixit</strong></p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/feed">Explore the feed <span aria-hidden="true">&rarr;</span></Link>
          <Link className="button button-secondary" to="/create-post"><span className="plus-icon" aria-hidden="true">+</span> Share a moment</Link>
        </div>
        <div className="hero-footnote"><span className="status-dot" /> A place for the moments that matter</div>
      </div>

      <div className="hero-art" aria-label="A preview of a photo post">
        <div className="art-sun" />
        <div className="art-label">A MOMENT, KEPT</div>
        <div className="art-photo">
          <div className="photo-sky"><span className="photo-sun" /></div>
          <div className="photo-hills"><span /><i /></div>
          <div className="photo-caption"><span className="caption-avatar">A</span><span><strong>A little pause</strong><small>Somewhere under the open sky</small></span><span className="caption-heart">&hearts;</span></div>
        </div>
        <div className="art-sticker">*<small>MAKE IT<br />A MOMENT</small></div>
        <div className="art-index">01 <span /> 02</div>
      </div>
    </section>

    <section className="home-links" aria-label="Explore Frame">
      <Link className="feature-link" to="/feed">
        <span className="feature-number">01 / DISCOVER</span>
        <span className="feature-icon" aria-hidden="true">&rarr;</span>
        <span className="feature-title">See what's new</span>
        <span className="feature-copy">Take a look through the latest moments shared here.</span>
      </Link>
      <Link className="feature-link" to="/create-post">
        <span className="feature-number">02 / SHARE</span>
        <span className="feature-icon" aria-hidden="true">+</span>
        <span className="feature-title">Add your moment</span>
        <span className="feature-copy">Choose a photo, add a caption, and make it yours.</span>
      </Link>
      <div className="home-signoff"><span>COLLECT THE LITTLE THINGS</span><span className="signoff-sparkle">*</span></div>
    </section>
  </main>
  );
};

export default Home;
