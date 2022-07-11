import React, { useState } from "react";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from "./styledComponent";
import WriteTitle from "./WriteTitle";
import InputPost from "./InputPost";
import axios from "axios";

const SubmitComponent = React.memo(({ onSubmit }) => (
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WritePost = ({ apiUrl }) => {
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

  const onSubmit = () => {
    axios
      .post(`${apiUrl}posts/`, {
        title: inputs.title,
        contents: inputs.contents,
        repls: [],
      })
      .then((response) => {
        console.log(response);
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
      <SubmitComponent onSubmit={onSubmit} />
    </PostSection>
  );
};

export default WritePost;
