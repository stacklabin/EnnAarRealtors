import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
export default function Terms() {
    return (
        <div>
            <Header/>     
            <section className="halfBackground text-white">
                <img className="background-image lighter" src="/images/img6.jpg" alt="enn arr realtors"/>
            </section>
            <section className="flex py-4 px-4 md:px-56 justify-between items-center">
                <div className="w-full md:w-5/12">
                    <h1 className="font-extrabold text-7xl">Terms<br/>and<br/>Conditions</h1>
                </div>
                <div className="w-full md:w-4/12">
                    <img className="" src="/images/img6.jpg" alt="enn arr realtors"/>
                </div>
            </section>
            <section className="py-4 px-4 md:px-56 text-justify ">
                <p>ENN AAR provides users with access to information about real estate properties and services. By accessing the website and furnishing your personal/contact details -<br/><br/>
●You express your interest in availing and purchasing the service(s) that you have selected. <br/>
●You permit us to reach out to you personally, either electronically or telephonically. We may also use a third-party service provider to contact you, understand your specifications and fulfill your demands.<br/>
●You acknowledge that we reserve the right to furnish your details to the affiliates & partners, who might add you to their sales funnel.
●You agree to receive promotional material and/or special offers through email or SMS.</p>
            </section>
            <Footer/>
        </div>
    );
}