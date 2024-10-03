import AboutUsFacts from "../elements/AboutUsFacts.jsx";
import CorePrincipals from "../elements/CorePrincipals.jsx";
import Timeline from "../elements/Timeline.jsx";
import ContactCTA from "../elements/ContactCTA.jsx";

export default function About() {

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
        }}>
            <AboutUsFacts/>
            <CorePrincipals />
            <Timeline />
            <ContactCTA />
        </section>
    )
}
