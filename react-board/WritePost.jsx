import React, { useState } from "react";
import {
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
} from "./styledComponent";

function WritePost() {
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
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
      <PostWriteDiv>
        <TitleInput
          name="title"
          value={title}
          placeholder="제목을 입력해주세요. (15자 이내)"
          onChange={onChange}
        />
        <ContentsInput
          name="contents"
          value={contents}
          cols="30"
          rows="10"
          onChange={onChange}
        ></ContentsInput>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
}

export default WritePost;
