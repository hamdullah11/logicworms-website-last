import React from "react";
import PortfolioCom from "../component/portfolio";
import Accordion1 from "../element/accordion";
import Footer from "../layout/footer";
import Header from "../layout/header-3";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bg1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Portfolio</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Portfolio
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Faq --> */}
        <section
          className="content-inner"
          style={{
            backgroundImage: "url(images/background/bg1-logicworms.png)",
          }}
        >
          <div className="container">
            <PortfolioCom />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Portfolio;
