import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram, faReact } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h3><FontAwesomeIcon icon={faReact}/>React<span>Shop</span></h3>
                <p className="footer-company-name">Oleg Meserenko © 2020</p>
            </div>

            <div className="footer-center">
                <h3>Contact Me</h3>
                <div className='contacts'>
                    <a href='tel:+380992755518'>
                        <FontAwesomeIcon icon={faPhoneAlt} className='icons' />
                        <p>+380992755518</p>
                    </a>
                </div>
                <div className='contacts'>
                    <a href="mailto:meserenko.oleg@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className='icons'/>
                        <p>meserenko.oleg@gmail.com</p>
                    </a>
                </div>

            </div>

            <div className="footer-right">
                <h3>Social Networks</h3>
                <div className="footer-icons">

                    <a href='https://www.facebook.com/oleg.meserenko.58/'><FontAwesomeIcon icon={faFacebook} size='1x'/></a>
                    <a href='https://github.com/Meserenko'><FontAwesomeIcon icon={faGithub} size='1x'/></a>
                    <a href='https://www.instagram.com/olegmeserenko/'><FontAwesomeIcon icon={faInstagram} size='1x'/></a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;

