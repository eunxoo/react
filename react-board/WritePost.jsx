import React, { useState } from "react";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from "./styledComponent";
import WriteTitle from "./WriteTitle";
import InputPost from "./InputPost";

const SubmitComponent = React.memo(() => (
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WritePost = (props) => {
  //useState 만들어주기
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });

  //2개를 동시에 관리하기 위한 객체 만들어주기
  const { title, contents } = inputs;

  //onChange 함수 만들어주기
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <PostSection>
      <WriteTitle />
      <PostWriteDiv>
        <InputPost
          onChange={onChange}
          title={title}
          contents={contents}
        ></InputPost>
      </PostWriteDiv>
      <SubmitComponent />
    </PostSection>
  );
};

export default WritePost;
