
export default function Contact() {
    return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h1 className="contact-heading">
            Contact <span className="contact-heading-white">Me</span>
          </h1>
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="input-field"
              />
              <input
                type="text"
                placeholder="Email Subject"
                required
                className="input-field"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={10}
              required
              className="textarea-field"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
  