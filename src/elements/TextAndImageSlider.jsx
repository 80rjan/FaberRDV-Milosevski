
import './textAndImageSlider.css'

export default function TextAndImageSlider({ title, text, images, sliderIsRight }) {

    return (
        <section
            className="textAndImageSlider"
            style={
                {paddingBottom: sliderIsRight && '2rem', paddingTop: !sliderIsRight && '2rem'}
            }
        >
            {sliderIsRight &&
                <div className="textAndImageSlider__textWrapper">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            }
            <div
                className='textAndImageSlider__imageWrapper'
                style={{direction: sliderIsRight ? 'ltf' : 'rtl'}}
            >
                {images.map((image, i) => (
                    <img src={image} key={i} alt='slider with images'/>
                ))}
            </div>
            {!sliderIsRight &&
                <div className="textAndImageSlider__textWrapper">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            }
        </section>
    )
}