import React from "react";
import ProjectsTab from "../components/ProjectsTab";
import Navigation from '../components/Navigation';
import SEO from "../components/seo";
import Copyright from "../components/Copyright";

export default function Contacts() {
  return (<div>
            <SEO title="Projects | Anton Bakuteev"/>
            <Navigation/>
            <ProjectsTab />
            <Copyright/>

          </div>);
}

