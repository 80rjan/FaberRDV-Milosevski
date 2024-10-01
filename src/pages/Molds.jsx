import TextAndImageSlider from "../elements/TextAndImageSlider.jsx";
import ContactCTA from "../elements/ContactCTA.jsx";
import injectionMold1 from "../assets/im1.jpg";
import injectionMold2 from "../assets/im2.jpg";
import injectionMold3 from "../assets/im3.jpg";
import injectionMold4 from "../assets/im4.jpg";
import injectionMold5 from "../assets/im5.jpg";
import injectionMold6 from "../assets/im6.jpg";
import injectionMold7 from "../assets/im7.jpg";
import injectionMold8 from "../assets/im8.jpg";

import blowMold1 from '../assets/bm1.jpg'
import blowMold2 from '../assets/bm2.jpg'
import blowMold3 from '../assets/bm3.jpg'
import blowMold4 from '../assets/bm4.jpg'
import blowMold5 from '../assets/bm5.jpg'
import blowMold6 from '../assets/bm6.jpg'
import blowMold7 from '../assets/bm7.jpg'
import blowMold8 from '../assets/bm8.jpg'
import blowMold9 from '../assets/bm9.jpg'

export default function Molds() {
    const titleInjectedMolds='Precision injection molds for high-quality production';
    const titleBlowMolds = 'High-performance blow molds for superior production';

    const textInjectedMolds = 'Our injection molds are designed for accuracy and durability, ' +
        'ensuring efficient and cost-effective manufacturing. Whether you\'re producing small batches or large-scale runs, ' +
        'our custom molds meet the highest industry standards, delivering consistent results every time.';
    const textBlowMolds = 'Our blow molds are engineered for precision and efficiency, ' +
        'offering exceptional quality for a wide range of plastic products. ' +
        'Designed for durability and optimized to reduce production time, ' +
        'our custom molds deliver consistent and reliable results every time.';

    const imagesInjectedMolds = [injectionMold1, injectionMold2, injectionMold3, injectionMold4, injectionMold5, injectionMold6, injectionMold7, injectionMold8];
    const imagesBlowMolds = [blowMold1, blowMold2, blowMold3, blowMold4, blowMold5, blowMold6, blowMold7, blowMold8, blowMold9];

    return(
        <section style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <TextAndImageSlider title={titleInjectedMolds} text={textInjectedMolds} images={imagesInjectedMolds}
                                sliderIsRight={true}/>
            <TextAndImageSlider title={titleBlowMolds} text={textBlowMolds} images={imagesBlowMolds}
                                sliderIsRight={false}/>
            <ContactCTA/>
        </section>
    )
}