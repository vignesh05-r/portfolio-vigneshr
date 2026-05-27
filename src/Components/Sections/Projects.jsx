function Project() {

    return (

        <section id="project" className="project-section" >

            <div className="container">

                <h1 className="text-center">

                    Projects

                </h1>

                <div className="row g-4">


                    <div className="col-lg-4">

                        <div className="glass-card project-card" data-aos="flip-left">

                            <h3>

                                Country Information App

                            </h3>

                            <p>

                                React application displaying
                                country information using API.

                            </p>

                            <div className="tech-stack">

                                <span>React</span>

                                <span>Bootstrap</span>

                                <span>API</span>

                            </div>

                            <button
                                className="project-btn"
                            >

                                View Project

                            </button>

                        </div>

                    </div>


                    <div className="col-lg-4">

                        <div className="glass-card project-card" data-aos="flip-left">

                            <h3>

                                Book Library Management System

                            </h3>

                            <p>
                                Library management system built
                                using Spring Boot and SQL for
                                managing books, borrowing details
                                and database operations.

                            </p>

                            <div className="tech-stack">

                                <span>Sql</span>

                                <span>SpringBoot</span>

                                <span>Bootstrap</span>

                            </div>
                            <a

                                href="https://github.com/vignesh05-r/Book-Library-Management-System"

                                target="_blank"

                                rel="noopener noreferrer"

                                className="project-btn  text-center text-decoration-none"

                            >
                                View Project

                            </a>

                        </div>

                    </div>


                    <div className="col-lg-4">

                        <div className="glass-card project-card" data-aos="flip-left">

                            <h3>

                                Student Data Management System
                            </h3>

                            <p>

                                System developed to manage
                                student information efficiently
                                with CRUD operations and
                                database integration.

                            </p>

                            <div className="tech-stack">

                                <span>Java</span>

                                <span>Spring Boot</span>

                                <span>MySQL</span>

                            </div>

                            <a

                                href="https://github.com/vignesh05-r/student-registration-portal-springboot"

                                target="_blank"

                                rel="noopener noreferrer"

                                className="project-btn text-center text-decoration-none" 

                            >
                                View Project

                            </a>


                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Project