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
import { useNavigate } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <HeaderDiv>
      <TitleLogoDiv onClick={goHome}>
        <TitleBig>멋사</TitleBig>
        <TitleSmall>익명게시판</TitleSmall>
      </TitleLogoDiv>
      <SubHeaderDiv>
        {darkMode ? (
          <div>
            <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
          </div>
        )}
      </SubHeaderDiv>
    </HeaderDiv>
  );
}

export default Header;
