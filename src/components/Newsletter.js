import React from 'react'
import { FormattedMessage } from 'react-intl'

const Newsletter = ({ intl }) => (
  <div className="newsletter container container-section small-container markdown-body">
    <h3>
      <FormattedMessage
        id="common.newsletter.title"
        defaultMessage={`Get the latest JS rankings in your inbox every week`}
      />
    </h3>
    <p>
      <FormattedMessage
        id="common.newsletter.text"
        defaultMessage={`Sign up for {link}'s newsletter, and...`}
        values={{
          link: <a href="https://bestof.js.org/">bestof.js.org</a>
        }}
      />
    </p>
    <div id="mc_embed_signup">
      <form
        action="https://bestof.us17.list-manage.com/subscribe/post?u=3dac4d68c87b7450b93cadab8&amp;id=193206ef13"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <input
          type="email"
          placeholder={intl.formatMessage({
            id: 'common.newsletter.placeholder',
            defaultMessage: 'Your Email'
          })}
          name="EMAIL"
          className="required email"
          id="mce-EMAIL"
        />
        <button
          className="button"
          type="submit"
          value="Sign Up"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        >
          <FormattedMessage
            id="common.newsletter.button"
            defaultMessage={`Sign Up`}
          />
        </button>
      </form>
    </div>
  </div>
)

export default Newsletter
