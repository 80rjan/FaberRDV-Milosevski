
import './Footer.css'
import Logo from "../assets/Logo.svg";
import {Link} from "react-router-dom";

export default function Footer() {

    return (
        <section className='footer' >
            <div className='footerContent'>
                <Link to='/' className='navLogo' onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 600);
                }}>
                    <img src={Logo} alt="FaberRDV Milosevski"/>
                    <h3>FaberRDV <br/> Milosevski</h3>
                </Link>
                <ul className='footerLinkWrapper'>
                    <li>
                        <Link to="/products" className='footerLink'>Products</Link>
                    </li>
                    <li>
                        <Link to='/molds' className='footerLink'>Molds</Link>
                    </li>
                    <li>
                        <Link to='/about' className='footerLink'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='footerLink'>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <hr />
            <p className='footerWatermark'>&copy; Copyright FaberRDV Milosevski</p>
            <p className='footerWatermark'>Website by Shifter, 2024</p>
        </section>
    )
}