

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg  m-0 p-3 ">
                <div class=" container-fluid ">
                    <a class="navbar-brand fs-lg fs-2 fw-bold " href="#">Portfolio</a>
                    <button class="navbar-toggler bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto gap-3 fs-5">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#profile">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#education">Education</a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link" href="#project">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                                
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar