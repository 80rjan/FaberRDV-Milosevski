
import './AboutUsFacts.css'
import aboutUsFactsImage from '../assets/1696963717679.png'

export default function AboutUsFacts() {

    return (
        <section className="aboutUsFacts">
            <div className="aboutUsFactsImageWrapper">
                <div className='sliderDarkener'/>
                <img src={aboutUsFactsImage} alt="aboutUsFactsImage"/>
            </div>
            <div className='aboutUsFactsContent'>
                <h1>Family-driven, customer focused</h1>
                <p>Our success as a product development company is based on the ability to provide innovative and cost-effective
                    solutions to our clients. This is accomplished by maintaining the highest levels of quality, professionalism,
                    and business ethics.</p>
                <div className='factsWrapper'>
                    <div>
                        <h1>20+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div>
                        <h1>300+</h1>
                        <p>Clients</p>
                    </div>
                    <div>
                        <h1>10.000.000</h1>
                        <p>Products made</p>
                    </div>
                    <div>
                        <h1>10+</h1>
                        <p>Employees</p>
                    </div>
                </div>
            </div>
            <div className='aboutUsFactsInformation'>
                <div>
                    <h3>850m² facility</h3>
                </div>
                <div>
                    <h3>600m² production department</h3>
                </div>
                <div>
                    <h3>100m² administrative department</h3>
                </div>
                <div>
                    <h3>150m² warehouse</h3>
                </div>
            </div>
        </section>
    )
}