import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I&apos;m <span className="highlight">Ghazala Siddiqui</span></h1>
        <h2 className="hero-subtitle">Frontend Developer</h2>

        <p className="hero-description">Hello! I am Ghazala, a frontend developer with a passion for creating beautiful and functional websites. I enjoy coding and am always eager to learn new things to enhance my skills.</p>
         
        <div className="button-wrapper">
          <a href="#contact" className="contact-button">Contact Me</a>
        </div>

        <div className="social-icons">
          <a href="https://linkedin.com" className="icon group">
            <FaLinkedinIn className="social-icon" />
          </a>
          <a href="https://twitter.com" className="icon group">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com" className="icon group">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>

      <div className="image-container">
        <Image src="/picture1.png" alt="picture" width={400} height={400} className="profile-image" />
      </div>
    </section>
  );
}
