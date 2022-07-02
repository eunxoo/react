import { Main, MediaDiv } from "./styledComponent";
import { darkTheme, lightTheme, GlobalStyles } from "./styles";
import { ThemeProvider } from "styled-components";
import Header from "./Header.jsx";
import Slogun from "./Slogun.jsx";
import Footer from "./Footer.jsx";
import ShowPostList from "./ShowPostList";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ShowPost from "./ShowPost";
import WritePost from "./WritePost";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <Routes>
              <Route path="/" element={<ShowPostList />}></Route>
              <Route path="/write" element={<WritePost></WritePost>}></Route>
              <Route
                path="/post/:postID"
                element={<ShowPost></ShowPost>}
              ></Route>
            </Routes>
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
