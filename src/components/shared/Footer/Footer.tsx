import React, { FC } from 'react';
import { FOOTER_LINKS } from '../../../constants/footerLinks';
import SocialLink from './SocialLink/SocialLink';
import classes from './Footer.module.css';

const Footer: FC = () => {
  //portfolio link data
  const portfolioLink = {
    id: 0,
    link: 'https://dohmeid.netlify.app/',
    iconClass: '',
    label: 'Go to Doha Hmeid Portfolio',
  };

  //rendering the social media links
  const LINKS = FOOTER_LINKS.map((item) => (
    <li key={item.id}>
      <SocialLink linkData={item} text="" />
    </li>
  ));

  return (
    <footer className={classes.footer}>
      <div className={classes.copyrightContainer}>
        <p>Copyright &copy; 2024 TravelHub.</p>
        <p>
          Designed and Developed by{' '}
          Shivam Khadde. All Rights
          Reserved.
        </p>
      </div>

      <ul className={classes.socialLinks}>{LINKS}</ul>
    </footer>
  );
};

export default Footer;
