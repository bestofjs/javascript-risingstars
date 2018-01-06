import React from 'react';

const Newsletter = () => (
  <div className="newsletter">
    <h3>Get the latest JS rankings in your inbox every week</h3>
    <p>Sign up for <a href="http://bestof.js.org">Best of JS</a>'s newsletter, and you'll receive exclusive stats about the most popular JavaScript projects each week.</p>
    <div id="mc_embed_signup">
      <form
        action="//sachagreif.us2.list-manage.com/subscribe/post?u=b5af47765edbd2fc173dbf27a&amp;id=d8282e7e96"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <input type="email" placeholder="Your email" name="EMAIL" className="required email" id="mce-EMAIL" />
        <input
          className="button"
          type="submit"
          value="Sign Up"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
      </form>
    </div>
  </div>
);

export default Newsletter;
