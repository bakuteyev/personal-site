import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { yandex_verification, 
          google_site_verification,
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage
  } = site.siteMetadata;


const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
}

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="yandex-verification" content={yandex_verification} />
      <meta name="google-site-verification" content={google_site_verification} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}


    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  yandex_verification: PropTypes.string,
  google_site_verification: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  yandex_verification: null,
  google_site_verification: null,
  title: null,
  description: null,
  image: null,
  article: false
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        yandex_verification
        google_site_verification
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
