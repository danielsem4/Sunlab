import { useLanguage } from "../../providers/LanguageProvider";
import LanguagesData from "./Texts";

function Translator({ children }) {
  const key = children instanceof Array ? children.join("") : children;
  return <>{Translate(key)}</>;
}

export function Translate(key) {
  const { language } = useLanguage(); // should poped from the localle storage
  console.log(LanguagesData[language]);
  return LanguagesData[language][key] || key;
}

export default Translator;
