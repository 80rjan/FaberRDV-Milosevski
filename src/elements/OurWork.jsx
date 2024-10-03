
import './OurWork.css'
import {Link} from "react-router-dom";

export default function OurWork() {

    return (
        <section className='ourWork'>
            <h1>Our Work</h1>
            <div className='ourWorkTextWrapper'>
                <div className='ourWorkText'>
                    <h3>Injection Molds</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='ourWorkText'>
                    <h3>Blow Molds</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className='ourWorkButtonWrapper'>
                <Link to='/molds' className='Link'>Learn more about our molds</Link>
                <Link to='/products' className='Link'>Learn more about products created by our molds</Link>
            </div>
        </section>
    )
}