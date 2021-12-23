import { TranslatedBlock } from "components/translated-block";

export const Guest = ({ guestId }) => (
  <div className="guest">
    <div className="guest-blurb">
      <TranslatedBlock path={guestId} />
    </div>
    <div className="guest-portrait">
      <img src={`/img/guests/${guestId}.jpg`} />
    </div>
  </div>
);
