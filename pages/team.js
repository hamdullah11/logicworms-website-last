import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header-3";
import { Modal } from "react-bootstrap";
import { useState } from "react";

import team from "../component/team.json";

function Team1() {
  const [show, setShow] = useState(false);
  const [teamMember, SetTeamMember] = useState();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState(["", "", "", ""]);
  const [socialLinks, setsocialLinks] = useState([
    "fa-linkedin",
    "fa-instagram",
    "fa-twitter",
  ]);
  const handleClose = () => setShow(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Team</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{
            backgroundImage: "url(images/background/bg1-logicworms.png)",
          }}
        >
          <div className="container">
            <div className="row">
              {team.employees.map((member) => {
                return (
                  <div
                    className="col-xl-4 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                    onClick={() => {
                      setShow(true);
                      SetTeamMember(member);
                    }}
                  >
                    <div className="dlab-team style-1 m-b30">
                      <div
                        className="dlab-media dlab-img-effect zoom zoom-slow"
                        style={{ cursor: "pointer" }}
                      >
                        <img src={member?.image} alt="img" />
                      </div>
                      <div className="dlab-content">
                        <div className="clearfix">
                          <h4 className="dlab-name">
                            <span>{member?.name}</span>
                          </h4>
                          <span className="dlab-position">
                            {member?.position}
                          </span>
                        </div>
                        <ul className="dlab-social-icon primary-light">
                          {member?.SocialLinks?.map((item) => (
                            <li>
                              <a
                                href={item.link}
                                target="_blank"
                                className={item.icon}
                              ></a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* <!-- Call To action --> */}
        <section
          style={{
            backgroundImage: "url(images/background/bg5-logicworms.png)",
            backgroundSize: "cover",
          }}
        >
          <div className="container d-none">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    More With Us
                  </h6>
                  <h2 className="title">
                    You Want To Showcase Your Website In Top Join With Us
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <Link href="/contact-us-1">
                  <a className="btn btn-link d-inline-flex align-items-center">
                    <i className="fa fa-angle-right m-r10"></i>Join Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Modal show={show} className="mt-5" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={teamMember?.image} width={500} height={500} />

          <span
            className="fw-bold "
            style={{
              color: "#FF8700",
            }}
          >
            <h4 className="mb-0 mt-3">{teamMember?.name}</h4>
            <span className="dlab-position">{teamMember?.position}</span>
          </span>
          <span>
            <br />
            {about}
          </span>
          <h5 className="mt-1">Skills</h5>
          <ul style={{ listStyleType: "square" }}>
            {teamMember?.skills.map((element) => (
              <li>
                <i
                  class="fa fa-solid fa-caret-right mx-2"
                  style={{ color: "#FF8700", fontSize: "20px" }}
                ></i>
                {element}
              </li>
            ))}
          </ul>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <ul className="dlab-social-icon primary-light">
            {teamMember?.SocialLinks.map((item) => (
              <li>
                <a href={item?.link} className={item?.icon} target="_blank"></a>
              </li>
            ))}
          </ul>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Team1;
