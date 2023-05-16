import Slider from "react-slick";
import Image from "next/image";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import Team from "./team.json";

function TeamSlider() {
  const [show, setShow] = useState(false);
  const [TeamMember, setTeamMember] = useState(false);

  const handleClose = () => setShow(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    speed: 4000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const handleModalPop = (member) => {
    setShow(true);
    setTeamMember(member);
  };

  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        {Team.employees.map((member) => {
          return (
            <div
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
              onClick={() => {
                handleModalPop(member);
              }}
            >
              <div className="dlab-team style-1 m-b10">
                <div className="dlab-media" style={{ cursor: "pointer" }}>
                  <img src={member.image} alt="" />
                </div>
                <div className="dlab-content">
                  <div className="clearfix">
                    <h4 className="dlab-name">
                      <span>{member?.name}</span>
                    </h4>
                    <span className="dlab-position">{member?.position}</span>
                  </div>
                  <ul className="dlab-social-icon primary-light">
                    {member?.SocialLinks?.map((item) => {
                      return (
                        <li>
                          <a
                            href={item.link}
                            target="_blank"
                            className={item.icon}
                          ></a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <Modal show={show} className="mt-5" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={TeamMember?.image}
            width={500}
            height={500}
            loading="lazy"
          />

          <span
            className="fw-bold "
            style={{
              color: "#FF8700",
            }}
          >
            <h4 className="mb-0 mt-3">{TeamMember?.name}</h4>
            <span className="dlab-position">{TeamMember?.position}</span>
          </span>
          <span>
            <br />
            {TeamMember?.about}
          </span>
          <h5 className="mt-1">Skills</h5>
          <ul style={{ listStyleType: "square" }}>
            {TeamMember?.skills?.map((skill) => (
              <li>
                <i
                  class="fa fa-solid fa-caret-right mx-2"
                  style={{ color: "#FF8700", fontSize: "20px" }}
                ></i>
                {skill}
              </li>
            ))}
          </ul>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <ul className="dlab-social-icon primary-light">
            {TeamMember?.SocialLinks?.map((item) => (
              <li>
                <a
                  href={item?.link}
                  className={`${item?.icon}`}
                  target="_blank"
                ></a>
              </li>
            ))}
          </ul>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TeamSlider;
