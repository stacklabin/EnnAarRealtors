import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import ContactUs from "../ContactUs";
import EnquiryFormProperty from "../EnquiryFormProperty";
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
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { BiBuildingHouse } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import {
  GiCctvCamera,
  GiTennisCourt,
  GiHandOk,
  GiProgression as GrInProgress,
} from "react-icons/gi";
import { MdDesktopMac, MdGroup, MdRestaurant } from "react-icons/md";
import Header from "../Header";
export default function Property() {
  const [two, settwo] = useState(false);
  const [three, setthree] = useState(false);
  const [four, setfour] = useState(false);
  const [five, setfive] = useState(false);
  const [plot, setplot] = useState(false);
  const [villa, setvilla] = useState(false);
  let tmpItem=0;
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

  const slideImages = [
    "/images/a1.jpg",
    "/images/a2.jpg",
    "/images/a3.jpg",
    "/images/a4.jpg",
    "/images/a5.jpg",
    "/images/a6.jpg",
    "/images/a7.jpg",
    "/images/a8.jpg",
  ];

  const slideImages2 = [
    "http://omaxethelake.online/assets/images/construction-update/1.jpg",
    "http://omaxethelake.online/assets/images/construction-update/2.jpg",
    "http://omaxethelake.online/assets/images/construction-update/3.jpg",
    "http://omaxethelake.online/assets/images/construction-update/4.jpg",
  ];

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
      {/* <Header /> */}

      <div className="gallery mart-0">
        <div className="picture-gallery slider">
        {
                result && result.imagesArray?(<>
                <section>
                <div className="slide-container">
                <Slide {...options}>
                {
                    result.imagesArray.map((item) => {
                        return (                            
                            <div key={item} className="each-slide background text-white h-auto h-min-hight">
                                <Image className="background-image2 lighter" cloudName="enn-aar-group" width="100%"  crop="scale" publicId={item}/>
                            </div>
                        )
                    })
                }
                </Slide>
                </div>
                </section>
                </>):(<></>)
            }
            
          {/* <div className="slide-container">
            
            <Slide>
              <div className="each-slide">
                <div
                  style={{
                    height: "500px",
                    backgroundImage: `url(${slideImages[0]})`,
                  }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{
                    height: "500px",
                    backgroundImage: `url(${slideImages[1]})`,
                  }}
                ></div>
              </div>
              <div className="each-slide">
                <div
                  style={{
                    height: "500px",
                    backgroundImage: `url(${slideImages[2]})`,
                  }}
                ></div>
              </div>
            </Slide>
          </div> */}
          {/*       
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
          /> */}
        </div>
      </div>
      <section className="flex justify-center -mt-10 -mb-10 position-first">
        <div className="bg-white p-4 rounded-md shadow-xl">
          <h1 className="uppercase text-center text-4xl font-extrabold">
          {result.name}
          </h1>
        </div>
      </section>
      <ul className="highlights bg-color-blue">
        <li className="bc-dblue wht bbox calign pt-7 li-inline">
          <i className="">
            <BiBuildingHouse />
          </i>
          <span>Property Type</span>
          <br />
          {result.apartments}
        </li>
        <li className="bc-blue wht bbox calign pt-7 li-inline">
          <i className="">
            <GoLocation />
          </i>
          <span>Location</span>
          <br />
          {result.location}
        </li>
        <li className="bc-grn wht bbox calign pt-7 li-inline">
          <i className="">
            <GiHandOk />
          </i>
          <span>Highlights</span>
          <br />
          Near Chandigarh
          <br />
        </li>
        <li className="bc-ylo wht bbox calign pt-7 li-inline">
          <i className="">
            <FaRegMoneyBillAlt />
          </i>
          <span>Investment</span>
          <br /> 
          {result.investment ? result.investment : "Rs. 45 Lac Onwards*"}
        </li>
        <li className="bc-red wht bbox calign pt-7 li-inline">
          <i className="">
            <AiFillBank />
          </i>
          <span>Project</span>
          <br />
          {result.developer ? result.developer : "ENN AAR GROUP"}
        </li>
        <li className="bc-prpl wht bbox calign pt-7 li-inline">
          <i className="">
            <GrInProgress />
          </i>
          <span>Status</span>
          <br />
          {result.status ? result.status : "Possession Soon"}
        </li>
        <div className="clearfix"></div>
      </ul>

     
      {/* new dynamic code */}
      <section className="p-4 md:px-32 lg:px-64">
                {/* <div className="flex justify-between">
                    <h1 className="text-4xl font-extrabold">{result.name}</h1>
                    <div className="hidden md:block">
                    <ContactUs/>
                    </div>
                </div> */}
                {/* <p className="text-md"><span className="text-green-400"><GoLocation/></span> {result.location}</p> */}
                {/* <p className="text-md text-indigo-700 font-bold">{result.apartments}</p> */}
                <p className="py-4">{result.description}</p>
                <hr className="bg-green-400 pt-1"/>
                {/* <p className="text-md font-bold py-4">Features List</p> */}
                {/* <div className="flex justify-between flex-wrap pb-4">
                    {
                        result.sp?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaSwimmer/></span>
                                <span>Swimming Pool</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.jt?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaRunning/></span>
                                <span>Jogging Track</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.gym?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><CgGym/></span>
                                <span>GYM</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.security?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><GiCctvCamera/></span>
                                <span>Security</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.cp?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaParking/></span>
                                <span>Car Parking</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.restaurant?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><MdRestaurant/></span>
                                <span>Restaurant</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.club?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><MdGroup/></span>
                                <span>Club</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.bc?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaTableTennis/></span>
                                <span>Sports</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.ka?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><GiTennisCourt/></span>
                                <span>Kids Area</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.ff?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaFireExtinguisher/></span>
                                <span>Fire Fighting</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.sm?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaShoppingCart/></span>
                                <span>Shopping Mall</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.multiplexes?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaRegBuilding/></span>
                                <span>Multiplexes</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.os?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><MdDesktopMac/></span>
                                <span>Office Space</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.fc ?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaHamburger/></span>
                                <span>Food Court</span>
                            </div>
                        ):(<></>)
                    }
                </div> */}
                
            {/* <hr className="bg-green-400 pt-1"/>             */}
            {
                result.siteplanImage?(
                    <section className="p-4">                
                        <p className="text-md font-bold py-4">Site Plan</p>
                        <img src={result.siteplanImage}/>
                        <hr className="mt-4 bg-green-400 pt-1"/>
                    </section>
                ):(<></>)
            }
            {
                (result.type==="residential" && result.floorPlan == true) ?(
                    <section>
                        <p className="text-md font-bold py-4">Floor Plan</p>
                        <div className="update slider grid grid-cols-4 gap-4">
                        {
                            result.two?(
                                <button onClick={()=>setTwoTrue()} className={"text-sm ws-full pointer-on-hover mb-4 md:text-md px-2 py-2 rounded-lg border-solid border-2 justify-between d-block "+(two?"bg-green-500 text-white":"border-green-300 text-gray-500")}>
                            
                                    <p className="block w-full fleft">2 BHK</p>
                              
                                    <p className="block w-full fleft">Size: {result.twoArea}</p>
                                </button>
                            ):(<></>)
                        }
                        {
                            result.three?(
                                <button onClick={()=>setThreeTrue()} className={"text-sm ws-full pointer-on-hover mb-4 md:text-md px-2 py-2 rounded-lg border-solid border-2 justify-between d-block "+(three?"bg-green-500 text-white":"border-green-300 text-gray-500")}>
                            
                                    <p className="block w-full fleft">3 BHK</p>
                              
                                    <p className="block w-full fleft">Size: {result.threeArea}</p>
                                </button>
                            ):(<></>)
                        }
                        {
                            result.four?(
                                <button onClick={()=>setFourTrue()} className={"text-sm ws-full pointer-on-hover mb-4 md:text-md px-2 py-2 rounded-lg border-solid border-2 justify-between d-block "+(four?"bg-green-500 text-white":"border-green-300 text-gray-500")}>
                            
                                    <p className="block w-full fleft">4 BHK</p>
                              
                                    <p className="block w-full fleft">Size: {result.fourArea}</p>
                                </button>
                            ):(<></>)
                        }
                        {
                            result.five?(
                                <button onClick={()=>setFiveTrue()} className={"text-sm ws-full pointer-on-hover mb-4 md:text-md px-2 py-2 rounded-lg border-solid border-2 justify-between d-block "+(five?"bg-green-500 text-white":"border-green-300 text-gray-500")}>
                            
                                    <p className="block w-full fleft">5 BHK</p>
                              
                                    <p className="block w-full fleft">Size: {result.fiveArea}</p>
                                </button>
                            ):(<></>)
                        }
                        {
                            result.plot?(
                                <button onClick={()=>setPlotTrue()} className={"text-sm ws-full pointer-on-hover mb-4 md:text-md px-2 py-2 rounded-lg border-solid border-2 justify-between d-block "+(plot?"bg-green-500 text-white":"border-green-300 text-gray-500")}>
                            
                                    <p className="block w-full fleft">Plot</p>
                              
                                    <p className="block w-full fleft">Size: {result.plotArea}</p>
                                </button>
                            ):(<></>)
                        }
                        {
                            result.villa?(
                                <button onClick={()=>setVillaTrue()} className={"text-sm ws-full pointer-on-hover mb-4 md:text-md px-2 py-2 rounded-lg border-solid border-2 justify-between d-block "+(villa?"bg-green-500 text-white":"border-green-300 text-gray-500")}>
                            
                                    <p className="block w-full fleft">Penthouse</p>
                              
                                    <p className="block w-full fleft">Size: {result.villaArea}</p>
                                </button>
                            ):(<></>)
                        }
                        </div>
                        <div class="update slider grid grid-cols-1">
                          
 <hr className="mt-0 bg-green-400 pt-1 mb-4"/>
                        {
                            two?(
                                result.twoImage?(
                                    <div className="block ws-full">
                                    <img src={result.twoImage}/>
                                    </div>
                                ):(<>No Image Available</>)
                            ):(<></>)
                        }
                        {
                            three?(
                                result.threeImage?(
                                    <div className="block ws-full">
                                    <img src={result.threeImage}/>
                                    </div>
                                ):(<>No Image Available</>)
                            ):(<></>)
                        }
                        {
                            four?(
                                result.fourImage?(
                                    <div className="block ws-full">
                                    <img src={result.fourImage}/>
                                    </div>
                                ):(<>No Image Available</>)
                            ):(<></>)
                        }
                        {
                            five?(
                                result.fiveImage?(
                                    <div className="block ws-full">
                                    <img src={result.fiveImage}/>
                                    </div>
                                ):(<>No Image Available</>)
                            ):(<></>)
                        }
                        {
                            plot?(
                                result.plotImage?(
                                    <div className="block ws-full">
                                    <img src={result.plotImage}/>
                                    </div>
                                ):(<>No Image Available</>)
                            ):(<></>)
                        }                        
                        {
                            villa?(
                                result.villaImage?(
                                    <div className="block ws-full">
                                    <img src={result.villaImage}/>
                                    </div>
                                ):(<>No Image Available</>)
                            ):(<></>)
                        }

{/* <hr className="mt-4 bg-green-400 pt-1"/> */}
                        </div>
                    </section>
                ):(
                    result.commercialComplexImage?(
                        <section>
                            <p className="text-md font-bold py-4">Commercial Complex Plan</p>
                            <img className={result.name} src={result.commercialComplexImage}/>
                            <hr className="mt-4 bg-green-400 pt-1"/>
                        </section>
                    ):(<></>)
                )
            }

            
            </section>
      {/* new dynamic code */}

      {/* <div id="about" className="container relative bc-wht container-center">
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
      </div> */}
      <div className="bc-gry relative" id="highlights">
        <div className="col-50 lfloat">
          {/* <img
            style={{ height: "400px" }}
            src="/images/a1.jpg"
            className="block mwidth"
            alt="DP Architects"
          /> */}
        
       
        {  result && result.imagesArray?(
          
        <>
       <img
  style={{ height: "400px",width:"100%",marginLeft:"0" }}
  src={result.imagesArray[0]}
  className="block mwidth"
  alt="DP Architects"
/>
                        
                </>):(<></>)      
        } 
        </div>
        <div className="col-50 lfloat container2 containerpad bbox">
          <h3 className="mb-2 big-text"> Features</h3>
          
          
          {/* features */}
          <div className="flex justify-between flex-wrap pb-4">
                    {
                        result.sp?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaSwimmer/></span>
                                <span>Swimming Pool</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.jt?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaRunning/></span>
                                <span>Jogging Track</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.gym?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><CgGym/></span>
                                <span>GYM</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.security?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><GiCctvCamera/></span>
                                <span>Security</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.cp?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaParking/></span>
                                <span>Car Parking</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.restaurant?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><MdRestaurant/></span>
                                <span>Restaurant</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.club?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><MdGroup/></span>
                                <span>Club</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.bc?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaTableTennis/></span>
                                <span>Sports</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.ka?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><GiTennisCourt/></span>
                                <span>Kids Area</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.ff?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaFireExtinguisher/></span>
                                <span>Fire Fighting</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.sm?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaShoppingCart/></span>
                                <span>Shopping Mall</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.multiplexes?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaRegBuilding/></span>
                                <span>Multiplexes</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.os?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><MdDesktopMac/></span>
                                <span>Office Space</span>
                            </div>
                        ):(<></>)
                    }
                    {
                        result.fc ?(
                            <div className="w-6/12 my-2">
                                <span className="text-indigo-700 text-4xl mr-4"><FaHamburger/></span>
                                <span>Food Court</span>
                            </div>
                        ):(<></>)
                    }
                </div>
                
          {/* features */}
          {/* <ul className="list wht">
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
          </ul> */}
        </div>
        <div className="clearfix"></div>
        

      </div>
      <hr className="mt-4 bg-green-400 pt-1"/>
      { result.bestInvestment == true ? (
        <div id="price" className=" justify-center container bc-wht relative container-center">
        <h3 className="calign blue big-text pb-2">Best Investment Options</h3>
        <table className="table wht">
          <tr>
            <th className="bc-blue">Type</th>
            <th className="bc-ylo">Size (PSF)</th>
            <th className="bc-grn">Price (SF)</th>
            {/* <th className="bc-gry red">Status</th> */}
          </tr>
          {
            result.twoArea?(
              <tr>
                <td className="bc-blue">2 BHK Flat</td>
                <td className="bc-ylo">{result.twoArea}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          }  
          {
            result.twoAreaUtility?(
              <tr>
                <td className="bc-blue">2 BHK plus Utility</td>
                <td className="bc-ylo">{result.twoAreaUtility}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          }  
          {
              result.threeArea?(
                <tr>
                <td className="bc-blue">3 BHK Flat</td>
                <td className="bc-ylo">{result.threeArea}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr> 
              ):(<></>)
          }        
          {/* <tr>
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
          </tr> */}
          {
            result.fourArea?(
              <tr>
                <td className="bc-blue">4 BHK Flat</td>
                <td className="bc-ylo">{result.fourArea}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          
          {/* <tr>
            <td className="bc-blue">4 BHK + Servant Flat</td>
            <td className="bc-ylo">2760 & 4850 Sq.ft.</td>
            <td className="bc-grn">On Request</td>
            <td className="bc-gry red">Possession Soon</td>
          </tr> */}
          {
            result.villaArea?(
              <tr>
                <td className="bc-blue">Penthouses</td>
                <td className="bc-ylo">{result.villaArea}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          }
          {
            result.commercialPlot?(
              <tr>
                <td className="bc-blue">Commercial Plots</td>
                <td className="bc-ylo">{result.commercialPlot}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.builtUp?(
              <tr>
                <td className="bc-blue">Built Up</td>
                <td className="bc-ylo">{result.builtUp}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.foodAndBeverages?(
              <tr>
                <td className="bc-blue">Food And Beverages</td>
                <td className="bc-ylo">{result.foodAndBeverages}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.entertainment?(
              <tr>
                <td className="bc-blue">Entertainment</td>
                <td className="bc-ylo">{result.entertainment}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          }
          {
            result.officeSpaces?(
              <tr>
                <td className="bc-blue">Office Spaces</td>
                <td className="bc-ylo">{result.officeSpaces}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.livingSpace?(
              <tr>
                <td className="bc-blue">Living Spaces</td>
                <td className="bc-ylo">{result.livingSpace}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.threeAreaPlusSR?(
              <tr>
                <td className="bc-blue">3BHK Plus Servant Room</td>
                <td className="bc-ylo">{result.threeAreaPlusSR}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.plotsArea?(
              <tr>
                <td className="bc-blue">Plots</td>
                <td className="bc-ylo">{result.plotsArea}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.serviceApartment?(
              <tr>
                <td className="bc-blue">Service Apartemnts</td>
                <td className="bc-ylo">{result.serviceApartment}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.studioApartment?(
              <tr>
                <td className="bc-blue">Studio Apartments</td>
                <td className="bc-ylo">{result.studioApartment}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          }

          {
            result.virtualSpaces?(
              <tr>
                <td className="bc-blue">Virtual Spaces</td>
                <td className="bc-ylo">{result.virtualSpaces}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
          {
            result.retail?(
              <tr>
                <td className="bc-blue">Retail</td>
                <td className="bc-ylo">{result.retail}</td>
                <td className="bc-grn">On Request</td>
                {/* <td className="bc-gry red">Possession Soon</td> */}
              </tr>
            ):(<></>)
          } 
        </table>
        <p className="blk small calign">
          ** Rates revising soon. Price mentioned above is basic sale price
          only, other charges extra.
        </p>
      </div>
      ) : (<></>)}
      

      <div className="bc-gry relative" id="partners"></div>

      {/* <div id="brands" className="container-full">
        <h4 className="calign blue upper">FLOOR PLAN</h4>
        <div className="update slider grid grid-cols-3 gap-4">
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
      </div> */}

      {/* <div id="location" className="bc-gry relative">
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
      </div> */}
      { result && result.actualImagesSection != false ? (
       <div id="construction-update" className="container-full">
        <h4 className="calign blue upper mb-6">{ result && result.type == "residential" ? "Actual Images of the Township" : "Future Prospect"}</h4>
        <div className="update slider grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        { result && result.actiualImagesArray ? (<>
        {
                    result.actiualImagesArray.map((item) => {
                        return ( <a href={item} data-fancybox="gallery" key={item} >
<Image style={{ height: "200px", objectFit: "cover" }} cloudName="enn-aar-group" width="100%"  crop="scale" publicId={item} />
                          </a>
                        )
                    })
                } 
                </>) : (<></>)

        }
       {/* {  result && result.imagesArray?(<>
        {
                    result.imagesArray.map((item) => {
                        return ( <a href={item} data-fancybox="gallery" key={item} >
<Image style={{ height: "200px", objectFit: "cover" }} cloudName="enn-aar-group" width="100%"  crop="scale" publicId={item} />
                          </a>
                        )
                    })
                } 
                </>):(<></>)      
        }         */}
        </div>
      </div>

) : (<></>)}

<EnquiryFormProperty/>
      {/* <div id="Query-form" className="container-full">
        <EnquiryForm/>
      </div> */}
      {/* <div id="palms" className="bbox container relative container-center">
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
      </div> */}
      <footer className="container" style={{ backgroundDolor: "black" }}>
        {/* <section className="nav lfloat">
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
        </section> */}
        <section className="rfloat">
          {/* <nav className="block lfloat relative">
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
          </nav> */}
          {/* <div className="contact lfloat bc-grn">
            <a className="wht">
              <i className="icon-call-center"></i> Contact Us
            </a>
          </div> */}
        </section>
        <div className="clearfix"></div>
      </footer>
      {/* <div className="quickquery">
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
            autoComplete="off"
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
      </div> */}
    </>
  );
}
