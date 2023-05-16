import { useState } from "react";
import { Spinner } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function onChange(value) {
  console.log("Captcha value:", value);
}

function Quote() {
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [project, setproject] = useState("");
  const [service, setservice] = useState("");
  const [comments, setcomments] = useState("");
  const [loader, setLoader] = useState(false);

  const sendMail = () => {
    console.log(first);

    if (
      first == "" ||
      last == "" ||
      email == "" ||
      phone == "" ||
      project == "" ||
      service == ""
    ) {
      toast("Please Fill All The Fields", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setLoader(true);
    Email.send({
      Host: "sg1.asia.cpanel.hostens.cloud",
      Username: "info@logicworms.com",
      Password: "w2FYp0wjCfv;",
      To: "info@logicworms.com",
      From: email,
      Subject: `${project} - ${first} ${last} - QUERY`,
      Body: `
      Name: ${first} ${last}<br />
      Email: ${email}<br />
      Phone: ${phone}<br />
      Project: ${project}<br />
      Service: ${service}<br />
      ${comments}
      `,
    })
      .then((message) => {
        toast("🦄 Email Send Successfully", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoader(false);
      })
      .catch((message) => {
        toast(message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoader(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <section
        className="content-inner"
        style={{ backgroundImage: "url(images/background/bg1-logicworms.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-1">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  Contact Us
                </h6>
                <h2 className="title">
                  We Love To Help Great Companies To Enlarge Their Revenues.
                </h2>
              </div>
              {/* <form className="dlab-form dzForm" onSubmit={sendMail}> */}
              <div className="dzFormMsg"></div>
              <input
                type="hidden"
                className="form-control"
                name="dzToDo"
                value="Contact"
              />
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-user"></i>
                      </span>
                    </div>
                    <input
                      name="dzName"
                      type="text"
                      required
                      className="form-control"
                      placeholder="First Name"
                      value={first}
                      onChange={(e) => setfirst(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-user"></i>
                      </span>
                    </div>
                    <input
                      name="dzOther[last_name]"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Last Name"
                      value={last}
                      onChange={(e) => setlast(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-envelope"></i>
                      </span>
                    </div>
                    <input
                      name="dzEmail"
                      type="text"
                      required
                      className="form-control"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-phone"></i>
                      </span>
                    </div>
                    <input
                      name="dzOther[phone]"
                      type="text"
                      required
                      className="form-control"
                      placeholder="Phone No."
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-file-alt"></i>
                      </span>
                    </div>
                    <input
                      name="dzOther[project_title]"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Project Title"
                      value={project}
                      onChange={(e) => setproject(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-list"></i>
                      </span>
                    </div>
                    <select
                      name="dzOther[choose_service]"
                      className="form-control"
                      required
                      value={service}
                      onChange={(e) => setservice(e.target.value)}
                    >
                      <option defaultValue>Choose Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Application">
                        Mobile Application
                      </option>
                      <option value="Graphics Design">Graphics Design</option>
                      <option value="Content Writing">Content Writing</option>
                      <option value="SEO">SEO</option>
                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-sms"></i>
                      </span>
                    </div>
                    <textarea
                      name="dzMessage"
                      required
                      className="form-control"
                      placeholder="Message"
                      value={comments}
                      onChange={(e) => setcomments(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-group">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                      data-callback="verifyRecaptchaCallback"
                      data-expired-callback="expiredRecaptchaCallback"
                    ></div>
                    <input
                      className="form-control d-none"
                      style={{ display: "none" }}
                      data-recaptcha="true"
                      // required
                      data-error="Please complete the Captcha"
                    />
                  </div>
                </div>
                {/* <ReCAPTCHA
                    sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                    onChange={onChange}
                  /> */}
                {loader == false ? (
                  <div className="col-sm-12 mt-2">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn btn-link d-inline-flex align-items-center"
                      onClick={sendMail}
                    >
                      <i className="fa fa-angle-right m-r10"></i>Submit Now
                    </button>
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden"></span>
                    </Spinner>{" "}
                    <p className="mx-2 mt-3"> Please Wait!</p>
                  </div>
                )}
              </div>
              {/* </form> */}
            </div>
            <div
              className="col-xl-6 col-lg-5 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="dlab-media cf-r-img">
                <img
                  src="images/about/img2-logicworms.png"
                  className="move-1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quote;
