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
              <h1>Social Media Marketing</h1>
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
                  <img
                    src="images/blog/default/thum1.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="dlab-content">
                  <div className="m-b40">
                    <h3>Social Media Marketing</h3>
                    <p>
                      Social media channels have become a major source of news
                      and information in today’s internet-driven world. But
                      that’s not all. Social media presence is also a vital
                      factor in search rankings and digital marketing
                    </p>
                    <p>
                      Social media marketing is an online marketing method that
                      utilizes different social media platforms, such as
                      Facebook, Twitter, LinkedIn and Pinterest, to establish
                      brand recognition, capture customers’ attention and
                      connect brands with a broader, more diverse audience
                      segment. Social media marketing for small businesses and
                      enterprises is a powerful way to reach your prospects
                      right where they spend their time online and bolster your
                      brand engagement. A dynamic, data-driven social media
                      marketing plan can bring remarkable results to your
                      company and turn customers into brand advocates. More
                      importantly, an innovative social media marketing strategy
                      positively influences your search engine optimization
                      (SEO) and digital marketing efforts, creating more lead
                      and revenue streams for your business.
                    </p>
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
                        <img
                          src="images/video/pic3.jpg"
                          alt=""
                          loading="lazy"
                        />
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
        <section
          className="d-none"
          style={{
            backgroundImage: "url(images/background/bg5-logicworms.png)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
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
    </>
  );
}

export default ServicesDetails1;
