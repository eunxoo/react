import React, { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList.js";

// const dummyList = [
//   {
//     id: 1,
//     author: "양은수",
//     content: "하이1",
//     emotion: 5,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "김연경",
//     content: "하이2",
//     emotion: 4,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "김준면",
//     content: "하이3",
//     emotion: 3,
//     create_date: new Date().getTime(),
//   },
// ];

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
};

export default App;
