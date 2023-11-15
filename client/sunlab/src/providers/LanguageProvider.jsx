import { createContext, useContext, useState } from "react";

const languageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLocalLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );
  const setLanguage = (language) => {
    setLocalLanguage(language);
    localStorage.setItem("lang", language);
  };
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(languageContext);
}
