
import './textAndImageSlider.css'
import {useEffect, useState} from "react";

export default function TextAndImageSlider({ title, text, images, sliderIsRight }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSliderIsRight, setIsSliderIsRight] = useState(sliderIsRight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        if (windowWidth <= 767) {
            setIsSliderIsRight(true);
        } else {
            setIsSliderIsRight(sliderIsRight);
        }

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section
            className="textAndImageSlider"
            style={
                {paddingBottom: sliderIsRight && '2rem', paddingTop: !sliderIsRight && '2rem'}
            }
        >
            {isSliderIsRight &&
                <div className="textAndImageSlider__textWrapper">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            }
            <div
                className='textAndImageSlider__imageWrapper'
                style={{direction: isSliderIsRight ? 'ltr' : 'rtl'}}
            >
                {images.map((image, i) => (
                    <img src={image} key={i} alt='slider with images'/>
                ))}
            </div>
            {!isSliderIsRight &&
                <div className="textAndImageSlider__textWrapper">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            }
        </section>
    )
}