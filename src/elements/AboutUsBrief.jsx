
import './AboutUsBrief.css'
import injectionMoldNet from '../assets/injectionMoldNet.png';
import brothers from '../assets/2brothers.jpg';
import {Link} from "react-router-dom";

export default function AboutUsBrief() {

    return (
        <section className="aboutUsBrief">
            <div className='aboutUsBriefContent'>
                <h2>A family company formed by two brothers</h2>
                <p>Say something about how it all started. <br/>
                    We are committed to provide high value products with the responsibility toward the society and environment.
                    Everyday work is based on usage of international CAD/CAM/CAE design methods supported by our professional team.
                    With the customized approach to each project (injection plastic molds, blow molds, processing metal sheet molds,
                    plastic products, etc.) we ensure that we exceed expectations every time.</p>
                <Link to='/about' className='Link'>Learn more</Link>
            </div>
            <div className='aboutUsBriefImageWrapper'>
                <img src={brothers} alt='Injection Mold Image'/>
            </div>
        </section>
    )
}