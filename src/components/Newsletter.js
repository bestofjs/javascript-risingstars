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
          link: <a href="https://bestofjs.org/">bestofjs.org</a>
        }}
      />
    </p>
    <div id="mc_embed_signup">
      <form
        action="https://api.elasticemail.com/contact/add?version=2"
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
        <input
          name="publiclistid"
          id="CwyOqTgB"
          value="72c3249d-ed56-484d-b586-71c80b84d469"
          type="hidden"
        />
        <input
          name="publicaccountid"
          value="0941e3f0-7b53-413c-a17f-06bff65f0a13"
          type="hidden"
        />
        <input
          name="publicformid"
          value="e362aac5-777d-4d8b-a537-c807041f37cb"
          type="hidden"
        />
        <input
          name="returnUrl"
          value="https://weekly.bestofjs.org/check-email/"
          type="hidden"
        />
        <input
          name="activationReturnUrl"
          value="https://weekly.bestofjs.org/email-confirmed/"
          type="hidden"
        />
        <input name="alreadyactiveurl" value="" type="hidden" />
        <input
          name="activationTemplate"
          value="subscriber-activation"
          type="hidden"
        />
        <input name="source" value="WebForm" type="hidden" />
        <input id="ewf_captcha" name="captcha" value="false" type="hidden" />
        <input name="notifyEmail" value="" type="hidden" />
      </form>
    </div>
  </div>
)

export default Newsletter
