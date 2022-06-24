import { Main, MediaDiv } from "./styledComponent";

import { darkTheme, lightTheme, GlobalStyles } from "./styles";
import { ThemeProvider } from "styled-components";
import Header from "./Header.jsx";
import Slogun from "./Slogun.jsx";
import Footer from "./Footer.jsx";
import ShowPostList from "./ShowPostList";
import { useState } from "react";

function App() {
  const initialPostList = [
    { id: 1, title: "학보, 시사 N 대학기사상 취재", replCount: 1 },
    { id: 2, title: "학보, 시사 N 대학기사상 취재", replCount: 43 },
    { id: 3, title: "학보, 시사 N 대학기사상 취재", replCount: 2 },
  ];
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "학보, 시사 N 대학기사상 취재", replCount: 21 },
    ]);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostList
              loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost}
            />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
