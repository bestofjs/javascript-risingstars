import Image from "next/image";

type Props = {
  guestId: string;
  content: React.ReactNode;
};
export function Guest({ guestId, content }: Props) {
  return (
    <div className="guest">
      <div className="guest-blurb">{content}</div>
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
