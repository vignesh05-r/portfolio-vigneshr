function Contact() {

    return (

        <section id="contact" className="contact-section" data-aos="fade-up">

            <div className="container">

                <h1 className="text-center">

                    Contact Me

                </h1>

                <div className="row g-4">

                    <div className="col-lg-5">

                        <div className="glass-card contact-info">

                            <h4>

                                Let's Connect 🚀

                            </h4>

                            <p>

                                📞 +91 99405 07789

                            </p>

                            <p>

                                📧

                                <a
                                    href="mailto:vigneshwiky51@gmail.com"
                                    className="contact-link"
                                >

                                    vigneshwiky51@gmail.com

                                </a>

                            </p>

                            <p>

                                💼

                                <a
                                    href="https://www.linkedin.com/in/vignesh-r-1599b7285?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >

                                    LinkedIn

                                </a>

                            </p>

                            <p>

                                💻

                                <a
                                    href="https://github.com/vignesh05-r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >

                                    GitHub

                                </a>

                            </p>

                            <p>

                                📍 Chennai, India

                            </p>
                        </div>

                    </div>


                    <div className="col-lg-7">

                        <div className="glass-card contact-card">

                            <form>

                                <div className="mb-3">

                                    <input

                                        type="text"

                                        placeholder="Your Name"

                                        className="form-control contact-input"

                                    />

                                </div>

                                <div className="mb-3">

                                    <input

                                        type="email"

                                        placeholder="Your Email"

                                        className="form-control contact-input"

                                    />

                                </div>

                                <div className="mb-3">

                                    <textarea

                                        rows="5"

                                        placeholder="Your Message"

                                        className="form-control contact-input"

                                    >

                                    </textarea>

                                </div>

                                <button

                                    className="contact-btn"

                                >

                                    Send Message

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Contact