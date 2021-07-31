import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import {
  Input,
  Select,
  InputRightElement,
  InputGroup,
  Accordion,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaSearch, FaHandsHelping, FaHandHoldingHeart } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import Card from "../Card";
import TestimonialCard from "../TestimonialCard";
import FaqCard from "../FaqCard";
import TrendingProjectsSection from "../TrendingProjectsSection";
import Link from "next/link";
export default function Homepage() {
  const [propertyList, setPropertyList] = useState([]);
  const [optionFilter, setOptionFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [resultList, setResultList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("residential");
  // console.log("RESULT ",resultList)
  useEffect(async () => {
    apiCall();
  }, [optionFilter, nameFilter]);

  useEffect(() => {
    setOptionFilter("");
    setNameFilter("");
  }, [type]);

  const apiCall = async () => {
    await axios
      .get("/api/search", {
        params: { search: nameFilter, filter: optionFilter, type },
      })
      .then((res) => {
        // console.log("res is ",res.data)
        setResultList(res.data);
        setLoading(false);
        // setResponse(res.data.message)
      })
      .catch((err) => {
        console.log("error is ", err.response.data);
        setResultList([]);
      });
  };

  useEffect(async () => {
    await axios
      .get("/api/featured-property", { params: { limit: 3 } })
      .then((res) => {
        // console.log("res is ",res.data)
        setPropertyList(res.data);
        setLoading(false);
        // setResponse(res.data.message)
      })
      .catch((err) => {
        // console.log("error is ",err.response.data)
      });
  }, []);
  return (
    <>
      <Head>
        {/**     
         *  This is build by eric
      contact us for your project:
      email: hi@ericgit.me
      website: https://ericgit.me
       */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Enn Aar Group - Homepage</title>
        <meta name="description" content="Description here"></meta>
        <meta property="og:title" content="Title here" key="ogtitle" />
        <meta
          property="og:description"
          content="Description here"
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
      <main>
        <section className="fullpagebackground text-white">
          <Image
            quality={10}
            layout="fill"
            className="background-image lighter"
            src="/images/home.jpg"
            alt="enn arr realtors"
          />
          <div className="text-left md:text-center p-4">
            <h5 className="text-sm md:text-xl uppercase p-4">
              Discover Your Next Home
            </h5>
            <h1 className="font-bold text-xl md:text-4xl p-4 uppercase">
              Going Above And Beyond Sale
            </h1>
            {type === "residential" ? (
              <div className="relative">
                <div className="flex justify-start">
                  <button className="bg-white text-DarkBlue p-2 uppercase">
                    Residential
                  </button>
                  <button
                    onClick={() => setType("commercial")}
                    className="text-white bg-DarkBlue p-2 uppercase"
                  >
                    Commercial
                  </button>
                </div>
                <div className="bg-white text-black flex justify-center">
                  <div className="w-4/12 py-2 px-4 text-left text-sm">
                    <h3 className="text-xs font-bold text-CustomGray">
                      HOME TYPE
                    </h3>
                    <Select
                      value={optionFilter}
                      onChange={(e) => setOptionFilter(e.target.value)}
                      variant="flushed"
                    >
                      <option value="">Select</option>
                      <option value="two">2 BHK</option>
                      <option value="three">3 BHK</option>
                      <option value="four">4 BHK</option>
                      <option value="five">5 BHK</option>
                      <option value="plot">Plot</option>
                      <option value="villa">Villa</option>
                    </Select>
                  </div>
                  <div className="w-8/12 py-2 px-4 text-left text-sm">
                    <h3 className="text-xs font-bold text-CustomGray">
                      SEARCH
                    </h3>
                    <InputGroup>
                      <InputRightElement
                        pointerEvents="none"
                        children={<FaSearch color="gray" />}
                      />
                      <Input
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                        type="text"
                        variant="flushed"
                        placeholder="Find Something..."
                      />
                    </InputGroup>
                  </div>
                  {/* <div className="w-2/12 py-2 px-4 text-left text-xs md:text-sm flex justify-center items-center">
                                    <button onClick={()=>apiCall()} className="bg-DarkBlue py-1 px-2 md:px-4 md:py-2 text-white">Search</button>
                                </div> */}
                </div>
                <div className="absolute w-full max-h-52 overflow-y-scroll bg-red-400">
                  {(resultList.length > 0 || loading === false) &&
                  (nameFilter || optionFilter) ? (
                    resultList.map((item) => {
                      return (
                        <div
                          key={item._id}
                          className="bg-gray-100 p-4 text-black flex justify-between text-xs hover:bg-blue-100"
                        >
                          <h1>{item.name}</h1>
                          <div>
                            {item.featured ? (
                              <>
                                <span className="px-3 py-1 mx-2 rounded-xl bg-yellow-200 text-yellow-700 text-xs capitalize">
                                  Featured
                                </span>
                              </>
                            ) : (
                              <></>
                            )}
                            <span className="py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                              <Link
                                as={`/property/${item.name}`}
                                href="/property/+[name]"
                              >
                                View
                              </Link>
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="loader"></div>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="flex justify-start">
                  <button
                    onClick={() => setType("residential")}
                    className="text-white bg-DarkBlue p-2 uppercase "
                  >
                    Residential
                  </button>
                  <button className="bg-white text-DarkBlue p-2 uppercase">
                    Commercial
                  </button>
                </div>
                <div className="bg-white text-black flex justify-between">
                  <div className="w-full py-2 px-4 text-left text-sm">
                    <h3 className="text-xs font-bold text-CustomGray">
                      SEARCH
                    </h3>
                    <InputGroup>
                      <InputRightElement
                        pointerEvents="none"
                        children={<FaSearch color="gray" />}
                      />
                      <Input
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                        type="text"
                        variant="flushed"
                        placeholder="Find Something..."
                      />
                    </InputGroup>
                  </div>
                  {/* <div className="w-2/12 py-2 px-4 text-left text-xs md:text-sm flex justify-center items-center">
                                    <button onClick={()=>apiCall()} className="bg-DarkBlue py-1 px-2 md:px-4 md:py-2 text-white">Search</button>
                                </div> */}
                </div>
                <div className="absolute w-full max-h-52 overflow-y-scroll bg-red-400">
                  {(resultList.length > 0 || loading === false) &&
                  nameFilter ? (
                    resultList.map((item) => {
                      return (
                        <div
                          key={item._id}
                          className="bg-gray-100 p-4 text-black flex justify-between text-xs hover:bg-blue-100"
                        >
                          <h1>{item.name}</h1>
                          <span className="py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            <Link
                              as={`/property/${item.name}`}
                              href="/property/+[name]"
                            >
                              View
                            </Link>
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="loader"></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="px-4 bg-gray-200 padding-section">
          <div className="text-left md:text-center">
            <h3 className="font-extrabold text-2xl md:text-4xl pt-6 pb-4">
              Explore the listings on Enn Aar Group
            </h3>
            <p className="py-4 text-xs md:text-sm">
              Browse through the broad spectrum of houses in New Chandigarh to
              find the right fit for you.
              <br />
              We will match you with a house that will turn into your home.
            </p>
          </div>
          <div className="CardContainer flex flex-wrap justify-center py-6 items-center">
            {propertyList.length > 0 || loading === false ? (
              propertyList.map((item) => {
                return <Card key={item._id} item={item} />;
              })
            ) : (
              <div className="loader"></div>
            )}
          </div>
        </section>
        <section className="halfBackground text-white">
          <Image
            layout="fill"
            className="background-image darker"
            src="/images/img4.jpg"
            alt="enn arr realtors"
          />
          <div className="text-left md:text-center p-4">
            <h3 className="text-2xl font-bold">
              Connecting you to your dream home
            </h3>
            <p className="text-sm py-4">
              Our platform holds a myriad of features to make house hunting
              effortless for you from search filters to custom keyword search.{" "}
              <br /> Clients trust us with their properties for a reason.
            </p>
            <div className="flex flex-wrap justify-evenly items-center py-6">
              <div className="text-center w-6/12 mb-4 md:w-3/12">
                <p className="font-bold text-lg md:text-xl text-DarkBlue">
                  5000+
                </p>
                <p className="text-xs md:text-sm">Verified Listings</p>
              </div>
              <div className="text-center w-6/12 mb-4 md:w-3/12">
                <p className="font-bold text-lg md:text-xl text-DarkBlue">
                  1500+
                </p>
                <p className="text-xs md:text-sm">Properties For Sale</p>
              </div>
              <div className="text-center w-6/12 mb-4 md:w-3/12">
                <p className="font-bold text-lg md:text-xl text-DarkBlue">
                  3000+
                </p>
                <p className="text-xs md:text-sm">Properties On Rent</p>
              </div>
              <div className="text-center w-6/12 mb-4 md:w-3/12">
                <p className="font-bold text-lg md:text-xl text-DarkBlue">
                  4500+
                </p>
                <p className="text-xs md:text-sm">Customers Served</p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-left md:text-center p-4 bg-white padding-section">
          <h3 className="text-2xl font-bold">Our Core Values</h3>
          <p className="text-sm py-4 lg:px-80">
            We know that buying a new home is a huge commitment. We understand
            your requirements and sweep through available properties,
            residential or commercial, to present the best-suited listings.
          </p>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-4/12 lg:w-2/12 mb-4 md:m-4 relative">
              <div className="circleContainer">
                <div className="text-5xl circleIconHomepage  text-DarkBlue">
                  <MdGroup />
                </div>
              </div>
              <div className="mt-12 py-12 px-4 bg-gray-100 rounded-xl height-250">
                <p className="text-xl font-bold text-DarkBlue py-2">
                  Our Clients are our Priority
                </p>
                <p className="text-sm text-justify">
                  Our team consists of highly-trained specialists who will
                  assist you through every step of the way. We are focused on
                  providing the best quality service to you.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-2/12 mb-4 md:m-4 relative">
              <div className="circleContainer">
                <div className="text-5xl circleIconHomepage  text-DarkBlue">
                  <FaHandsHelping />
                </div>
              </div>
              <div className="mt-12 py-12 px-4 bg-gray-100 rounded-xl height-250">
                <p className="text-xl font-bold text-DarkBlue py-2">
                  We build Relationships
                </p>
                <p className="text-sm text-justify">
                  We believe in building lasting relationship with our clients.
                  We are always quick to respond to your enquiries with relevant
                  consultations and feedback.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-2/12 mb-4 md:m-4 relative">
              <div className="circleContainer">
                <div className="text-5xl circleIconHomepage  text-DarkBlue">
                  <FaHandHoldingHeart />
                </div>
              </div>
              <div className="mt-12 py-12 px-4 bg-gray-100 rounded-xl height-250">
                <p className="text-xl font-bold text-DarkBlue py-2">
                  We strive for your Satisfaction
                </p>
                <p className="text-sm text-justify">
                  We hold our clients in high regard and strive hard to provide
                  them with the best possible outcome. Our team works round the
                  clock to help you find your next home.
                </p>
              </div>
            </div>
          </div>
        </section>
        <TrendingProjectsSection heading="Trending Listings" />
        <section className="p-4 bg-gray-100 padding-section">
          <h3 className="text-left md:text-center font-bold text-2xl">
            Hear it from our customers
          </h3>
          <p className="py-2 text-left md:text-center">
            Ennaarrealtors has the reputation and the scale to drive real estate
            into a profitable future. We have assisted many buyers with a
            seamless experience.
          </p>
          <div className="flex flex-wrap justify-center">
            <TestimonialCard
              src="images/testi1.jpg"
              data="We are grateful to have found EnnAarRealtors. They helped us buy our first home effortlessly. The agents were 
                    approachable and explained the process in layman's terms for our understanding. Smooth outcome on our first home in zirakpur"
              name="Navpreet Kaur"
            />
            <TestimonialCard
              src="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              data="After a few months with local agents and no proper deals, we found EnnAarRealtors. They show properties that fit our budget and don't compromise
                    on the quality. Very happy with our new home."
              name="Karan Singh"
            />
            <TestimonialCard
              src="images/testi3.jpg"
              data="They respected and understood our demands. All the properties they showed hit the mark. I appreciate their professionalism and efficiency."
              name="priyanka sindhu"
            />
          </div>
        </section>
        <section className="p-4 bg-gray-200 padding-section">
          <h3 className="text-left md:text-center font-bold text-2xl">
            Have questions?
          </h3>
          <p className="py-2 text-left md:text-center">
            Answer to the most frequently asked questions
          </p>
          <div>
            <Accordion allowToggle>
              <FaqCard
                title="Is New Chandigarh the best place to live near chandigarh?"
                description="
                        Punjab is in the process of a makeover, with its first planned city – New Chandigarh shaping up to bring a visually appealing, infrastructurally sound environment. The locality is designed to bring in all the requisites of ultramodern cities and hold the modern amenities required for a comfortable dwelling.
                        "
              />
              <FaqCard
                title="Is it worth to buy a flat in New Chandigarh?"
                description="
                        New Chandigarh is a modern integrated township with advanced architecture and meticulous planning. The prime location of the area ropes in contemporary amenities like hotels, educational institutions, specialty hospitals, and excellent connectivity to the other major surrounding cities. ENN AAR helps you locate the right flat which is equivalent to holding a property in a major metro city.
                        "
              />
              <FaqCard
                title="Are 3BHK Properties costly in New Chandigarh?"
                description="
                        New Chandigarh city is designed to be a breath of fresh air. The city architecture will be similar to that of Chandigarh, but with more open areas, green belts, and modern facilities – bringing the best of both worlds. Holding a 3 BHK property in this area will only act as a practical investment that multiplies its value in years to come. Our association with the top residential project owners help you strike a steal deal. "
              />
              <FaqCard
                title="Is it reliable to buy property in New Chandigarh especially during this Covid 19 Pandemic time?"
                description="
                        Contrary to the question, we think it is clever to look for a property in New Chandigarh during the pandemic. The buyers can capitalize on the lowered home loan interest rates and attractive discounts offered by the property owners. New Chandigarh is a flourishing choice as it is in the development stage, and you will hold the early bird advantage to the ultramodern, thriving community. "
              />
            </Accordion>
          </div>
          <div className="flex justify-center">
            <Button colorScheme="blue">
              <Link href="/faq">View All</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}