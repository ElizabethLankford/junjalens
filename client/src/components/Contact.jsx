function Contact() {
  return (
    <div>
      Contact page...
      <form className="contact-form">
        <label>
          Name:
          <input autoFocus required />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Subject:
          <input />
        </label>
        <label>
          Message:
          <textarea />
        </label>
      </form>
    </div>
  );
}
export default Contact;
