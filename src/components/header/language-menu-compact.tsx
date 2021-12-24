import { useRouter } from "next/router";

/*
Dropdown language menu used on small screens
*/
type Props = {
  currentLanguage: string;
  year: number;
  languages: RisingStars.Language[];
};
export const LanguageMenuCompact = ({
  currentLanguage,
  year,
  languages,
}: Props) => {
  const router = useRouter();
  const onChange = (e) => {
    const path = e.target.value;
    router.push(path);
  };

  return (
    <div className="language-menu-mobile">
      <div className="control has-icons-left">
        <div className="select">
          <select
            className="language-dropdown"
            onChange={onChange}
            value={currentLanguage}
          >
            {languages.map((item) => (
              <LanguageLink item={item} key={item.code} year={year} />
            ))}
          </select>
        </div>
        <div className="icon is-left">
          <img src="/globe.svg" width="24" height="24" />
        </div>
      </div>
    </div>
  );
};

const LanguageLink = ({ item, year }) => {
  return <option value={`/${year}/${item.code}`}>{item.text}</option>;
};
