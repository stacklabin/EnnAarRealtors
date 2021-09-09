import { GoLocation } from "react-icons/go";
import { useRouter } from "next/router";
import { Image } from "cloudinary-react";
import { useSession } from "next-auth/client";
import { IconButton } from "@chakra-ui/react";
import { FaTrash, FaShareAlt, FaPen } from "react-icons/fa";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { RWebShare } from "react-web-share";
export default function TrendingCardOmex({ item }) {
  const [session, loading] = useSession();
  const router = useRouter();
  const [del, setDel] = useState(false);
  const toast = useToast();
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(item._id);
    const mongodata = {
      id: item._id,
    };
    await axios
      .delete("/api/admin/property/" + item._id + "/delete", mongodata)
      .then((res) => {
        console.log("message is ", res.data.message);
        toast({
          title: "Delete Successful",
          description: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setDel(true);
      })
      .catch((err) => {
        console.log("error is ", err.response.data);
        toast({
          title: "Delete Failed",
          description: err.response.data,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const temp =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const origin = temp + "/property/" + item.name;
  // console.log(origin)

  const hadleRoute = (url) => {
    console.log(url, " URL");
    router.push(url);
  };
  return (
    <>
      {item.developer === 'Omaxe' ? (
        <></>
      ) : (
        <>
          <div className="scale-on-hover-parent card rounded-xl overflow-hidden w-full md:w-5/12 m-1 flex justify-center mb-1">
            <div className="w-4/12 overflow-hidden h-full">
              <Image
                cloudName="enn-aar-group"
                className="scale-on-hover-image overflow-hidden object-cover w-full h-full"
                width="100%"
                height="100%"
                crop="scale"
                publicId={item.imagesArray[0]}
              />
              {/* <Image layout="responsive" width={100} height={100} className="scale-on-hover-image overflow-hidden object-cover w-full h-full" src={item.imageUrl}/> */}
            </div>
            <div className="w-8/12  text-gray-900 p-4 flex flex-col justify-between">
              <div className="text-xs" style={{ position: "relative" }}>
                <div className="flex flex-wrap justify-between items-center">
                  <span
                    className="text-xl lg:text-2xl text-gray-900 capitalize font-bold pb-1"
                    style={{ width: "90%",
                             color: "black"}}
                  >
                    {item.name}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "5px",
                      cursor: "pointer",
                      color: "white"
                    }}
                  >
                    <RWebShare
                      data={{
                        text: item.description,
                        url: origin,
                        title: item.title,
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <FaShareAlt />
                    </RWebShare>
                  </span>
                </div>
                <span className="inline-block lg:inline px-3 py-1 rounded-xl bg-indigo-200 text-indigo-700 text-xs capitalize">
                  {item.type}
                </span>
                {item.developer ? (
                  <span className="inline-block lg:inline px-3 lg:mx-2 py-1 my-2 rounded-xl bg-green-200 text-green-700 text-xs capitalize">
                    {item.developer}
                  </span>
                ) : (
                  <></>
                )}
                {item.featured ? (
                  <>
                    <span className="inline-block lg:inline px-3 py-1 rounded-xl bg-yellow-200 text-yellow-700 text-xs capitalize">
                      Featured
                    </span>
                  </>
                ) : (
                  <></>
                )}
                <div className="w-full text-lg my-2">
                  <GoLocation />
                  <span className="pl-2 text-gray-900"  style={{ color: "black"}}>{item.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-end  py-2">
                {session &&
                session.user.email === "ankitpathak143192@gmail.com" ? (
                  <div className="flex justify-evenly  w-4/12">
                    <Link
                      as={`/admin/${item.name}/update-property`}
                      href="/admin/+[title]/update-property"
                      passHref
                    >
                      <IconButton
                        colorScheme="blue"
                        aria-label="Edit"
                        size="xs"
                        icon={<FaPen />}
                      />
                    </Link>
                    <div className="mx-1">
                      <IconButton
                        onClick={handleDelete}
                        colorScheme="red"
                        size="xs"
                        aria-label="Delete"
                        icon={<FaTrash />}
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <button
                  className="bg-green-500 view-button text-white px-3 py-1 ml-2 rounded-xl"
                  // as={}
                  // href="/property/+[title]"
                  style={{ width: "200px", background: "black" }}
                  onClick={hadleRoute.bind(this, `/property/${item.name}`)}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
