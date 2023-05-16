// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import protfolioModel from "./protfolioModel";
import { Modal, Button } from "react-bootstrap";

function Portfolio() {
  const [show, setShow] = useState(false);
  const [modalImage, setmodalImage] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const handleClose = () => setShow(false);
  const portfolio = [
    {
      title: "2K Tablets ",
      category: ["all", "seo"],

      imageSrc: "/images/projects/seo/2k.png",
      img: (
        <Image
          src="/images/projects/seo/2k.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",

      lnk: "https://www.2ktablets.com/",
      description:
        "2ktablets.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking top amazon products like tablets. As an Amazon Associate, we earn affiliate commissions from qualifying purchases.",
    },
    {
      title: "10 G ",
      category: ["all", "seo"],

      imageSrc: "/images/projects/seo/10g.png",
      img: (
        <Image
          src="/images/projects/seo/10g.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",

      lnk: "https://www.10coolgadgets.com/",
      description:
        "10coolgadgets is an affiliate blog created on October 11, 2019. Our prior goal is to unite people who are interested in technology. We are providing them with honest product reviews in the form of lists. We also offer daily tech news other than product reviews.",
    },

    {
      title: "BhaiTv",
      category: ["seo"],

      imageSrc: "/images/projects/seo/bhai tv.png",
      img: (
        <Image
          src="/images/projects/seo/bhai tv.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",

      lnk: "https://bhaitv.com/",
      description:
        "10coolgadgets is an affiliate blog created on October 11, 2019. Our prior goal is to unite people who are interested in technology. We are providing them with honest product reviews in the form of lists. We also offer daily tech news other than product reviews.",
    },
    {
      title: " Bhai Trending",
      category: ["seo"],

      imageSrc: "/images/projects/seo/bhaitrending.png",
      img: (
        <Image
          src="/images/projects/seo/bhaitrending.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",

      lnk: "https://bhaitrending.com/",
      description:
        "BhaiTrending has the passion for providing products of home appliances, Jewelry, smart gadgets, security camera, tech products, and electronics etc..",
    },
    {
      title: "Healthy Cyte",
      category: ["seo"],

      imageSrc: "/images/projects/seo/healthy cyte.png",
      img: (
        <Image
          src="/images/projects/seo/healthy cyte.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",

      lnk: "https://healthycyte.com/",
      description:
        "Healthycyte.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking top amazon products like tablets. As an Amazon Associate, we earn affiliate commissions from qualifying purchases.",
    },

    {
      title: "Time Sheet Management Tool",
      category: ["all", "web_development"],

      imageSrc: "/images/projects/websiteDevelopment/time mangement tool4x.png",
      img: (
        <Image
          src="/images/projects/websiteDevelopment/time mangement tool4x.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",
      description: "It is a tool that is uses to mange time",
      lnk: "https://pmprocess.in/#/auth",
    },
    {
      title: "PRESTIGE JEWELLERS",
      category: ["all", "web_development"],
      imageSrc: "/images/projects/websiteDevelopment/prestigejewellers4x.png",
      img: (
        <Image
          src="/images/projects/websiteDevelopment/prestigejewellers4x.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",
      description: "It is an online Jewellery Shop",
      lnk: "https://www.prestigejewellers.ca",
    },
    {
      title: "Travel BD",
      category: ["all", "web_development"],
      imageSrc: "/images/projects/websiteDevelopment/travel bd4x.png",
      img: (
        <Image
          src="/images/projects/websiteDevelopment/travel bd4x.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",
      description: "It is an online Jewellery Shop",
      lnk: "https://travel.a4aero.com/",
    },
    {
      title: "Title ",
      category: ["web_design"],
      imageSrc: "/images/projects/Website/doctorwebsitebig.png",
      img: (
        <Image
          src="/images/projects/Website/doctorwebsitebig.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",
      description: "Behance",
      lnk: "https://www.behance.net/badrulislam/projects",
    },
    {
      title: "Title",
      category: ["web_design"],
      imageSrc: "/images/projects/Website/quiz.png",
      img: (
        <Image
          src="/images/projects/Website/quiz.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",
      description: "Behance",
      lnk: "https://www.behance.net/badrulislam/projects",
    },
    {
      title: "Title",
      category: ["all", "web_design"],
      imageSrc: "/images/projects/Website/realestatewebsite.png",
      img: (
        <Image
          src="/images/projects/Website/realestatewebsite.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logicworms",
      description: "Behance",
      lnk: "https://www.behance.net/badrulislam/projects",
    },

    {
      title: "Stay Fit | Home Workout",
      category: ["mobile_app"],
      imageSrc: "/images/projects/mobileApp/fitness app.png",
      img: (
        <Image
          src="/images/projects/mobileApp/fitness app.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
      description:
        "Stay Home and Stay Fit app allows you to build your body in no time with some simple exercises at home",
      lnk: "https://play.google.com/store/apps/details?id=com.homeworkout.fitness.exercise.stayhome.stayfit.app",
    },
    {
      title: "Data Vault - Hide Pictures",
      category: ["all", "mobile_app"],
      imageSrc: "/images/projects/mobileApp/datavaultapp.png",
      img: (
        <Image
          src="/images/projects/mobileApp/datavaultapp.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
      description:
        "Data Vault - Hide Pictures is a powerful tool that can secure and hide your personal data like photos, videos, and other confidential data like ATMs card information, Emails and passwords, and notes.",
      lnk: "https://play.google.com/store/apps/details?id=com.logictubers.folderlock.datalock",
    },
    {
      title: "Events Invitation Card Maker",
      category: ["mobile_app"],
      imageSrc: "/images/projects/mobileApp/invitaioncardmaker.png",
      img: (
        <Image
          src="/images/projects/mobileApp/invitaioncardmaker.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
      description:
        "Digital card designing hub with multiple options and templates for making birthday cards, wedding cards, events cards, party invitation cards and much more in one single application.",
      lnk: "https://play.google.com/store/apps/details?id=com.smartgorilla.greetings.invitation.cards.island",
    },
    {
      title: "NFT Maker NFT Art - NFT Crypto",
      category: ["all", "mobile_app"],
      imageSrc: "/images/projects/mobileApp/nft creator.png",
      img: (
        <Image
          src="/images/projects/mobileApp/nft creator.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
      description:
        "NFT art maker is an amazing photo editing tool that focuses on artistic filters and creates real NFTs art.",
      lnk: "https://play.google.com/store/apps/details?id=com.logictubers.nftcreator",
    },
    {
      title: "Screen Recorder, Video Editor",
      category: ["all", "mobile_app"],
      imageSrc: "/images/projects/mobileApp/screen recorder.png",
      img: (
        <Image
          src="/images/projects/mobileApp/screen recorder.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
      description:
        "With Screen Recorder, you can record smooth and clear videos of your screen including tutorials that are perfect for YouTube. You also have the option to take screenshots easily with this tool! In addition to recording HD video content on demand like gameplays or how-to guides from internet browser windows; it's possible now even while playing games live streamed directly into one app - no need to download anything onto device just exclusive use within gaming session itself.",
      lnk: "https://bit.ly/36qtUKa",
    },
    {
      title: "Screen Recorder, Video Editor",
      category: ["all", "mobile_app"],
      imageSrc: "/images/projects/mobileApp/app.png",
      img: (
        <Image
          src="/images/projects/mobileApp/app.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
      description:
        "NFT art maker is an amazing photo editing tool that focuses on artistic filters and creates real NFTs art.",
      lnk: "https://bit.ly/36qtUKa",
    },
    {
      title: "Restaurant-logo-Food-Restaurant-Branding",
      category: ["all", "branding"],
      imageSrc: "/images/projects/branding/a restuarant.png",
      img: (
        <Image
          src="/images/projects/branding/a restuarant.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      lnk: "https://www.behance.net/gallery/118046035/Restaurant-logo-Food-Restaurant-Branding",
      description: "Restaurant logo | Food Restaurant Branding.",
      author: "Logic Worms",
    },
    {
      title: "Dragon food Delivery",
      category: ["all", "branding"],
      imageSrc: "/images/projects/branding/dragon food delivery.png",
      img: (
        <Image
          src="/images/projects/branding/dragon food delivery.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      lnk: "https://www.behance.net/gallery/129967539/Dragon-food-Delivery",
      description: "Design of a Food Delivery app",
      author: "Logic Worms",
    },
    {
      title: "Fresh Juice Branding",
      category: ["branding"],
      imageSrc: "/images/projects/branding/fresh juice logo.png",
      img: (
        <Image
          src="/images/projects/branding/fresh juice logo.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      lnk: "https://www.behance.net/gallery/132265397/Fresh-Juice-Natural-Product",
      description: "Branding of Fresh Juice",
      author: "Logic Worms",
    },
    {
      title: "Monarch logo Design",
      category: ["branding"],
      imageSrc: "/images/projects/branding/monarch.png",
      img: (
        <Image
          src="/images/projects/branding/monarch.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      lnk: "https://www.behance.net/gallery/132206187/Monarch-logo-Design",
      author: "Logic Worms",
      description: "Monarch logo Design",
    },
    {
      title: "Techintrending logo design",
      category: ["branding"],
      imageSrc: "/images/projects/branding/tech in trending logo.png",
      img: (
        <Image
          src="/images/projects/branding/tech in trending logo.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      lnk: "https://www.behance.net/gallery/134910263/techintrending-logo-design",
      description: "Techintrending logo design",
      author: "Logic Worms",
    },
    {
      title: "Rambo text Logo",
      category: ["branding"],
      imageSrc: "/images/projects/branding/upclever.png",
      img: (
        <Image
          src="/images/projects/branding/upclever.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Logic Worms",
      description: "Rambo text Logo",
      lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo",
    },
    {
      title: "Business card",
      category: ["branding"],
      imageSrc: "/images/projects/branding/bcard.png",
      img: <img src="/images/projects/branding/bcard.png" />,
      author: "Logic Worms",
      description: "Business card",
      lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo",
    },
    {
      title: "Business card",
      category: ["branding"],
      imageSrc: "/images/projects/branding/cbottle.png",
      img: <img src="/images/projects/branding/cbottle.png" />,
      author: "Logic Worms",
      description: "Business card",
      lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo",
    },
    {
      title: "Business card",
      category: ["branding"],
      imageSrc: "/images/projects/branding/cCard.png",
      img: <img src="/images/projects/branding/cCard.png" />,
      author: "Logic Worms",
      description: "Business card",
      lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo",
    },
    {
      title: "Business card",
      category: ["branding"],
      imageSrc: "/images/projects/branding/Image 36.png",
      img: <img src="/images/projects/branding/Image 36.png" />,
      author: "Logic Worms",
      description: "Business card",
      lnk: "https://www.behance.net/gallery/132342147/Rambo-text-Logo",
    },
    {
      title: "Business card",
      category: ["branding"],
      imageSrc: "/images/projects/branding/Image 39.png",
      img: <img src="/images/projects/branding/Image 39.png" />,
      author: "Logic Worms",
      description: "Business card",
      lnk: "https://www.behance.net/gallery/121558541/Social-Media-Post-Design-Instagram-Post",
    },
    {
      title: "Instagram story",
      category: ["branding"],
      imageSrc: "/images/projects/branding/Image 40.png",
      img: <img src="/images/projects/branding/Image 40.png" />,
      author: "Logic Worms",
      description: "Instagram story",
      lnk: "https://www.behance.net/gallery/121558541/Social-Media-Post-Design-Instagram-Post",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-1 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={"all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a active={"web_design"} onClick={() => setFilter("web_design")}>
              Web Design
            </a>
          </li>
          <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a
              active={"web_development"}
              onClick={() => setFilter("web_development")}
            >
              Web Development
            </a>
          </li>
          <li className={`btn ${filter === "branding" ? "active" : ""}`}>
            <a active={"branding"} onClick={() => setFilter("branding")}>
              Branding
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a active={"mobile_app"} onClick={() => setFilter("mobile_app")}>
              Mobile Apps
            </a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a active={"seo"} onClick={() => setFilter("seo")}>
              SEO
            </a>
          </li>
        </ul>
      </div>
      {/* <SimpleReactLightbox> */}
      {/* <SRLWrapper> */}
      <div className="clearfix">
        <ul id="masonry" className="row" data-column-width="3">
          {projects.map((item, i) =>
            item.filtered === true ? (
              <>
                <li
                  className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.1s"
                >
                  <div className="dlab-box style-1 m-b30">
                    <div className="dlab-media">
                      <a
                        style={{ cursor: "pointer" }}
                        target="_blank"
                        onClick={() => {
                          setShow(true);
                          setmodalImage(item.img);
                          setProjectName(item.title);
                          setDescription(item.description);
                          setLink(item.lnk);
                        }}
                      >
                        {item.img}
                      </a>
                    </div>
                  </div>
                </li>
              </>
            ) : (
              ""
            )
          )}
        </ul>
        <Modal show={show} className="mt-5" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{projectName} </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{modalImage}</p>
            <p>
              <span
                className="fw-bold"
                style={{
                  color: "#FF8700",
                }}
              >
                Project Description
              </span>
              <br />
              {description}
              <br />
              <a href={link} target="_blank">
                {link}
              </a>
            </p>
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>

      {/* </SRLWrapper> */}
      {/* </SimpleReactLightbox> */}
    </>
  );
}

export default Portfolio;
