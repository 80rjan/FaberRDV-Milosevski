
import ImageSlider from "../elements/ImageSlider.jsx";
import OurWork from "../elements/OurWork.jsx";
import WhyUs from "../elements/WhyUs.jsx";
import AboutUsBrief from "../elements/AboutUsBrief.jsx";
import ContactCTA from "../elements/ContactCTA.jsx";
import Footer from "../elements/Footer.jsx";

export default function Home() {

    return(
        <section style={{
            display: "flex",
            flexDirection: "column",
            width: '100%',
        }}>
            <ImageSlider />
            <OurWork />
            <WhyUs />
            <AboutUsBrief />
            <ContactCTA />
        </section>
    )
}