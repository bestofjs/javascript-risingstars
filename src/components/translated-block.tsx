import ReactMarkdown from "react-markdown";
import get from "lodash/get";

import { useAppData } from "app-data";

export const TranslatedBlock = ({ path }: { path: string }) => {
  const { translations } = useAppData();
  const markdown =
    get(translations, path) || `No translation for this path: "${path}"`;

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};
