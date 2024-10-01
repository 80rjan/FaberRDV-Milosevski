
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import {useEffect, useState} from "react";


import './ImageSlider.css';
import {Circle, CircleDot} from "lucide-react";
import {Link} from "react-router-dom";

const IMAGES = [
    {url: slider1, alt: 'FaberRDV Milosevski Company'},
    {url: slider2, alt: 'FaberRDV Milosevski Company'},
    {url: slider3, alt: 'FaberRDV Milosevski Company'}
];
const TEXT = [
    {title: 'FaberRDV Milosevski', text: 'Our success as a product development company ' +
            'is based on the ability to provide innovative and cost-effective solutions to our clients. ' +
            'This is accomplished by maintaining the highest levels of quality, professionalism, and business ethics.'},
    {title: 'Faber Milosevski', text: 'Our success as a product development company ' +
            'is based on the ability to provide innovative and cost-effective solutions to our clients. ' +
            'This is accomplished by maintaining the highest levels of quality, professionalism, and business ethics.'},
    {title: 'FaberRDV', text: 'Our success as a product development company ' +
            'is based on the ability to provide innovative and cost-effective solutions to our clients. ' +
            'This is accomplished by maintaining the highest levels of quality, professionalism, and business ethics.'}
]

export default function ImageSlider() {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length); // Loop back to 0 after the last image
        }, 10000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [imageIndex]);

    return (
        <section className='sliderWrapper'>
            <div className="sliderContent" style={{ width: `${IMAGES.length * 100}%`, transform: `translateX(${-100 * imageIndex}%)` }}>
                {IMAGES.map((image, index) => (
                    <div className='sliderItem' key={index} style={{width: `${100 / IMAGES.length}%`, backgroundImage: `url(${image.url})`}}>
                        <div className='sliderDarkener'/>
                        {/*<img src={image.url} alt={image.alt}/>*/}
                        <div  className='sliderText'>
                            <h2>{TEXT[index].title}</h2>
                            <p>{TEXT[index].text}</p>
                            <button>
                                <Link to='/about'>Read more</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="circleWrapper">
                {IMAGES.map((_, index) => (
                    <button key={index} onClick={() => setImageIndex(index)}>
                        <Circle style={index === imageIndex ? { fill: '#000092' } : { fill: '#fff' }} />
                    </button>
                ))}
            </div>
        </section>
    );
}

