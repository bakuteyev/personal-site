import React from "react";
import ResumeTab from "../components/ResumeTab";
import Navigation from '../components/Navigation';
import SEO from "../components/seo";


export default function Index() {
  return (<div>
            <SEO/>
            <Navigation/>
            <ResumeTab />
          </div>);
}

