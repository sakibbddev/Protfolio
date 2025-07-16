const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="leave-comments-area">
      <div className="comments-box">
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="row gx-3">
            <div className="col-md-6">
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="form-control shadow-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label htmlFor="budget" className="form-label">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="form-select shadow-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select budget...
                  </option>
                  <option value="$5000">$100</option>
                  <option value="$5000 - $10000">$100 - $2000</option>
                  <option value="$10000 - $20000">$500 - $1000</option>
                  <option value="$20000+">$2000+</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Comment
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control shadow-none"
                  rows={4}
                  placeholder="Type details about your inquiry"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <button className="submit-btn" type="submit">
                Send Message
                <svg
                  className="icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.6665V6.6665H12.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <p className="ajax-response mb-0"></p>
      </div>
    </div>
  );
};

export default ContactForm;
