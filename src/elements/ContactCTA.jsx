
import './ContactCTA.css'
import {Link} from "react-router-dom";

export default function ContactCTA() {

    return (
        <section className="contactCTA">
            <h3>Interested in a cooperation? We're excited to explore how we can work together. We're just a click away!</h3>
            <Link to='/contact' className='Link'>Contact us</Link>
        </section>
    )
}