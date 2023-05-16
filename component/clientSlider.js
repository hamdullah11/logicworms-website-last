import Slider from "react-slick";

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
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              href="https://play.google.com/store/apps/details?id=com.technologics.fakecallerid.prankcall.fakecall"
              target="_blank"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/fakecall.png"
                alt=""
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.sg.flash.on.call.and.sms&hl=en"
              target="_blank"
            >
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/fakecall.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Fake Calls</div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              href="https://play.google.com/store/apps/details?id=com.sg.flash.on.call.and.sms&hl=en"
              target="_blank"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/flash-oncall.png"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sg.flash.on.call.and.sms&hl=en"
              target="_blank"
            >
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/flash-oncall.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Flash On Call</div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              href="https://play.google.com/store/apps/details?id=com.smartgorilla.hd.wallpapers.nature.wallpapers"
              target="_blank"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/wallpepr.png"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.smartgorilla.hd.wallpapers.nature.wallpapers"
              target="_blank"
            >
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/wallpepr.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Hd Wallpapers</div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              href="https://play.google.com/store/apps/details?id=com.smartgorilla.drs.deletedphotorecovery.videorecovery.datarecoverysoftware&hl=en"
              target="_blank"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/show-files.png"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.smartgorilla.drs.deletedphotorecovery.videorecovery.datarecoverysoftware&hl=en"
              target="_blank"
            >
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/show-files.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Show Hidden Files</div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              href="https://play.google.com/store/apps/details?id=com.smartgorilla.greetings.invitation.cards.island&hl=en"
              target="_blank"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/cards.png"
                alt=""
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.smartgorilla.greetings.invitation.cards.island&hl=en">
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/cards.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Events Invitation Card Maker</div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.lpa.photoeditor.collagemaker&hl=en"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/photo-editor.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.lpa.photoeditor.collagemaker&hl=en"
            >
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/photo-editor.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Photo Editor</div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.tapslide.slideshowmaker.photoslideshow.photovideomaker&hl=en"
            >
              <img
                style={{ transform: "scale(0.8)" }}
                className="logo-main"
                src="images/logo/logic-worms/video-editor.png"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.tapslide.slideshowmaker.photoslideshow.photovideomaker&hl=en"
              target="_blank"
            >
              <img
                style={{ transform: "scale(0.8)" }}
                className="logo-hover"
                src="images/logo/logic-worms/hover/video-editor.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Photo Slideshow Maker</div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              href="https://play.google.com/store/apps/details?id=com.lpa.video.thumbnail.maker.fb.cover.photo.creator&hl=en"
              target="_blank"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/thumbenail-maker.png"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.lpa.video.thumbnail.maker.fb.cover.photo.creator&hl=en"
              target="_blank"
            >
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/thumbenail-maker.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Free Video Thumbnail Maker </div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              href="https://play.google.com/store/apps/details?id=com.cw.chat.translator.keyboard.dictonary.languages"
              target="_blank"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/chat-translater.png"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.cw.chat.translator.keyboard.dictonary.languages"
              target="_blank"
            >
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/chat-translater.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Chat translator keyboard </div>
        </div>
        <div className="item logic-worms-item-style">
          <div className="clients-logo">
            <a
              href="https://play.google.com/store/apps/details?id=com.sg.whatsdowanload.unseen&hl=en"
              target="_blank"
            >
              <img
                className="logo-main"
                src="images/logo/logic-worms/un-seen.png"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sg.whatsdowanload.unseen&hl=en"
              target="_blank"
            >
              <img
                className="logo-hover"
                src="images/logo/logic-worms/hover/un-seen.png"
                alt=""
              />
            </a>
          </div>
          <div className="text-center">Unseen Last Seen Hidden Chat</div>
        </div>
      </Slider>
    </>
  );
}

export default ClientSlider;
