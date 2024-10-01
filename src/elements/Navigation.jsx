
import './Navigation.css';
import Logo from '../assets/Logo.svg';
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";

export default function Navigation() {
    const location = useLocation();
    const [deviceType, setDeviceType] = useState(getDeviceType(window.innerWidth));
    const [menuActive, setMenuActive] = useState(false);

    function getDeviceType(width) {
        if (width <= 768) {
            return 'Mobile';
        } else if (width <= 1024) {
            return 'Tablet';
        } else {
            return 'Desktop';
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(getDeviceType(window.innerWidth));
        };

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navigation');
            const height = navbar.clientHeight;
            if (height) {
                if (window.scrollY > height*3) {
                    navbar.classList.add('navSticky');
                } else {
                    navbar.classList.remove('navSticky');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id='navigation' className="navigation">
            <Link to='/' className='navLogo'>
                <img src={Logo} alt="FaberRDV Milosevski" />
                <h3>FaberRDV <br/> Milosevski</h3>
            </Link>
            {
                deviceType==='Desktop' ?
                <ul className='navigationLinkWrapper'>
                    <li>
                        <Link
                            to="/products"
                            className='navLink'
                            style={location.pathname === '/products' ? {color: '#000092'} : {}}
                        >Products</Link>
                    </li>
                    <li>
                        <Link
                            to='/molds'
                            className='navLink'
                            style={location.pathname === '/molds' ? {color: '#000092'} : {}}
                        >Molds</Link>
                    </li>
                    <li>
                        <Link
                            to='/about'
                            className='navLink'
                            style={location.pathname === '/about' ? {color: '#000092'} : {}}
                        >About</Link>
                    </li>
                    <li>
                        <button className='navBtn'>
                            <Link to='/contact'>Contact Us</Link>
                        </button>
                    </li>
                </ul> :
                    !menuActive ?
                        <button className='navMenuBtn' onClick={() => setMenuActive(true)}>
                            <Menu color='#000092' size="2rem"/>
                        </button> :
                        <div className='navMenu'>
                            <button className='navMenuBtn' onClick={() => setMenuActive(false)}>
                                <X color='#000092' size="2rem"/>
                            </button>
                            <ul className='navigationLinkWrapper'>
                                <li>
                                    <Link
                                        to="/products"
                                        className='navLink'
                                        style={location.pathname === '/products' ? {color: '#000092'} : {}}
                                        onClick={() => setMenuActive(false)}
                                    >Products</Link>
                                </li>
                                <li>
                                    <Link
                                        to='/molds'
                                        className='navLink'
                                        style={location.pathname === '/molds' ? {color: '#000092'} : {}}
                                        onClick={() => setMenuActive(false)}
                                    >Molds</Link>
                                </li>
                                <li>
                                    <Link
                                        to='/about'
                                        className='navLink'
                                        style={location.pathname === '/about' ? {color: '#000092'} : {}}
                                        onClick={() => setMenuActive(false)}
                                    >About</Link>
                                </li>
                                <li>
                                    <Link
                                        to='/contact'
                                        className='navLink'
                                        style={location.pathname === '/contact' ? {color: '#000092'} : {}}
                                        onClick={() => setMenuActive(false)}
                                    >Contact Us</Link>
                                </li>
                            </ul>
                        </div>
            }
        </nav>
    )
}