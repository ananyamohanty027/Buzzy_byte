import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram ,FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">546, MG Road, Bangalore 5600 32, India</p>
        <p className="p__opensans">+91 86601 23758</p>
        <p className="p__opensans">+91 65442 85331</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.w_logo} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to have a time like never before.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://github.com/ananyamohanty027"><FiGithub/></a>
          <a href="https://www.linkedin.com/in/ananya-mohanty-763197222/"><FiLinkedin/></a>
          <a href='mailto:mohantyananya81@gmail.com'><FiMail/></a>
          <a href='https://www.instagram.com/ananya_mohanty11/'><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">11:00 am - 2:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 3:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">ⓒ2024 Buzzy Bytes. All Rights reserved.</p>

    </div>

  </div>
);

export default Footer;