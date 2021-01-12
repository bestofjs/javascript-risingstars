import React from "react";

import styles from "./footer.module.css";

const Footer = ({ language }) => (
  <div className={styles.footer}>
    <div className="container small-container">
      <p>
        <a href="https://bestofjs.org">Best of JS</a> is a project by{" "}
        <a href="https://michaelrambeau.com/">Michael Rambeau</a>, made in
        Osaka, Japan.
      </p>
      <p className={styles.poweredBy}>
        <span>Powered by</span>
        <a
          href="https://vercel.com?utm_source=bestofjs"
          className={styles.poweredByLogo}
        >
          <img width="80" src="/vercel.svg" alt="Vercel" />
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
