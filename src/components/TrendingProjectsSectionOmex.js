import { useState, useEffect } from "react";
import axios from "axios";
import TrendingCard from "./TrendingCard";
import TrendingCardOmex from "./TrendingCardOmex";

import { Skeleton } from "@chakra-ui/react";
export default function TrendingProjectsSectionOmex({ heading, type }) {
  const [trendingPropertyList, setTrendingPropertyList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    await axios
      .get("/api/featured-property", { params: { limit: 16 } })
      .then((res) => {
        console.log("res is ", res.data);
        setTrendingPropertyList(res.data);
        setLoading(false);
        // setResponse(res.data.message)
      })
      .catch((err) => {
        console.log("error is ", err.response.data);
      });
  }, []);
  return (
    <section
      className={
        "p-4 padding-section " +
        (type === "commercial" ? "text-white" : "text-white")
      }
    >
      <h2
        className={
          (type === "commercial" ? "text-gray-900" : "text-gray-900") +
          " text-center font-bold text-2xl p-4"
        }
      >
        All Omaxe Projects
      </h2>
      <div className="cardContainers flex justify-center flex-wrap">
        {!loading ? (
          trendingPropertyList.map((item) => {
            return <TrendingCardOmex key={item._id} item={item} />;
          })
        ) : (
          <div className="flex justify-evenly flex-wrap">
            <div className="card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center">
              <Skeleton isLoaded={!loading} width="40vw" height="130px">
                asdfghj
              </Skeleton>
            </div>
            <div className="card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center">
              <Skeleton isLoaded={!loading} width="40vw" height="130px">
                asdfghj
              </Skeleton>
            </div>
            <div className="card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center">
              <Skeleton isLoaded={!loading} width="40vw" height="130px">
                asdfghj
              </Skeleton>
            </div>
            <div className="card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center">
              <Skeleton isLoaded={!loading} width="40vw" height="130px">
                asdfghj
              </Skeleton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
