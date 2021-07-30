import { Avatar } from "@chakra-ui/avatar";

export default function TestimonialCard({src,data,name}) {
    return (
        <div className="w-full bg-white md:w-5/12 lg:w-3/12 m-2 p-4 shadow-xl">
            <div className="flex justify-center p-4">
                <Avatar size="lg" src={src}/>
            </div>
            <p className="text-sm">{data}</p>
            <h2 className="font-bold capitalize text-sm pt-3 text-center">{name}</h2>
            {/* <p className="text-center text-xs"><i>CEO</i> of vfgrt</p> */}
        </div>
    );
}