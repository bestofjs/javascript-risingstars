import { useRouter } from "next/router";
import React from "react";
import { FormattedMessage } from "react-intl";

const Banner = () => {
  const router = useRouter();
  const {
    query: { year },
  } = router;

  return (
    <div className="banner">
      <div className="container">
        <h1>
          <FormattedMessage id="header.title" />
        </h1>
      </div>
      <style jsx>{`
        .banner {
          width: 100%;
          height: 12rem;
          background-color: #e65100;
          display: flex;
          align-items: center;
          text-align: center;
          padding: 40px 0;
          color: white;
          background: #e65100 url("/img/${year}/banner.png");
        }
        @media (min-width: 800px) {
          .banner {
            height: 300px;
          }
        }
        h1 {
          text-shadow: 0 3px 3px rgba(143, 50, 0, 0.99);
        }
      `}</style>
    </div>
  );
};

export default Banner;
