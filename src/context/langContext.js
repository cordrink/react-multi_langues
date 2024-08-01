import React, { createContext, useState } from "react";

export const LangContext = createContext();

const supportedLang = ['EN', 'FR', 'ES'];
let browserLang = navigator.language.slice(0, 2).toUpperCase();

if(supportedLang.indexOf(browserLang) === -1) {
    console.log("not supporteed");
    browserLang = "EN";
}

const ContextProvider = (props) => {
  const [lang, setLang] = useState(browserLang);

  const toggleLang = (changeLang) => {
    setLang(changeLang);
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {props.children}
    </LangContext.Provider>
  );
};

export default ContextProvider;
