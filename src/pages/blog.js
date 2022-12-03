import React from "react";
import BlogTab from "../components/BlogTab";
import Copyright from "../components/Copyright";
import Navigation from '../components/Navigation';
import SEO from "../components/seo";


export default function Index() {
  return (<div>
            <SEO title="Blog | Anton Bakuteev"/>
            <Navigation/>
            <BlogTab />
            <Copyright/>
          </div>);
}
