import Image from "next/image";
import { TranslatedBlock } from "~/translated-block";

type Props = {
  guestId: string;
  year: number;
  language: string;
};
export function Guest({ guestId, year, language }: Props) {
  return (
    <div className="guest">
      <div className="guest-blurb">
        {/* @ts-expect-error Server Component */}
        <TranslatedBlock
          id={`guests/${guestId}`}
          language={language}
          year={year}
        />
      </div>
      <div className="guest-portrait">
        <Image
          src={`/img/guests/${guestId}.jpg`}
          width="120"
          height="120"
          alt={`Guest Writer ${guestId}`}
        />
      </div>
    </div>
  );
}
