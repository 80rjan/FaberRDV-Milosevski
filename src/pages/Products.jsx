import TextAndImageSlider from "../elements/TextAndImageSlider.jsx";

import injectionProduct1 from '../assets/pi1.jpg'
import injectionProduct2 from '../assets/pi2.jpg'
import injectionProduct3 from '../assets/pi3.jpg'
import injectionProduct4 from '../assets/pi4.jpg'
import injectionProduct5 from '../assets/pi5.jpg'

import blowProduct1 from '../assets/pb1.jpg'
import blowProduct2 from '../assets/pb2.jpg'
import blowProduct3 from '../assets/pb3.jpg'
import blowProduct4 from '../assets/pb4.jpg'
import blowProduct5 from '../assets/pb5.jpg'
import blowProduct6 from '../assets/pb6.jpg'
import blowProduct7 from '../assets/pb7.jpg'
import ContactCTA from "../elements/ContactCTA.jsx";

export default function Products() {
    const titleInjectedMolds='High quality injection molded products';
    const titleBlowMolds = 'Durable and versatile blow molded products';

    const textInjectedMolds = 'Our injection molded products are crafted with precision and attention to detail, ' +
        'ensuring durability and consistent performance. From complex designs to high-volume production,' +
        ' we offer tailored solutions to meet your specific needs across various industries.';
    const textBlowMolds = 'Our blow molded products are designed for strength and reliability, ' +
        'providing high-quality solutions for various applications. ' +
        'From lightweight packaging to complex shapes, we offer customizable options to meet your exact specifications.';

    const imagesInjectedMolds = [injectionProduct1, injectionProduct2, injectionProduct3, injectionProduct4, injectionProduct5];
    const imagesBlowMolds = [blowProduct1, blowProduct2, blowProduct3, blowProduct4, blowProduct5, blowProduct6, blowProduct7];

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <TextAndImageSlider title={titleInjectedMolds} text={textInjectedMolds} images={imagesInjectedMolds}
                                sliderIsRight={true} />
            <TextAndImageSlider title={titleBlowMolds} text={textBlowMolds} images={imagesBlowMolds}
                                sliderIsRight={false}/>
            <ContactCTA />
        </section>
    )
}