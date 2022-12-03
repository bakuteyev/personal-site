import React from "react";
import AboutUsTab from "../components/AboutUsTab";
import Navigation from '../components/Navigation';
import SEO from "../components/seo";
import Copyright from "../components/Copyright";

export default function Contacts() {
  return (<div>
            <SEO title="About Us | Anton Bakuteev"/>
            <Navigation/>
            <AboutUsTab />
            <Copyright/>
          </div>);
}

