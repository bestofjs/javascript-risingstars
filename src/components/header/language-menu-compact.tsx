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
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const path = event.target.value;
    router.push(path);
  };

  return (
    <div className="language-menu-mobile">
      <div className="control has-icons-left">
        <div className="select">
          <select
            className="language-dropdown"
            onChange={onChange}
            value={getPath(year, currentLanguage)}
          >
            {languages.map((item) => (
              <LanguageOption item={item} key={item.code} year={year} />
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

const LanguageOption = ({
  item,
  year,
}: {
  item: RisingStars.Language;
  year: number;
}) => {
  return <option value={getPath(year, item.code)}>{item.text}</option>;
};

function getPath(year: number, language: string) {
  return `/${year}/${language}`;
}
