import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import FaqCard from '../src/components/FaqCard'
import{
  Accordion, Button,
} from "@chakra-ui/react"
export default function Projects() {
    return (
        <div>
            <Header/>
            <main>
            <section className="halfBackground text-white">
                <img className="background-image lighter" src="/images/img3.jpg" alt="enn arr realtors"/>
            </section>
            <section className="flex justify-center -mt-10 mb-6">
                <div className="bg-white w-full md:w-8/12 lg:w-6/12 p-4 py-6 rounded-md shadow-xl">
                    <h1 className="uppercase text-center text-2xl font-extrabold">FAQs</h1>
                </div>
            </section>
            <section className="-mt-16 p-4 pt-16 bg-gray-200">
                <h3 className="text-left md:text-center font-bold text-2xl">Have questions?</h3>
                <center><hr style={{width:"100px", padding: "2px"}} className="bg-blue-500 mb-2 mt-1 rounded-xl"/></center>
                <p className
                
                
                ="pb-6 text-left md:text-center">Answer to the most frequently asked questions</p>
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



                        <FaqCard 
                        title="What are top 5 new places to visit in Chandigarh?"
                        description="Chandigarh is the beholder of wide-open spaces and lush green boulevards which serves as a visual delight to anyone visiting the place. Touted as the garden city of India, the place holds amazing sightseeing indulgences. While you are here, be sure to check out the Zakir Hussain Rock Garden, Sukhna Lake, Rock Garden, Mohali Cricket Stadium, and the International Doll Museum. 
                        If you have the time, take a trip down to the developing planned city of Chandigarh – New Chandigarh to catch a glimpse of the ultramodern city which will soon serve as a tourist location in itself."
                        />
                        <FaqCard
                        title="What is the best location for a home in New Chandigarh?"
                        description="The properties in New Chandigarh are selling like hotcakes as the place holds promising residential projects that are built with the future in mind. Some of the prominent properties in the area include 
                        ● Omaxe New Chandigarh
                        ● Ambika Florence Park
                        ● Manohar Singh & Company
                        ● DLF Hyde Park"
                        />
                        <FaqCard 
                        title="Where should I buy a flat in or near Chandigarh?"
                        description="New Chandigarh is a bullpen locality that is perfect in terms of amenities, lush green surroundings, modern facilities, and contemporary projects, designed with a futuristic approach. The buyers will be a part of a well-planned community upon choosing the right property. The options available are immense and can sometimes be overwhelming. We, at ENN AAR, can help you simplify the process by bringing the right properties that match your requirements. There are numerous options available for exploration, including - 
                        ●Omaxe New Chandigarh
                        ●Ambika Florence Park
                        ●Manohar Singh & Company
                        ●DLF Hyde Park
                        ●Ananta Lifestyle
                        ●Hero Homes
                        ●Ambika La Parisian
                        ●Escon Primera
                        ●Affinity Greens
                        ●Motia Blue Ridge, among many others. "/>
                        <FaqCard 
                        title="What is the future of New Chandigarh?"
                        description="The future of New Chandigarh is bright and progressive. New Chandigarh is one of the first initiatives of a planned city in Chandigarh. The city is booming with facilities to make it seamless for the residents – with the construction of Medicity - holding 18 super-specialty hospitals under its umbrella, excellent schools, cricket stadium, shopping malls, organized parking, and seamless connectivity to the Tricity. The place is set to be the next hotspot in the country.  "
                        />


                        <FaqCard 
                        title="What are the best affordable residential projects in Tricity Chandigarh?"
                        description="Buying a home is a long-term commitment. It is essential to choose a community that addresses the lifestyle demands of today and tomorrow. The trending affordable housing projects in Tricity Chandigarh includes – 
                        ●Ananta Lifestyle
                        ●Hero Homes
                        ●Ambika La Parisian
                        ●Escon Primera
                        ●Affinity Greens
                        ●Motia Blue Ridge"
                        />
                        <FaqCard
                        title="Which is the best place to buy a 3 BHK apartment in Chandigarh?"
                        description="Chandigarh is a place that holds a lot of potentials and is always in demand. The property market in the locality is booming as realtors continue to build promising projects. It is because people understand the economic growth potential within the city. We have listed projects that are a safe bet for your next home. 
                        ●Sushma Buildtech Limited
                        ●Beverly Golf Avenue
                        ●Marbella Grand
                        ●Sushma Valencia
                        ●Bliss Orra
                        ●Omaxe New Chandigarh
                        ●Ambika Florence Park"
                        />
                        <FaqCard 
                        title="What are the transportation options available within New Chandigarh?"
                        description="With numerous public transport facilities available at present, major projects are on the line for New Chandigarh. These projects ensure smooth connectivity between Tricity, with an expressway connecting Chandigarh with Anandpur. It also holds the advantage of being in proximity to Delhi and Himachal Pradesh. The developing area will soon be the central hub as they are linked to every adjacent developed region. "
                        />
                        <FaqCard 
                        title="What are the safest areas in new Chandigarh to live in?"
                        description="New Chandigarh is a hub for many gated communities that ensures the safety and provides an unmatched lifestyle. Some of the reputed residential projects in the area include – 
                        ●Omaxe New Chandigarh
                        ●Ambika Florence Park
                        ●Manohar Singh & Company
                        DLF Hyde Park, among many others."
                        />
                    </Accordion>
                </div>
            </section>
            </main>
            <Footer/>
        </div>
    );
}