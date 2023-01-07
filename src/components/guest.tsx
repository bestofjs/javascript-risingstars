import { TranslatedBlock } from "components/translated-block";

export const Guest = ({ guestId }: {guestId: string}) => (
  <div className="guest">
    <div className="guest-blurb">
      <TranslatedBlock path={guestId} />
    </div>
    <div className="guest-portrait">
      <img
        src={`/img/guests/${guestId}.jpg`}
        width="120"
        height="120"
        alt={`Guest Writer ${guestId}`}
      />
    </div>
  </div>
);
