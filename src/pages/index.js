import React from "react";
import BlogTab from "../components/BlogTab";
import Navigation from '../components/Navigation';
import SEO from "../components/seo";


export default function Index() {
  return (<div>
            <SEO/>
            <Navigation/>
            <BlogTab />
          </div>);
}

