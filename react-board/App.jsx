import { Main, MediaDiv } from "./styledComponent";
import { darkTheme, lightTheme, GlobalStyles } from "./styles";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Slogun from "./Slogun";
import Footer from "./Footer";
import ShowPostList from "./ShowPostList";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ShowPost from "./ShowPost";
import WritePost from "./WritePost";

const apiUrl = "https://reactapitest.pythonanywhere.com/api/";
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
              <Route
                exact
                path="/"
                element={<ShowPostList apiUrl={apiUrl} />}
              ></Route>
              <Route
                path="/write"
                element={<WritePost apiUrl={apiUrl}></WritePost>}
              ></Route>
              <Route
                path="/post/:postID"
                element={<ShowPost apiUrl={apiUrl}></ShowPost>}
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
