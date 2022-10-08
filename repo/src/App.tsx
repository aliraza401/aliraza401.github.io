import "./assets/css/bootstrap-icons.css";
import info from "./_mocks/data";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Banner />
        <MyStory />
        <SectionInforamtion />
        <Stack />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}

const NavBar = () => {
  return (
    <>
      <section className="preloader">
        <div className="spinner">
          <span className="spinner-rotate" />
        </div>
      </section>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand mx-auto mx-lg-0">{info.name}</a>
          <div className="d-flex align-items-center d-lg-none">
            <i className="navbar-icon bi-telephone-plus me-3" />
            <a className="custom-btn btn" href="#section_5">
              {info.phone}
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-lg-flex align-items-center d-none ms-auto">
              <i className="navbar-icon bi-telephone-plus me-3" />
              <a className="custom-btn btn" href="#section_5">
                {info.phone}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Banner = () => {
  return (
    <section
      className="hero d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="hero-text">
              <div className="hero-title-wrap d-flex align-items-center mb-4">
                <img
                  src={info.img_front}
                  className="avatar-image avatar-image-large img-fluid"
                  alt=""
                />
                <h1 className="hero-title ms-3 mb-0">{info.hello}</h1>
              </div>
              <h2 className="mb-4">{info.short_bio}</h2>
              <p className="mb-4">
                <a
                  className="custom-btn btn custom-link"
                  target={"_blank"}
                  href={info.link_linkedin}
                >
                  Let's Connect
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12 position-relative">
            <div className="hero-image-wrap" />
            <img
              src={info.img_background}
              className="hero-image img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#535da1"
          fillOpacity={1}
          d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        />
      </svg>
    </section>
  );
};

const MyStory = () => {
  return (
    <section className="about section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src={info.img_banner}
              className="about-image img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="about-thumb">
              <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                <h2 className="text-white me-4 mb-0">My Story</h2>
                <img
                  src={info.img_front}
                  className="avatar-image img-fluid"
                  alt=""
                />
              </div>
              <h3 className="pt-2 mb-3">
                a little bit about {info.name.split(" ")[0]}
              </h3>
              <p>{info.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionInforamtion = () => {
  return (
    <section className="featured section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="profile-thumb">
              <div className="profile-title">
                <h4 className="mb-0">Information</h4>
              </div>
              <div className="profile-body">
                <p>
                  <span className="profile-small-title">Name</span>
                  <span>{info.name}</span>
                </p>
                <p>
                  <span className="profile-small-title">Birthday</span>
                  <span>{info.dob}</span>
                </p>
                <p>
                  <span className="profile-small-title">Phone</span>
                  <span>
                    <a href={`tel:${info.phone}`}>{info.phone}</a>
                  </span>
                </p>
                <p>
                  <span className="profile-small-title">Email</span>
                  <span>
                    <a href={`mailto:${info.email}`}>{info.email}</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="about-thumb">
              <div className="row">
                <div className="col-lg-6 col-6 featured-border-bottom py-2">
                  <strong className="featured-numbers">
                    {info.years_experience}
                  </strong>
                  <p className="featured-text">Years of Experiences</p>
                </div>
                <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                  <strong className="featured-numbers">
                    {info.stackoverflow_rating}
                  </strong>
                  <p className="featured-text">Stackoverflow Reputation</p>
                </div>
                <div className="col-lg-6 col-6 pt-4">
                  <strong className="featured-numbers">
                    {info.project_fininhed}
                  </strong>
                  <p className="featured-text">Project Finished</p>
                </div>
                <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                  <strong className="featured-numbers">{info.awards}</strong>
                  <p className="featured-text">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stack = () => {
  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12 col-12">
            <h3 className="text-center mb-4">Tech Stack I've had worked</h3>
          </div>
          {info.techStackLogos.map((item) => (
            <div className="col-lg-2 col-4 clients-item-height d-flex align-items-center mt-4">
              <img src={item} className="clients-image img-fluid" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="projects section-padding" id="section_4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img
                src={info.img_projects}
                className="avatar-image img-fluid"
                alt=""
              />
              <h2 className="text-white ms-4 mb-0">Projects</h2>
            </div>
          </div>
          <div className="clearfix" />

          {info.projects.map((project) => (
            <div className="col-lg-4 col-md-6 col-12">
              <div className="projects-thumb">
                <div className="projects-info">
                  <small className="projects-tag">{project.type}</small>
                  <h3 className="projects-title">{project.name}</h3>
                </div>
                <a href={project.link} target="_blank" className="popup-image">
                  <img
                    src={project.img}
                    className="projects-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact section-padding" id="section_5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img
                src={info.img_contact}
                className="avatar-image img-fluid"
                alt=""
              />
              <h2 className="text-white ms-4 mb-0">Say Hi</h2>
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-lg-6 col-md-6 col-12 pe-lg-0">
            <div className="contact-info contact-info-border-start d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">
                Services
              </strong>
              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <span className="footer-menu-link">Websites</span>
                </li>
              </ul>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Stay connected
              </strong>
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a
                    href={info.link_github}
                    target="_blank"
                    className="social-icon-link bi-github"
                  />
                </li>
                <li className="social-icon-item">
                  <a
                    href={info.link_stackoverflow}
                    className="social-icon-link bi-stack-overflow"
                    target="_blank"
                  />
                </li>
                <li className="social-icon-item">
                  <a
                    href={info.link_linkedin}
                    className="social-icon-link bi-linkedin"
                    target="_blank"
                  />
                </li>
                <li className="social-icon-item">
                  <a
                    href={info.link_instagram}
                    className="social-icon-link bi-instagram"
                    target="_blank"
                  />
                </li>
                <li className="social-icon-item">
                  <a
                    href={info.link_twitter}
                    className="social-icon-link bi-twitter"
                    target="_blank"
                  />
                </li>
              </ul>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Who am i
              </strong>
              <p className="mb-0">{info.short_bio}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 ps-lg-0">
            <div className="contact-info d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">About</strong>
              <p className="mb-2">{info.bio}</p>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Email
              </strong>
              <p>
                <a href={`mailto:${info.email}`}>{info.email}</a>
              </p>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Call
              </strong>
              <p className="mb-0">
                <a href={`tel:${info.phone}`}>{info.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="copyright-text-wrap">
              <p className="mb-0">
                <span className="copyright-text">Coding is Potery.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
