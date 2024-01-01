import styles from "./footer.module.css";
import { VercelLogo } from "./svg-logos";

export const Footer = () => (
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
          aria-label="Vercel"
        >
          <VercelLogo width={80} height={18.1} />
        </a>
      </p>
    </div>
  </div>
);
