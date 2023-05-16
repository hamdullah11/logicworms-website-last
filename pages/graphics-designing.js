import Footer from "../layout/footer";
import Header from "../layout/header-3";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import AllServices from "../element/all-services";
import Link from "next/link";

function ServicesDetails1() {
  const [isOpen, setOpen] = useState(false);
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
              <h1>Graphics Designing</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services Details
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Services Details --> */}
        <section
          className="content-inner-2"
          style={{
            backgroundImage: "url(images/background/bg1-logicworms.png)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="dlab-media m-b30 rounded-md">
                  <img src="images/blog/default/thum1.jpg" alt="" />
                </div>
                <div className="dlab-content">
                  <div className="m-b40">
                    <h3>Graphics Designing</h3>
                    <p>
                      In a world increasingly driven by visual content,
                      businesses and individuals are constantly searching for
                      the “best way to stand out” among a crowded field.
                    </p>
                    <p>
                      Perhaps you would like insights about how your competitors
                      are approaching graphic design services. We at Logic Worms
                      can study the competition and evaluate how you can
                      differentiate your company by adjusting your graphic
                      design strategies.
                    </p>
                    <p>
                      Below is the list of how our team is showing its expertise
                      in the field of Graphic designing:
                    </p>
                    <ul>
                      <li>UI/UX Designing</li>
                      <li>Social Media Targeted designing</li>
                      <li>Brand Identity Design</li>
                      <li>Website Template Design</li>
                      <li>Video Editing</li>
                    </ul>
                  </div>
                  <div className="row d-none">
                    <div className="col-lg-6">
                      <h3>How You Start Web Development ?</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley.
                      </p>
                      <ul className="list-arrow primary m-b30">
                        <li>
                          Lorem Ipsum is simply dummy text of the printing.
                        </li>
                        <li>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever.
                        </li>
                        <li>
                          when an unknown printer took a galley of type and
                          scrambled.
                        </li>
                        <li>
                          It has survived not only five centuries, but also the
                          leap.
                        </li>
                        <li>
                          Recently with desktop publishing software like Aldus
                          PageMaker.
                        </li>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing
                          industry.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="video-bx style-3">
                        <img src="images/video/pic3.jpg" alt="" />
                        <div className="video-btn">
                          <a
                            href="#"
                            className="popup-youtube"
                            onClick={() => setOpen(true)}
                          >
                            <i className="flaticon-play"></i>
                          </a>
                        </div>
                        <ModalVideo
                          channel="youtube"
                          autoplay
                          isOpen={isOpen}
                          videoId="UpolBSznWp0"
                          onClose={() => setOpen(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Service --> */}
        <AllServices />

        {/* <!-- Call To action --> */}
      </div>
      <Footer />
    </>
  );
}

export default ServicesDetails1;
