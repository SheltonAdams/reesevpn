import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesH2,
  Servicesp,
  ServicesCard,
} from "./ServicesElements";
import Icon1 from "../../Images/svg-6.svg";
import Icon2 from "../../Images/svg-5.svg";
import Icon3 from "../../Images/svg-4.svg";

function Services() {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Stress</ServicesH2>
            <Servicesp>
              We help reduce your stress by keeping your information secure
              which allows you to focus on the things that matter.
            </Servicesp>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtually Everywhere</ServicesH2>
            <Servicesp>
              With our bulletproof security,fast connection speed, and unlimited
              bandwidth. You wont have to worry about slow buffering times
              getting in your way.
            </Servicesp>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>More than just a VPN</ServicesH2>
            <Servicesp>
              Block malware, trackers, and intrusive ads with FREE Threat
              Protection.
            </Servicesp>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
