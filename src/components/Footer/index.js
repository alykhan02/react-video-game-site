import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
  } from './FooterElements';
  

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook /> 
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram /> 
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter /> 
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialLogo>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  
    );
};

export default Footer;
