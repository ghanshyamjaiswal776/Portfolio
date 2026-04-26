import { useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: #0a0a0f;
    color: #e8e6f0;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0a0a0f; }
  ::-webkit-scrollbar-thumb { background: #3a3558; border-radius: 10px; }

  /* NAV */
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 3rem;
    border-bottom: 0.5px solid #1e1c2e;
    position: sticky;
    top: 0;
    background: rgba(10,10,15,0.9);
    backdrop-filter: blur(10px);
    z-index: 100;
  }

  .logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.4rem;
    color: #c8b4fa;
    letter-spacing: -0.5px;
    cursor: default;
  }

  .nav-links {
    display: flex;
    gap: 2.2rem;
    list-style: none;
  }

  .nav-links a {
    font-size: 0.85rem;
    color: #7770a8;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: #c8b4fa; }

  /* HERO */
  .hero {
    padding: 6rem 3rem 4rem;
    max-width: 860px;
    animation: fadeUp 0.7s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .tag {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 500;
    color: #c8b4fa;
    background: rgba(200,180,250,0.08);
    border: 0.5px solid rgba(200,180,250,0.25);
    border-radius: 20px;
    padding: 4px 14px;
    letter-spacing: 0.08em;
    margin-bottom: 1.2rem;
  }

  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.4rem, 6vw, 3.8rem);
    font-weight: 800;
    line-height: 1.06;
    letter-spacing: -2px;
    color: #f0eeff;
    margin-bottom: 1rem;
  }

  .hero h1 span { color: #c8b4fa; }

  .hero p {
    font-size: 1.05rem;
    color: #8880b0;
    max-width: 480px;
    line-height: 1.75;
    margin-bottom: 1.8rem;
  }

  .cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }

  .btn-primary {
    background: #c8b4fa;
    color: #0a0a0f;
    padding: 11px 26px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, transform 0.15s;
  }
  .btn-primary:hover { background: #ddd0ff; transform: translateY(-2px); }

  .btn-outline {
    background: transparent;
    color: #c8b4fa;
    padding: 11px 26px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    border: 0.5px solid rgba(200,180,250,0.35);
    font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s, transform 0.15s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }
  .btn-outline:hover { border-color: #c8b4fa; transform: translateY(-2px); }

  /* DIVIDER */
  .divider { height: 0.5px; background: #1e1c2e; margin: 0 3rem; }

  /* SECTIONS */
  .section {
    padding: 3.5rem 3rem;
    animation: fadeUp 0.8s ease 0.15s both;
  }

  .section-label {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    color: #554488;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  }

  /* ABOUT */
  .about-box {
    background: #0f0e18;
    border: 0.5px solid #1e1c2e;
    border-radius: 14px;
    padding: 1.8rem;
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .avatar {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c8b4fa 0%, #6655aa 100%);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    color: #0a0a0f;
    flex-shrink: 0;
  }

  .about-text h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #f0eeff;
    margin-bottom: 0.4rem;
  }

  .about-text p { font-size: 0.88rem; color: #7770a8; line-height: 1.7; }

  .info-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1rem; }

  .chip {
    font-size: 0.75rem;
    color: #9990b8;
    background: rgba(255,255,255,0.03);
    border: 0.5px solid #2a2740;
    border-radius: 20px;
    padding: 4px 13px;
  }

  /* SKILLS */
  .skills-grid { display: flex; flex-wrap: wrap; gap: 10px; }

  .skill-pill {
    background: rgba(200,180,250,0.06);
    border: 0.5px solid #3a3558;
    border-radius: 7px;
    padding: 7px 16px;
    font-size: 0.83rem;
    color: #c8b4fa;
    transition: background 0.2s, border-color 0.2s;
    cursor: default;
  }
  .skill-pill:hover { background: rgba(200,180,250,0.14); border-color: #6655aa; }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 14px;
  }

  .project-card {
    background: #0f0e18;
    border: 0.5px solid #1e1c2e;
    border-radius: 14px;
    padding: 1.4rem;
    transition: border-color 0.2s, transform 0.2s;
    cursor: default;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .project-card:hover { border-color: #6655aa; transform: translateY(-4px); }

  .proj-icon {
    width: 38px; height: 38px;
    background: rgba(200,180,250,0.08);
    border-radius: 9px;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
  }

  .project-card h3 {
    font-family: 'Syne', sans-serif;
    font-size: 0.97rem;
    font-weight: 700;
    color: #f0eeff;
  }

  .project-card p { font-size: 0.82rem; color: #6660a0; line-height: 1.55; flex: 1; }

  .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; }

  .proj-tag {
    font-size: 0.7rem;
    background: rgba(102,85,170,0.15);
    color: #a898e0;
    border-radius: 4px;
    padding: 2px 9px;
  }

  .proj-link {
    font-size: 0.78rem;
    color: #c8b4fa;
    text-decoration: none;
    margin-top: 0.2rem;
    display: inline-block;
    transition: opacity 0.2s;
  }
  .proj-link:hover { opacity: 0.7; }

  /* CONTACT */
  .contact-box {
    background: #0f0e18;
    border: 0.5px solid #1e1c2e;
    border-radius: 14px;
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .contact-box h2 {
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    color: #f0eeff;
  }

  .contact-box p { font-size: 0.9rem; color: #7770a8; max-width: 380px; line-height: 1.6; }

  .contact-links { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }

  .contact-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 20px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 0.5px solid #3a3558;
    color: #c8b4fa;
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s;
  }
  .contact-link:hover { border-color: #c8b4fa; background: rgba(200,180,250,0.07); }

  /* FOOTER */
  footer {
    padding: 1.5rem 3rem;
    border-top: 0.5px solid #1e1c2e;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.78rem;
    color: #3d3870;
  }
`;

const projects = [
  {
    icon: "🌐",
    title: "Portfolio Website",
    desc: "Personal portfolio built with React and Node.js. Responsive, dark-themed, and fast.",
    tags: ["React", "Node.js", "CSS"],
    link: "#",
  },
  {
    icon: "📝",
    title: "Todo App",
    desc: "Full-stack task manager with CRUD operations, user authentication, and MongoDB storage.",
    tags: ["React", "Express", "MongoDB"],
    link: "#",
  },
  {
    icon: "🌤",
    title: "Weather Dashboard",
    desc: "Real-time weather app using OpenWeather API with city search and 5-day forecast.",
    tags: ["JavaScript", "API", "CSS"],
    link: "#",
  },
];

const skills = [
  "HTML / CSS", "JavaScript", "React.js", "Node.js",
  "Express.js", "MongoDB", "Git & GitHub", "C / C++",
  "Python", "REST APIs", "Tailwind CSS", "VS Code",
];

export default function App() {

  useEffect(() => {
    document.title = "Ghanshyam | CSE Developer";
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav>
        <div className="logo">G.</div>
        <ul className="nav-links">
          <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo("about"); }}>About</a></li>
          <li><a href="#projects" onClick={e => { e.preventDefault(); scrollTo("projects"); }}>Projects</a></li>
          <li><a href="#skills" onClick={e => { e.preventDefault(); scrollTo("skills"); }}>Skills</a></li>
          <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <span className="tag">✦ Available for Internships</span>
        <h1>Hi, I'm<br /><span>Ghanshyam</span></h1>
        <p>
          B.E. CSE student at IET Khandari, Agra — building things for the web,
          exploring full-stack development, and learning every day.
        </p>
        <div className="cta-row">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Get in touch →
          </button>
          <button className="btn-outline" onClick={() => scrollTo("projects")}>
            View Projects
          </button>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-label">About me</div>
        <div className="about-box">
          <div className="avatar">GS</div>
          <div className="about-text">
            <h3>Ghanshyam — CSE 3rd Year</h3>
            <p>
              Passionate computer science student at IET Khandari, Agra. I love
              building full-stack web apps, exploring new technologies, and
              turning ideas into real working projects. Always looking to grow,
              collaborate, and contribute.
            </p>
            <div className="info-chips">
              <span className="chip">📍 Agra, UP</span>
              <span className="chip">🎓 IET Khandari</span>
              <span className="chip">💻 B.E. CSE</span>
              <span className="chip">📅 3rd Year</span>
              <span className="chip">🚀 Open to Internships</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-label">Skills & Tools</div>
        <div className="skills-grid">
          {skills.map((s) => (
            <span className="skill-pill" key={s}>{s}</span>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-label">Projects</div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="proj-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span className="proj-tag" key={t}>{t}</span>
                ))}
              </div>
              <a href={p.link} className="proj-link">View project →</a>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-label">Contact</div>
        <div className="contact-box">
          <h2>Let's connect</h2>
          <p>
            Open to internship opportunities, project collaborations, and
            interesting conversations. Drop me a message!
          </p>
          <div className="contact-links">
            <a href="mailto:ghanshyam@email.com" className="contact-link">✉ Email me</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link">⌥ GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">in LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© 2025 Ghanshyam — IET Khandari, Agra</span>
        <span>Built with React.js</span>
      </footer>
    </>
  );
}