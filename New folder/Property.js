import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import ContactUs from "../ContactUs";
import { Image } from "cloudinary-react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {
  FaFireExtinguisher,
  FaHamburger,
  FaParking,
  FaRegBuilding,
  FaRunning,
  FaShoppingCart,
  FaSwimmer,
  FaTableTennis,
} from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { GiCctvCamera, GiTennisCourt } from "react-icons/gi";
import { MdDesktopMac, MdGroup, MdRestaurant } from "react-icons/md";
export default function Property() {
  const [two, settwo] = useState(false);
  const [three, setthree] = useState(false);
  const [four, setfour] = useState(false);
  const [five, setfive] = useState(false);
  const [plot, setplot] = useState(false);
  const [villa, setvilla] = useState(false);

  // console.log("two is ", two)

  const router = useRouter();
  const [result, setResult] = useState([]);
  const [id, setId] = useState("");
  // console.log(result)

  useEffect(async () => {
    if (!router.isReady) return;

    setId(router.query.title);
    if (id) {
      await axios
        .get("/api/admin/property/" + id)
        .then((res) => {
          setResult(res.data);
        })
        .catch((err) => {
          console.log("error here is ", err.response.data);
        });
    }
  }, [router.isReady, id, router.query]);

  const options = {
    arrows: false,
    duration: 3000,
    indicators: true,
    easing: "ease",
  };

  function setTwoTrue() {
    // console.log("setting two true")
    settwo(true);
    setthree(false);
    setfour(false);
    setfive(false);
    setplot(false);
    setvilla(false);
  }
  function setThreeTrue() {
    settwo(false);
    setthree(true);
    setfour(false);
    setfive(false);
    setplot(false);
    setvilla(false);
  }
  function setFourTrue() {
    settwo(false);
    setthree(false);
    setfour(true);
    setfive(false);
    setplot(false);
    setvilla(false);
  }
  function setFiveTrue() {
    settwo(false);
    setthree(false);
    setfour(false);
    setfive(true);
    setplot(false);
    setvilla(false);
  }
  function setPlotTrue() {
    settwo(false);
    setthree(false);
    setfour(false);
    setfive(false);
    setplot(true);
    setvilla(false);
  }
  function setVillaTrue() {
    settwo(false);
    setthree(false);
    setfour(false);
    setfive(false);
    setplot(false);
    setvilla(true);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Enn Arr Realtors - {result.name} </title>
        <meta name="description" content={result.description}></meta>
        <meta property="og:title" content={result.name} key="ogtitle" />
        <meta
          property="og:description"
          content={result.description}
          key="ogdesc"
        />
        <link
          rel="preload"
          href="/fonts/fontRegular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/fontBold.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/fontItalic.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <header className="header_color">
        <section className="nav lfloat">
          <a href="index.html">
            <div className="logo gry">
              <span>
                <img
                  src="http://omaxethelake.online/assets/images/logo.png"
                  className="logo_original"
                />
              </span>
            </div>
          </a>
        </section>
        <section className="rfloat">
          <nav className="block lfloat relative">
            <a id="menu-toggle" className="anchor-link">
              <img
                src="http://omaxethelake.online/assets/images/menu.jpg"
                alt=""
              />
            </a>
            <ul id="menu">
              <li>
                <a href="#about">OVERVIEW</a>
              </li>
              <li>
                <a href="#highlights">HIGHLIGHTS</a>
              </li>
              <li>
                <a href="#price">PRICE</a>
              </li>
              <li>
                <a href="#brands">FLORE PLANS</a>
              </li>
              <li>
                <a href="#location">LOCATION</a>
              </li>
              <li>
                <a href="#construction-update">SITE PUCTURES</a>
              </li>
              <li>
                <a href="#palms">ABOUT</a>
              </li>
            </ul>
          </nav>
          <div className="contact lfloat bc-grn">
            <a className="wht">
              <i className="icon-call-center"></i> Contact Us
            </a>
          </div>
        </section>
        <div className="clearfix"></div>
      </header>
      <div className="gallery">
        <div className="picture-gallery slider">
          <img
            src="http://omaxethelake.online/assets/images/gallery/1.jpg"
            alt=""
          />
          <img
            src="http://omaxethelake.online/assets/images/gallery/2.jpg"
            alt=""
          />
          <img
            src="http://omaxethelake.online/assets/images/gallery/3.jpg"
            alt=""
          />
        </div>
      </div>
      <ul className="highlights">
        <li className="bc-dblue wht bbox calign">
          <i className="icon-mall"></i>
          <span>Property Type</span>
          <br />
          2|3|4 BHK Luxury Apartments
        </li>
        <li className="bc-blue wht bbox calign">
          <i className="icon-navigation"></i>
          <span>Location</span>
          <br />
          New Chandigarh
        </li>
        <li className="bc-grn wht bbox calign">
          <i className="icon-feature"></i>
          <span>Highlights</span>
          <br />
          <small> Near Chandigarh</small>
          <br />
        </li>
        <li className="bc-ylo wht bbox calign">
          <i className="icon-money"></i>
          <span>Investment</span>
          <br /> Rs. 45 Lac Onwards*
        </li>
        <li className="bc-red wht bbox calign">
          <i className="icon-gift"></i>
          <span>Project</span>
          <br />
          Finanace from all Banks
        </li>
        <li className="bc-prpl wht bbox calign">
          <i className="icon-construction"></i>
          <span>Status</span>
          <br />
          Possession Soon
        </li>
        <div className="clearfix"></div>
      </ul>
      <div id="about" className="container relative bc-wht">
        <h2 className="calign blue upper">
          <p className="calign gry">About</p>{" "}
        </h2>
        <p className="gry justify small">
          If you have been looking for a premium 2 BHK flat in Chandigarh, The
          Lake by Omaxe Group is an ideal choice. Omaxe has constructed 1300+
          units with 18 towers towards meeting the demand of a dream home and a
          good investment opportunity in New Chandigarh. Rapidly developing
          infrastructure, booming commerce, and abundant amenities on offer at
          New Chandigarh have created a growing demand for houses here. The
          significance of the locality has been rising with the expansion of the
          city. It has now become the most preferred destination for real estate
          investments. Whether you have been looking to buy a 2 or 3 BHK flat in
          Chandigarh as a first-time buyer or as an investor, New Chandigarh, is
          a promising location. The Lake by Omaxe Group is an ultraluxurious
          skyline community that houses 2, 3, 4 BHK flats and villas. These
          magnificent apartments are the ideal combination of convenience and
          luxury that’ll redefine the experience of premium residential space.
        </p>
      </div>
      <div className="bc-grn relative" id="highlights">
        <div className="col-50 lfloat">
          <img
            src="http://omaxethelake.online/assets/images/shopping.png"
            className="block mwidth"
            alt="DP Architects"
          />
        </div>
        <div className="col-50 lfloat container2 bbox">
          <h3 className="wht big-text"> Highlights</h3>
          <ul className="list wht">
            <li>
              <strong>Offering 2|3|4 BHK Luxury Flats </strong>
            </li>
            <li>
              <strong>Located on Omaxe New Chandigarh </strong>
            </li>
            <li>
              <strong>Near Chandigarh </strong>
            </li>
            <li>
              <strong>Price Starting at Rs. 45 Lacs Onward*</strong>
            </li>
            <li>
              <strong>Kids Play Area,Punjab Govt Approved</strong>
            </li>

            <li>
              <strong>Possession Ready </strong>
            </li>
            <li>
              <strong>Finance from All Govt & Private Banks</strong>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
      <div id="price" className="container bc-wht relative">
        <h3 className="calign blue big-text">Best Investment Options</h3>
        <table className="table wht">
          <tr>
            <th className="bc-blue">Type</th>
            <th className="bc-ylo">Size (PSF)</th>
            <th className="bc-grn">Price (SF)</th>
            <th className="bc-gry red">Status</th>
          </tr>
          <tr>
            <td className="bc-blue">2 BHK Flat</td>
            <td className="bc-ylo">1285 Sq.ft.</td>
            <td className="bc-grn">On Request</td>
            <td className="bc-gry red">Possession Soon</td>
          </tr>
          <tr>
            <td className="bc-blue">3 BHK Flat</td>
            <td className="bc-ylo">1530 & 1580 Sq.ft.</td>
            <td className="bc-grn">On Request</td>
            <td className="bc-gry red">Possession Soon</td>
          </tr>
          <tr>
            <td className="bc-blue">3 BHK Flat+ Utility</td>
            <td className="bc-ylo">1820,1885,1850 & 1920 Sq.ft.</td>
            <td className="bc-grn">On Request</td>
            <td className="bc-gry red">Possession Soon</td>
          </tr>
          <tr>
            <td className="bc-blue">3 BHK + Servant Flat</td>
            <td className="bc-ylo">2300 Sq.ft.</td>
            <td className="bc-grn">On Request</td>
            <td className="bc-gry red">Possession Soon</td>
          </tr>
          <tr>
            <td className="bc-blue">4 BHK Flat</td>
            <td className="bc-ylo">2300 Sq.ft.</td>
            <td className="bc-grn">On Request</td>
            <td className="bc-gry red">Possession Soon</td>
          </tr>
          <tr>
            <td className="bc-blue">4 BHK + Servant Flat</td>
            <td className="bc-ylo">2760 & 4850 Sq.ft.</td>
            <td className="bc-grn">On Request</td>
            <td className="bc-gry red">Possession Soon</td>
          </tr>
          <tr>
            <td className="bc-blue">Penthouses</td>
            <td className="bc-ylo">4450,5300 & 9400 Sq.ft.</td>
            <td className="bc-grn">On Request</td>
            <td className="bc-gry red">Possession Soon</td>
          </tr>
        </table>
        <p className="blk small calign">
          ** Rates revising soon. Price mentioned above is basic sale price
          only, other charges extra.
        </p>
      </div>

      <div className="bc-gry relative" id="partners"></div>

      <div id="brands" className="container-full">
        <h4 className="calign blue upper">FLOOR PLAN</h4>
        <div className="update slider">
          <a
            href="http://omaxethelake.online/assets/images/plans/1.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://omaxethelake.online/assets/images/plans/1.jpg"
              alt=""
            />
          </a>
          <a
            href="http://omaxethelake.online/assets/images/plans/2.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://omaxethelake.online/assets/images/plans/2.jpg"
              alt=""
            />
          </a>
          <a
            href="http://omaxethelake.online/assets/images/plans/3.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://omaxethelake.online/assets/images/plans/3.jpg"
              alt=""
            />
          </a>
        </div>
      </div>

      <div id="location" className="bc-gry relative">
        <div className="col-50 lfloat">
          <a
            data-fancybox="gallery"
            href="http://omaxethelake.online/assets/images/location.jpg"
          >
            <img
              src="http://omaxethelake.online/assets/images/location.jpg"
              className="mwidth block"
              alt="Location Map Aipl Joy Square"
            />
          </a>
        </div>
        <div className="col-50 lfloat container2 bbox">
          <h3 className="blue">Location &amp; Connectivity</h3>
          <ul className="list gry">
            <li>New Chandigarh Is The First Eco-City Of Punjab.</li>
            <li>Hub Of Non-Polluting Industries Like IT And Hospitals</li>
            <li> Education City Coming Up In The Vicinity</li>

            <li> Proximity To Shivalik Range</li>

            <li>Medicity Coming Up In The Vicinity</li>

            <li>Ease Of Connectivity Through Dakshin Marg And Madhya Marg </li>
          </ul>
          <p className="justify gry">&nbsp;</p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div id="construction-update" className="container-full">
        <h4 className="calign blue upper">ACTUAL IMAGES </h4>
        <div className="update slider">
          <a
            href="http://omaxethelake.online/assets/images/construction-update/1.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://omaxethelake.online/assets/images/construction-update/1.jpg"
              alt=" Actual Site Pictures"
            />
          </a>
          <a
            href="http://omaxethelake.online/assets/images/construction-update/2.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://omaxethelake.online/assets/images/construction-update/2.jpg"
              alt=" Actual Site Pictures"
            />
          </a>
          <a
            href="http://omaxethelake.online/assets/images/construction-update/3.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://omaxethelake.online/assets/images/construction-update/3.jpg"
              alt=" Actual Site Pictures"
            />
          </a>
          <a
            href="http://omaxethelake.online/assets/images/construction-update/4.jpg"
            data-fancybox="gallery"
          >
            <img
              src="http://omaxethelake.online/assets/images/construction-update/4.jpg"
              alt=" Actual Site Pictures"
            />
          </a>
        </div>
      </div>
      <div id="palms" className="bbox container relative">
        <h4 className="calign blue upper">About </h4>
        <p className="gry justify small">
          If you have been looking for a premium 2 BHK flat in Chandigarh, The
          Lake by Omaxe Group is an ideal choice. Omaxe has constructed 1300+
          units with 18 towers towards meeting the demand of a dream home and a
          good investment opportunity in New Chandigarh. Rapidly developing
          infrastructure, booming commerce, and abundant amenities on offer at
          New Chandigarh have created a growing demand for houses here. The
          significance of the locality has been rising with the expansion of the
          city. It has now become the most preferred destination for real estate
          investments. Whether you have been looking to buy a 2 or 3 BHK flat in
          Chandigarh as a first-time buyer or as an investor, New Chandigarh, is
          a promising location. The Lake by Omaxe Group is an ultraluxurious
          skyline community that houses 2, 3, 4 BHK flats and villas. These
          magnificent apartments are the ideal combination of convenience and
          luxury that’ll redefine the experience of premium residential space.
        </p>
      </div>
      <footer className="container" style={{ backgroundDolor: "black" }}>
        <section className="nav lfloat">
          <a href="index.html">
            <div className="logo gry">
              <span>
                <img
                  src="http://omaxethelake.online/assets/images/logo.png"
                  className="logo_original"
                  style={{ margin: "0px" }}
                />
              </span>
            </div>
          </a>
        </section>
        <section className="rfloat">
          <nav className="block lfloat relative">
            <a id="menu-toggle" className="anchor-link">
              <img
                src="http://omaxethelake.online/assets/images/menu.jpg"
                alt=""
              />
            </a>
            <ul id="menu">
              <li>
                <a href="#about">OVERVIEW</a>
              </li>
              <li>
                <a href="#highlights">HIGHLIGHTS</a>
              </li>
              <li>
                <a href="#price">PRICE</a>
              </li>
              <li>
                <a href="#brands">FLORE PLANS</a>
              </li>
              <li>
                <a href="#location">LOCATION</a>
              </li>
              <li>
                <a href="#construction-update">SITE PUCTURES</a>
              </li>
              <li>
                <a href="#palms">ABOUT</a>
              </li>
            </ul>
          </nav>
          <div className="contact lfloat bc-grn">
            <a className="wht">
              <i className="icon-call-center"></i> Contact Us
            </a>
          </div>
        </section>
        <div className="clearfix"></div>
      </footer>
      <div className="quickquery">
        <div className="query bc-wht calign">
          <span className="close blk">&times;</span>
          <div className="formtitle cursor blk">
            <i className="icon-call-center"></i> Instant Call Back
          </div>

          <form
            action="http://omaxethelake.online/thanks.php"
            id="contact-form"
            method="post"
            name="form"
            autocomplete="off"
          >
            <input
              type="text"
              name="name"
              className="popup-input2 left"
              placeholder="Name"
              data-rule="maxlen:4"
              data-msg="Please enter at least 4 chars"
              required=""
            />

            <input
              type="text"
              className="popup-input2 left"
              name="email"
              placeholder="Email ID"
              data-rule="email"
              data-msg="Please enter a valid email"
              required=""
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
            />

            <input
              type="text"
              className="popup-input2 left"
              name="mobile"
              placeholder="Mobile"
              data-rule="maxlen:4"
              data-msg="Please enter at least 10 chars of Number"
              required=""
              pattern="[0-9]{10}"
            />

            <button
              type="submit"
              name="submit"
              value="Submit"
              className="btn green"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
