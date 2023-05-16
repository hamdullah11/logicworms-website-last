import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{
          backgroundImage: "url(images/background/bg10-logicworms.png)",
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row align-items-center">
                <div className="col-xl-4 col-md-4">
                  <div className="footer-logo">
                    <a href="/">
                      <img src="images/Group 6.svg" alt="logo" loading="lazy" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="#">
                        <a className="icon-cell">
                          <i className="flaticon-email"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <p>
                        +92-51-2714506
                        <br />
                        info@logicworms.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="#">
                        <a className="icon-cell">
                          <i className="flaticon-location"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <p>
                        Overseas 5 commercial, <br />
                        Phase 8 Bahria Town, <br />
                        Rawalpindi Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">About Us</h5>
                  <p>
                    Logic Worms creates and implements high-level, lasting
                    services in order to help your business achieve peak
                    efficiency. We give practical, personalized solutions to
                    your computing problems, in the form of custom software,
                    cloud implementation, consulting, or whatever else may be
                    needed.
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa fa-facebook"
                          href="https://www.facebook.com/LogicWormss/"
                          target="_blank"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-linkedin"
                          href="https://www.linkedin.com/company/logicworms/"
                          target="_blank"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-behance"
                          href="https://www.behance.net/badrulislam"
                          target="_blank"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-2 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team">
                        <a>Team</a>
                      </Link>
                    </li>
                    <li>
                      <li>
                        <Link href="/portfolio">
                          <a>Portfolio</a>
                        </Link>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Services</h5>
                  <ul>
                    <li>
                      <Link href="/mobile-app-development">
                        <a>Mobile Application</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development">
                        <a>Web Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/graphics-designing">
                        <a>Graphics Designing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/socialmedia-marketing">
                        <a>Digital Marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo">
                        <a>SEO </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              ></div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  Copyright © {new Date().getFullYear()}
                  <a href="https://logicworms.com/" target="_blank">
                    &nbsp;LogicWorms
                  </a>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
