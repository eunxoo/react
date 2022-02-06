//import React, { useState, useEffect } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList.js";

const dummyList = [
  {
    id: 1,
    author: "양은수",
    content: "하이1",
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김연경",
    content: "하이2",
    emotion: 4,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김준면",
    content: "하이3",
    emotion: 3,
    create_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
