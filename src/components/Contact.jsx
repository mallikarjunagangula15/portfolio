function Contact() {
  return (
    <section id="contact" className="section">

      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea
          rows="6"
          placeholder="Your Message"
        ></textarea>

        <button>Send Message</button>

      </form>

    </section>
  );
}

export default Contact;
