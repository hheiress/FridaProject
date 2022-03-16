import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { useState } from "react";
import TabsContent from "./TabsContent";

const InfoBlock = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [tabs, setTabs] = useState(TabsContent);
  console.log(tabs);

  //   const iframe= '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6076.5229453351385!2d-3.6984700000000004!3d40.403058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262df77c2d4f%3A0x8da3596a9d187d3!2sC.%20de%20Palos%20de%20la%20Frontera%2C%2020%2C%2028012%20Madrid!5e0!3m2!1ses!2ses!4v1647423597446!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowFullScreen loading="lazy"></iframe>';
  return (
    <>
      <section className="view-info ">
         <Tabs
            id="controlled-tab-"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3 justify-content-center"
          >
            
            <Tab eventKey="general" title={tabs.general.title}>
              <p>
                {tabs.general.description}
              </p>
            </Tab>
            <Tab eventKey="sanitary" title={tabs.measures.title}>
              <p>
                La experiencia inmersiva Vida y Obra de Frida Kahlo applying all
                necessary measures in place to guarantee visitors’ safety.
              </p>
              <ul>
                <li>Reducing the capacity in all the rooms and spaces.</li>
                <li>Constantly disinfecting facilities and surfaces.</li>
                <li>
                  Placing disinfection mats at the entrance of the building.
                </li>
                <li>
                  Making alcohol-based hand sanitizers available to visitors.
                </li>
                <li>
                  Taking the temperature of the visitors before entering.
                  Visitors running a temperature higher than 37º C will not be
                  allowed to enter the exhibition.
                </li>
              </ul>
              <p>For your safety, remember:</p>
              <ul>
                <li>The use of face masks is mandatory.</li>
                <li>
                  Use the disinfectant gels you will find at your disposal
                  and/or wash your hands frequently.
                </li>
                <li>
                  Always keep the recommended safety distance from others
                  (1.5m).
                </li>
                <li>
                  In the store we will provide you with gloves and hydrogel for
                  a safer purchase.
                </li>
                <li>
                  The cloakroom service is disabled. Entry is not permitted with
                  packages larger than 35 x 35 cm or with umbrellas (except
                  folding umbrellas).
                </li>
              </ul>
              <p>We recommend you:</p>
              <ul>
                <li>
                  Purchase your tickets online, remember that we have reduced
                  visitor’s capacity in the exhibition.
                </li>
                <li>
                  Make your visit individually or with the people you live with.
                </li>
                <li>Pay by card and/or in contactless mode.</li>
                <li>
                  We are working to keep you safe, and so we kindly ask you to
                  behave responsibly to make sure your safety is protected.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="normative" title="Normative">
              <ul>
                <li>
                  Once the tickets have been purchased, no changes or refunds
                  are accepted.
                </li>
                <li>
                  Children up to the age of 16 must be accompanied by a
                  responsible adult.
                </li>
                <li>
                  It is necessary to prove age when required by the
                  organization.
                </li>
                <li>Access with baby strollers is not allowed</li>
                <li>
                  Cloakroom service is disabled. Entry with packages larger than
                  35 x is not allowed 35 cm or with umbrella (except folding)
                </li>
                <li>
                  Access with any other wheeled mobility systems such as
                  bicycles is not allowed. skateboards, skates or any other
                  electrical transport device, except those that are necessary
                  for people with reduced mobility (wheelchair). Carrying
                  backpacks are allowed.
                </li>
                <li>
                  You are allowed to take photos for personal and non-commercial
                  use.
                </li>
                <li>
                  Access to the exhibition with food, drinks, large backpacks,
                  suitcases, helmets is not allowed. motorbike, umbrella, or
                  with pets / except guide dogs).
                </li>
                <li>Please keep your mobile phone silent.</li>
              </ul>
            </Tab>
            <Tab eventKey="schedules" title="Schedules">
              <p>Schedule</p>
              <p>Monday to Sunday from 11 a.m. to 21 p.m. </p>
              <p>* Last access one hour before closing.</p>
              <p>
                * To ensure a pleasant experience for all visitors, access to
                the exhibition well be every hour.
              </p>
              <p>
                ** We recommend being on time as we cannot guarantee entry
                outside of allotted times due to capacity limitations.
              </p>
            </Tab>
            <Tab eventKey="tickets" title="Tickets"></Tab>
            <Tab eventKey="location" title="How to arrive">
              <p></p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6076.5229453351385!2d-3.6984700000000004!3d40.403058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262df77c2d4f%3A0x8da3596a9d187d3!2sC.%20de%20Palos%20de%20la%20Frontera%2C%2020%2C%2028012%20Madrid!5e0!3m2!1ses!2ses!4v1647423597446!5m2!1ses!2ses"
                width="400"
                height="300"
                allowFullScreen
                loading="lazy"
              ></iframe>
              {/* <LocationMap /> */}
            </Tab>
        </Tabs>;
      </section>
    </>
  );
};
export default InfoBlock;
