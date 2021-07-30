
import AllTrendingProjectsSection from "../AllTrendingProjectsSection"
import Head from 'next/head'
export default function CommercialProjects() {
    return (
        <div className="mainContent bg-gray-300">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>Commercial Projects - Enn AAr Group</title>
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
    
            <AllTrendingProjectsSection heading="Commercial Projects" type="commercial"/>
        </div>
    );
}