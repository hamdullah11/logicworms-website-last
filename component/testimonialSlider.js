import { useState } from "react";
import Slider from "react-slick";

function TestimonialSlider() {
  const [asd, setAsd] = useState();
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };
  const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div className="owl-prev" onClick={() => asd.slickPrev()}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="owl-next" onClick={() => asd.slickNext()}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
        <Slider ref={(c) => setAsd(c)} {...settings}>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            // data-wow-delay="0.2s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  “Carefully looks at the requirements and delivers without
                  complains. Professional and a good communicator. Will
                  definitely work with them again”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Mark Lee</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="item wow fadeInUp" data-wow-duration="2s" s="0.4s">
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  “Having work done on schedule, real time communication to
                  ensure the work are done nicely! Highly recommend!”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix ">
                  <strong className="testimonial-name">Nouf Almutairi</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="item wow fadeInUp" data-wow-duration="2s" s="0.6s">
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>“Great individuals to work with ”</p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Olha Bahlyk</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="item wow fadeInUp" data-wow-duration="2s" s="0.6s">
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  “Highly Knowledgeable in Android development. Great
                  Communication skills and showed excellent results with fast
                  deliverables. I will definitely work with them again for
                  future updates ”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">
                    PILOT COMMUNICATIONS
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {renderArrows()}
      </div>
    </>
  );
}

export default TestimonialSlider;
