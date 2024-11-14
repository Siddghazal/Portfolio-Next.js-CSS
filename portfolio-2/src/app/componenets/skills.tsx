
export default function Skills() {
    return (
      <section id="skills" className="skills-section">
        <div>
          <h2 className="skills-heading">My <span className="skills-heading-white">Skills</span></h2>
          <div className="skills-grid">
  
            <div className="skill-card">
              <img src="/image1.png" alt="HTML 5 Icon" className="skill-icon" />
              <h3 className="skill-title">HTML 5</h3>
              <p className="skill-description">Experience in creating structured, semantic markup for modern web applications.</p>
            </div>
  
            <div className="skill-card">
              <img src="/image2.png" alt="CSS 3 Icon" className="skill-icon" />
              <h3 className="skill-title">CSS 3</h3>
              <p className="skill-description">Proficient in styling web pages with responsive and modern design principles.</p>
            </div>
  
            <div className="skill-card">
              <img src="/image3.png" alt="JavaScript Icon" className="skill-icon" />
              <h3 className="skill-title">JavaScript</h3>
              <p className="skill-description">Skilled in writing dynamic and interactive scripts for web applications.</p>
            </div>
  
            <div className="skill-card">
              <img src="/image4.png" alt="Next.js Icon" className="skill-icon" />
              <h3 className="skill-title">Next.js</h3>
              <p className="skill-description">Skilled in creating fast, SEO-friendly web applications with Next.js.</p>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
  