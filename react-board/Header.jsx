import {
  HeaderDiv,
  TitleBig,
  TitleLogoDiv,
  TitleSmall,
  SubHeaderDiv,
} from "./styledComponent";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <HeaderDiv>
      <TitleLogoDiv>
        <TitleBig>멋사</TitleBig>
        <TitleSmall>익명게시판</TitleSmall>
      </TitleLogoDiv>
      <SubHeaderDiv>
        {darkMode ? (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
        ) : (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
        )}
      </SubHeaderDiv>
    </HeaderDiv>
  );
}

export default Header;
