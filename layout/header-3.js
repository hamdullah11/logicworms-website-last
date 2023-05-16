import Link from "next/link";
import { useEffect, useState } from "react";
function Header3() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");

  /* for class fixed  */
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      {/* <!-- Header --> */}
      <header
        className="site-header header-transparent mo-left"
        id="fix-header"
      >
        {/* <!-- Main Header --> */}
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            scroll ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark">
                <Link href="/">
                  <a>
                    <img
                      className="custom-logo-white"
                      src="images/logicWormslogo-white.svg"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      className="custom-logo"
                      src="images/logicWormslogo.svg"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? "open" : ""
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="contact">
                    <a className="btn btn-corner gradient btn-primary">
                      <i className="fa fa-angle-right m-r10"></i>Get A Quote
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link href="/">
                    <a>
                      <img
                        src="images/logicWormslogo.svg"
                        alt=""
                        loading="lazy"
                      />
                    </a>
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar">
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
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <a onClick={() => setOpen("services")}>
                      <span>Services</span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/web-development">
                          <a>Web</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-app-development">
                          <a>android</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/graphics-designing">
                          <a>Graphics</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/seo">
                          <a>SEO</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/socialmedia-marketing">
                          <a>Social Media Marketing</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/team">
                      <a>Team</a>
                    </Link>
                  </li>

                  <li className="">
                    <Link href="/portfolio">
                      <a>Portfolio</a>
                    </Link>
                  </li>

                  <li className={`d-none ${open === "about" ? "open" : ""}`}>
                    <a onClick={() => setOpen("about")}>
                      <span>Pages</span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/about-us-1">
                          <a>About Us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq-1">
                          <a>Faq</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pricing-table-1">
                          <a>Pricing Table</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team">
                          <a>Team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/coming-soon">
                          <a>Coming Soon</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/error-404">
                          <a>Error 404</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/sitedown">
                          <a>Site Down</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className={`d-none ${open === "blog" ? "open" : ""}`}>
                    <a onClick={() => setOpen("blog")}>
                      <span>Blog</span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/blog-large-right-sidebar">
                          <a>Large Right Sidebar</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details-1">
                          <a>Blog Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://www.facebook.com/LogicWormss/">
                      <a target="_blank" className="fa fa-facebook"></a>
                    </Link>
                    {/* <Link href="https://twitter.com/login?lang=en">
                      <a className="fa fa-twitter"></a>
                    </Link> */}
                    <Link href="https://www.linkedin.com/company/logicworms/">
                      <a target="_blank" className="fa fa-linkedin"></a>
                    </Link>
                    <Link href="https://www.behance.net/badrulislam">
                      <a target="_blank" className="fa fa-behance"></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header3;
