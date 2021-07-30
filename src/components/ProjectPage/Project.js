import { Button } from "@chakra-ui/button";
import Link from "next/link";
import Head from "next/head";
import { Image } from "cloudinary-react";
import { useState, useEffect } from "react";
import axios from "axios";

import TrendingProjectsSection from "../TrendingProjectsSection";
export default function Project() {
  const [devs, setdevs] = useState([]);
  useEffect(async () => {
    await axios
      .get("/api/admin/developer")
      .then((res) => {
        console.log("res is ", res.data);
        setdevs(res.data);
      })
      .catch((err) => {
        console.log("error is ", err.response.data);
      });
  }, []);
  let count = 0;
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Projects</title>
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
      <section className="halfBackground text-white">
        <img
          className="background-image lighter"
          src="/images/img6.jpg"
          alt="enn arr realtors"
        />
      </section>
      <section className="flex justify-center -mt-10 mb-6">
        <div className="bg-white p-4 rounded-md shadow-xl">
          <h1 className="uppercase text-center text-4xl font-extrabold">
            Best Projects in New Chandigarh
          </h1>
        </div>
      </section>
      <section className="p-4 flex justify-center">
        <div>
          {devs.map((item) => {
            count = count + 1;
            return (
              <div
                key={item._id}
                className="scale-on-hover-parent card w-full mb-12 flex flex-wrap justify-evenly"
              >
                <div
                  className={
                    "w-full md:w-6/12 lg:w-5/12 overflow-hidden h-full order-1 " +
                    (count % 2 === 0 ? "md:order-1" : "md:order-3")
                  }
                >
                  <Image
                    cloudName="enn-aar-group"
                    className="scale-on-hover-image overflow-hidden object-cover w-full h-full"
                    width="100%"
                    height="100%"
                    crop="scale"
                    publicId={item.imageUrl}
                  />
                </div>
                <div className="w-full md:w-6/12 lg:w-5/12 px-4 order-2">
                  <h1 className="text-3xl font-normal -mb-4 pt-4">
                    {item.title}
                  </h1>
                  <div>
                    <span
                      style={{ minWidth: "100px" }}
                      className="bg-black pb-1 inline-block"
                    ></span>
                    <span
                      style={{ minWidth: "100px" }}
                      className="bg-gray-300 pb-1 inline-block"
                    ></span>
                  </div>
                  <p className="text-xs md:text-sm font-light pt-2">{item.description}</p>

                  <div className="bg-black text-white inline-block px-4 py-1 my-4 hover:bg-gray-700">
                    <Link
                      as={`/developers/${item.title}`}
                      href="/developers/+[title]"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <TrendingProjectsSection
        heading="Trending Residential Listings"
        limit={4}
        type="residential"
      />
      <TrendingProjectsSection
        heading="Trending Commercial Listings"
        limit={4}
        type="commercial"
      />
    </div>
  );
}
