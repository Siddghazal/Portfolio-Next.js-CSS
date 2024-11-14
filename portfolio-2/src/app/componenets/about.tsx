import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Image Section */}
        
        <div className="about-image">
          <Image
            src="/picture1.png"
            alt="pic"
            width={300}
            height={300}
            className="about-image-img"
        
             />
        </div>
        
        {/* Text Section */}
        <div className="about-text">
          <h2 className="about-heading">
            About <span className="about-subheading">Me</span>
          </h2>
          <p className="about-description">
            I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 and Metaverse. Passionate about learning new skills to stay up-to-date with the latest innovation.
          </p>
          
          {/* Buttons */}
          <div className="about-buttons">
            <a href="#skills" className="about-button">View More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
