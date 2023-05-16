import Slider from "react-slick";
import MobileApps from "./MobileApps.json";

function ClientSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {MobileApps.map((app) => {
          return (
            <div className="item logic-worms-item-style" key={app.link}>
              <div className="clients-logo">
                <a href={app.link} target="_blank">
                  <img
                    className="logo-main"
                    src={app.imageUrl}
                    alt={app?.title}
                    loading="lazy"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.sg.flash.on.call.and.sms&hl=en"
                  target="_blank"
                >
                  <img
                    className="logo-hover"
                    src={app.imageUrl}
                    alt={app?.title}
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="text-center">{app?.title}</div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default ClientSlider;
