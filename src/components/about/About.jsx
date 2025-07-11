import "./about.css";

const About = () => {
  return (
    <div className="about-root">
      <h2 className="about-title">About Me</h2>
      <div className="about-underline" />
      <div className="about-main">
        {/* Fotoğraf ve altındaki info kartları */}
        <div className="about-photo-info-column">
          <div className="about-photo-container">
            <img src="/profile.jpg" alt="Profile" className="about-photo" />
          </div>
          <div className="about-info-stack">
            <div className="about-info-card">
              <span className="about-info-icon location"></span>
              <div>
                <div className="about-info-label">Location</div>
                <div className="about-info-value">Bodrum, Turkey</div>
              </div>
            </div>
            <div className="about-info-card">
              <span className="about-info-icon mail"></span>
              <div>
                <div className="about-info-label">Email</div>
                <div className="about-info-value">idrisibrahimerten@gmail.com</div>
              </div>
            </div>

            <div className="about-info-card">
              <span className="about-info-icon calendar"></span>
              <div>
                <div className="about-info-label">Date of Birth</div>
                <div className="about-info-value">March 17, 2001</div>
              </div>
            </div>
          </div>
        </div>
        {/* Sağdaki metin */}
        <div className="about-content">
          <h3 className="about-role">Software Developer</h3>
          <p className="about-bio">
            As a <b>Software Developer</b> with over <b>4 years of experience</b>, I specialize in developing data-driven systems, scalable backend services, and AI-powered applications. My core strengths lie in crafting robust APIs, building high-traffic web platforms, and integrating intelligent automation workflows.
          </p>
          <ul className="about-detail-list">
            <li>
              <span className="about-emoji">🧑‍💻</span>
              I began my career by building Python-based web scraping and analytics tools, managing large datasets using MongoDB and PostgreSQL. Later, I contributed to high-performance backend services using FastAPI and Django, delivering scalable and maintainable solutions.
            </li>
            <li>
              <span className="about-emoji">🚀</span>
              Led the end-to-end development of <b>Whaleswap AI</b>, a multi-exchange AI-powered crypto copy trading platform with over 1,000 active users. Built real-time signal processing and order execution by integrating APIs from Binance and Hyperliquid.
            </li>
            <li>
              <span className="about-emoji">📊</span>
              Designed and trained AI systems (TensorFlow) for brand recognition, license plate detection, and smart ad targeting. Built automation tools that leverage data from Instagram, LinkedIn, Facebook, and Google APIs.
            </li>
            <li>
              <span className="about-emoji">💬</span>
              Developed real-time Telegram bots with Node.js, including crypto trader monitoring systems; managed live data streams with Redis and WebSocket technologies.
            </li>
            <li>
              <span className="about-emoji">☁️</span>
              Manage server infrastructure and deployment using AWS and Docker. Experienced in API security, CI/CD pipelines, software testing, and version control best practices.
            </li>
          </ul>
          <div className="about-tech">
            <b>🔧 Technologies I Work With:</b> Python, Node.js, FastAPI, Django, React, Next.js, Tailwind CSS, MongoDB, PostgreSQL, Redis, TensorFlow, Docker, AWS
          </div>
          <div className="about-mission">
            <em>
              By combining my technical skills with a product-focused mindset, I aim to deliver scalable, innovative, and high-performance software solutions.<br />
              I thrive in collaborative environments and embrace continuous learning and improvement.
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
