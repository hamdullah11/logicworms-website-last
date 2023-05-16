import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img
                  src="images/about/img4-logicworms.png"
                  className="move-1"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  About Us
                </h6>
                <h2 className="title">
                  How We Can Help You Achieve Your Business Goal
                </h2>
              </div>
              <p>
                Logic Worms is a software development company that provides
                innovative, high-quality software solutions to start-ups, SMBs
                and large enterprises. We have been in the industry for more
                than 5 years and our team has extensive experience in providing
                custom programming services to clients across the globe.
                Partnering with us will help you obtain a competitive advantage
                through quality custom development services.
              </p>
              <p className="m-b30">
                Our expert team of developers has the expertise to build
                scalable applications that are fast, reliable and have excellent
                user experience. Your thinking is our production. We will
                analyze, test and implement in accordance with the appropriate
                standards.
              </p>
              {/* <img src="images/sign.png" alt="" /> */}
              <h4 className="m-b30">Logic Worms</h4>
              <Link href="/about">
                <a className="btn btn-link d-inline-flex align-items-center">
                  <i className="fa fa-angle-right m-r10"></i>Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
