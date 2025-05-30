/*  normal React + Helmet imports */
import React, { useRef } from 'react';          /* ← added useRef */
import { Helmet } from 'react-helmet';

/*   component imports generated by TeleportHQ */
import Navbar       from '../components/navbar';
import Hero         from '../components/hero';
import Features1    from '../components/features1';
import CTA          from '../components/cta';
import Features2    from '../components/features2';
import Pricing      from '../components/pricing';
import Steps        from '../components/steps';
import Testimonial  from '../components/testimonial';
import Contact      from '../components/contact';
import Footer       from '../components/footer';

import './home.css';

/* ------------------------------------------------------------------ */

const Home = () => {
  /*  CREATE a ref that will later point at the Pricing section */
  const pricingRef = useRef(null);
  const featureRef = useRef(null);

  return (
    <div className="home-container">
      <Helmet>
        <title>Tony Montana Fitness</title>
      </Helmet>

      {/*   PAGE SECTIONS -------------------------------------------------- */}
      <Navbar featureRef={featureRef} pricingRef={pricingRef} />

      {/* -- HERO ----------------------------------------------------------- */}
      <Hero
        pricingRef={pricingRef}
        featureRef={featureRef}
        heading1="Transform Your Body with Tony Montana"
        image2Src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzMDI1MHw&ixlib=rb-4.0.3&q=80&w=1080"
        image9Src="https://images.unsplash.com/photo-1486218119243-13883505764c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTU4ODA1NHw&ixlib=rb-4.0.3&q=80&w=1080"
        rootClassName="heroroot-class-name"
      />

      {/* -- FEATURE BLOCKS ------------------------------------------------- */}
      <Features1 />
      <CTA 
      pricingRef={pricingRef}
      />

      <div ref={featureRef}>
        {/*   Add the ref to the Features2 component */}
      <Features2
        feature1Title="Tailored Fitness Plans"
        feature2Title="Personalized Workout Coaching"
        feature3Title="Nutrition Advice with Tony"
        feature1Description="Welcome to Tony Montana Fitness! We offer personalized fitness plans and expert guidance to help you achieve your fitness goals. Our services include tailored workout programs, nutrition guidance, and training sessions with Tony himself. Hear what our satisfied clients have to say about Tony's effective approach to fitness and nutrition. Contact us today for consultations and inquiries to kickstart your fitness journey."
        feature2Description="Get personalized fitness plans and expert guidance to help you achieve your fitness goals."
        feature3Description="Tony Montana Nutrition offers personalized nutrition plans and expert guidance to help clients achieve their health goals. Services include customized meal plans, dietary advice, and consultations with Tony. Testimonials rave about Tony's successful approach to nutrition and wellness. Contact Tony for appointments and questions to kickstart your journey to a healthier lifestyle."
      />

      </div>

      {/* -- PRICING -------------------------------------------------------- */}
      {/*   Wrap Pricing in a div that receives the ref */}
      <div ref={pricingRef}>
        <Pricing rootClassName="pricingroot-class-name" />
      </div>

      {/* -- REMAINDER ------------------------------------------------------ */}
      {/* <Steps rootClassName="stepsroot-class-name" /> */}

      
{/* Calendly Embed — React-friendly */}
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/irumph2003"
  style={{ width: '100%', minWidth: '100%', height: '800px' }}
/>

<Helmet>
  {/* This loads Calendly’s widget script after the DOM is ready */}
  <script
    type="text/javascript"
    src="https://assets.calendly.com/assets/external/widget.js"
    async
  />
</Helmet>

      <Testimonial author4Src="https://images.unsplash.com/photo-1512005286309-e5b890ca36b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTUzMzUwM3w&ixlib=rb-4.0.3&q=80&w=1080" />
      <Contact />
      <Footer
        action1="Subscribe"
        content2="2023 Tony Montana Fitness. All Rights Reserved."
        content3="Designed by Isaiah C. Rumph"
        cookiesLink="Cookie Policy"
      />
    </div>
  );
};

export default Home;
