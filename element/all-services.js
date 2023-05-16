import { useState } from "react";

function AllServices() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <section
        className="content-inner"
        style={{ backgroundImage: "url(images/background/bg1-logicworms.png)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-website"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Web Development</h4>
                  <p>
                    We Carefully craft each website and make it
                    adaptable,flexible and responsive to adapt the ever-changing
                    world of technology.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-pie-charts"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Graphics Design </h4>
                  <p>
                    Our design team create solutions that are both intuitive to
                    use, and tailored to match our client's specific user tasks
                    and business goals.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-website"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Mobile Applications</h4>
                  <p>
                    We provide services in android application development with
                    heigh prfessionalsim and reasonable market price.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx-md radius bg-skyblue shadow-skyblue">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-dollar"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Content writing </h4>
                  <p>
                    A unique blend of technical, creative and qualified content
                    writers,we guarantee customer satisfaction through our
                    professional writing Services.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx-md radius bg-orange shadow-orange">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-line-graph"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">SEO/SEM</h4>
                  <p>
                    Build your search engine optimization foundation with the
                    trusted experts. We offer the right plans and strategies
                    match your exact needs.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p6"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx-md radius bg-maroon shadow-maroon">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-help"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Social Media Marketting</h4>
                  <p>
                    Grow brand awareness, engagement & traffic with our Social
                    Media Marketing Services team using social media platforms.
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllServices;
