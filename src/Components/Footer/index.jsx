import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  WebsiteRights,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>VPN Apps</FooterLinkTitle>
              <FooterLink to="/signin">Windows</FooterLink>
              <FooterLink to="/signin">macOS</FooterLink>
              <FooterLink to="/signin">Linux</FooterLink>
              <FooterLink to="/signin">Android</FooterLink>
              <FooterLink to="/signin">IOS/IPhone/IPad</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Engage</FooterLinkTitle>
              <FooterLink to="/signin">What Is a VPN</FooterLink>
              <FooterLink to="/signin">IP Lookup</FooterLink>
              <FooterLink to="/signin">What Is My IP?</FooterLink>
              <FooterLink to="/signin">Social Responsibility</FooterLink>
              <FooterLink to="/signin">Customer Stories</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Help</FooterLinkTitle>
              <FooterLink to="/signin">Support Center</FooterLink>
              <FooterLink to="/signin">Tutorials</FooterLink>
              <FooterLink to="/signin">FAQ</FooterLink>
              <FooterLink to="/signin">Privacy Policy</FooterLink>
              <FooterLink to="/signin">Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <WebsiteRights>
          Reese © {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
