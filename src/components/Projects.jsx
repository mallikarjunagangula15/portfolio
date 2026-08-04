function Projects() {
  return (
    <section id="projects" className="section">

      <h2 className="section-title">Projects</h2>

      <div className="project-grid">

        <div className="project-card">

          <h3>Blockchain Based AI Data Security System</h3>

          <p>
            Developed a secure data storage system using
            Blockchain, Python and Flask with encrypted
            user authentication.
          </p>

          <h4>
            Python | Flask | Blockchain | SQLite
          </h4>

          <div className="buttons">
            <button>GitHub</button>
            <button>Live Demo</button>
          </div>

        </div>

        <div className="project-card">

          <h3>Mourya Pizza Website</h3>

          <p>
            Responsive restaurant website using
            HTML, CSS and CSS Grid.
          </p>

          <h4>
            HTML | CSS | Responsive Design
          </h4>

          <div className="buttons">
            <button>GitHub</button>
            <button>Live Demo</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
