import Head from 'next/head'

import TrendingProjectsSection from "../TrendingProjectsSection"
export default function AboutUsPage() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>About Us - EnnaarRealtors</title>
                <meta name="description" content="Description here"></meta> 
                <meta property="og:title" content="Title here" key="ogtitle" />
                <meta property="og:description" content="Description here" key="ogdesc" />
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
    
            {/* <section className="text-white">
                <img className="background-image" src="/images/img6.jpg" alt="enn arr realtors"/>
                <h1 className="text-4xl">About Us</h1>
            </section> */}
            <section className="p-4 lg:py-8 flex justify-evenly flex-wrap aboutpadp">
                <div className="w-full md:w-5/12 lg:w-4/12 h-96 flex justify-center lg:justify-end overflow-hidden rounded-xl">
                    <img className="h-full object-cover md:w-12/12 lg:w-12/12 rounded-xl" src="/images/img2.jpg"/>
                </div>
                <div className="w-full md:w-6/12 lg:w-6/12 text-lg">
                    <div className="bg-blue-400 px-4 py-1 mt-6 md:mt-2 mb-6 w-3/12"></div>
                    <p>
                    ENN AAR Group is one of the leading real estate companies. Enn Aar Group has established itself as one of the key 
                    players in real estate development in tricity and has delivered exceptional results. The Company commenced operations in 
                    India in 2004 and is into real estate marketing services, spanning all key segments of the Indian real estate industry, 
                    namely the residential, commercial and retail sectors. The Companys operations encompass various aspects of real estate 
                    development, such as land identification and acquisition, project planning, marketing and execution.
                    <br/><br/>To Establish ourselves as a benchmark in the Real Estate Industry with new Innovations and smart work.
                    </p>
                </div>
            </section>
            <section className="thirdBackground text-white p-4 dnone">
                <img className="background-image darker" src="/images/img2.jpg" alt="enn arr realtors"/>
                <div className="p-4 flex justify-center">
                <p className="text-md text-center w-full md:w-8/12 lg:w-6/12">We are a team of persistent entusiasts, focused on helping people find joy in their spaces. Our mission is 
                to be the first choice for consumers and partners in their journey of discovering, buying and selling spaces. We do that by developing symbiotic relationships,
                leveraging technology and above all, understanding the requirements to connect people to their happy homes and workspaces.</p>
                </div>
            </section>
            <TrendingProjectsSection heading="Trending Residential Listings" limit={4} type="residential"/>
            <TrendingProjectsSection heading="Trending Commercial Listings" limit={4} type="commercial"/>
        </>
    );
}