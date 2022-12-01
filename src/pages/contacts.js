import React from "react";
import ResumeTab from "../components/ResumeTab";
import Navigation from '../components/Navigation';
import SEO from "../components/seo";
import Copyright from "../components/Copyright";

export default function Contacts() {
  return (<div>
            <SEO title="About Me | Anton Bakuteev"/>
            <Navigation/>
            <ResumeTab />
            <Copyright/>
          </div>);
}

