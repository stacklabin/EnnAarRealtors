import { GoLocation } from "react-icons/go";
import Link from "next/link";
import { Image } from "cloudinary-react";
export default function Card({ item }) {
  return (
    <div className="scale-on-hover-parent bg-white shadow-2xl rounded-xl w-full h-96 md:w-5/12 lg:w-3/12 mb-8 md:m-2 lg:m-4">
      <div className="w-full rounded overflow-hidden h-3/4">
        <Image
          cloudName="enn-aar-group"
          fetchFormat="auto"
          className="scale-on-hover-image overflow-hidden object-cover w-full h-full"
          width="100%"
          height="100%"
          crop="scale"
          publicId={item.imagesArray[0]}
        />
        {/* <Image layout="responsive" width={100} height={100} className="scale-on-hover-image w-full object-cover h-full" src={item.imageUrl}/> */}
      </div>
      <div className="p-4 absolute">
        <p className="capitalize text-yellow-600 text-sm">{item.developer}</p>
        <h3 className="font-bold text-md mb-4">{item.name}</h3>
        <p className="text-xs">
          <GoLocation /> {item.location}
        </p>
        <div className="w-6/12 view-left mx-auto bg-green-500 text-center my-2 mb-3 text-white px-3 py-1 rounded-xl">
          <Link as={`/property/${item.name}`} href="/property/+[title]">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
