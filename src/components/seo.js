import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
  const { site } = useStaticQuery(query);

  const { yandex_verification, google_site_verification } = site.siteMetadata;

  return (
    <Helmet>
      <meta name="yandex-verification" content={yandex_verification} />
      <meta name="google-site-verification" content={google_site_verification} />

    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  yandex_verification: PropTypes.string,
  google_site_verification: PropTypes.string
};

SEO.defaultProps = {
  yandex_verification: null,
  google_site_verification: null
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        yandex_verification
        google_site_verification
      }
    }
  }
`;
