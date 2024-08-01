import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import "./ToggleLangs.css";
import { LangContext } from "../../context/langContext";

export default function ToggleLangs() {
  const { toggleLang } = useContext(LangContext);

  return (
    <div className="container-langs">
      <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="france" />
      <img onClick={() => toggleLang('ES')} src={SpanishFlag} alt="espagne" />
      <img onClick={() => toggleLang('EN')} src={EnglishFlag} alt="angleterre" />
    </div>
  );
}
