import image from "./photo/vi_portfolio.jpg"
import { TypeAnimation } from "react-type-animation"
import resume from "./photo/VigneshR-resume.pdf"

function Profile() {

    return (
        <section id="profile" className="profile-section">

            <div className="container">

                <div className="glass-card row mt-3 pt-5 g-4 p-4" data-aos="fade-up">


                    <div className="col-sm-12 d-flex flex-column justify-content-center col-md-6">

                        <h6 className="location-text">
                            Chennai, India
                        </h6>

                        <h1 className="fw-bold text-white">

                            Hi, I'm
                            <span className="name-color">
                                {" "}Vignesh
                            </span>

                        </h1>

                        <TypeAnimation
                            sequence={[
                                'Aspiring Software Developer', 2000,
                                'Aspiring Java Developer', 2000,
                                'Aspiring FullStack Developer', 2000
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            className="fs-4 fw-bold typing-text"
                        />

                        <p className="mt-3 profile-description">

                            Passionate about building
                            responsive and user-friendly
                            web applications using
                            Java, React, and Spring Boot.

                        </p>
                        <div className="mt-5 ">
                            <a 

                                href={resume}

                                download

                                className="cv-btn text-center"

                            >

                                Download CV

                            </a>
                        </div>

                    </div>

                    <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">

                        <img
                            src={image}
                            className="profile-image"
                            alt="Image"
                        />

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Profile