import React, { useEffect, useState, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  LoadingDiv,
  LoadingImg,
  PostReplDiv,
  ReplTitleDiv,
  ReplWriter,
  Repl,
  WriterDiv,
  ReplInput,
  ReplSubmitDiv,
} from "./styledComponent";

const postData = {
  title: `바운스`,
  contents: `아기사자가 돌아서면 두 눈이 마주칠까, 심장이 bounce, bounce 두근 대 들릴까 봐 겁나
    한참을 망설이다 용기를 내 밤새워 준비한 내 개사 들어줘, 처음 본 순간부터 아기사자랑 친해질꺼야 생각했어~~,
    Baby, you're my trampoline You make me bounce bounce - 아기사자들은 다 귀여워 최고 -
    `,
};

const replData = [
  { id: 2, content: `반가워요!` },
  { id: 3, content: `멋쟁이 사자처럼 최고!` },
];

const ShowPost = (props) => {
  const Params = useParams;
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);
  const replInput = useRef();

  useEffect(() => {
    setTimeout(() => {
      setPost(postData);
      setPostLoading(false);
    }, 300);
    replInput.current.focus();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRepls(replData);
      setReplLoading(false);
    }, 1000);
  });

  //input창 상태관리
  const [repl, setRepl] = useState("");

  const onChange = (e) => {
    setRepl(e.target.value);
  };

  const countRepls = (repls) => {
    console.log("리뷰 개수를 세는 중...!");
    return repls.length;
  };

  const PostAndRepl = React.memo(
    ({ post, postLoading, replCount, replLoading, repls }) => {
      return (
        <>
          <PostTitleDiv>
            <PostTitle>
              {/* title */}
              {post && post.title}
            </PostTitle>
          </PostTitleDiv>
          {postLoading ? (
            <LoadingDiv>
              <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
            </LoadingDiv>
          ) : (
            <PostReplDiv>{post && post.contents} </PostReplDiv>
          )}
          {/* post contents */}
          <ReplTitleDiv>댓글 {replCount}</ReplTitleDiv>
          {replLoading ? (
            <LoadingDiv>
              <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
            </LoadingDiv>
          ) : (
            repls &&
            repls.map((element) => (
              <PostReplDiv key={element.id}>
                <ReplWriter>익명</ReplWriter>
                <Repl>{element.contents}</Repl>
              </PostReplDiv>
            ))
          )}
        </>
      );
    }
  );
  //memo hook실습
  const replCount = useMemo(() => countRepls(repls), [repls]);

  return (
    <div>
      <PostSection>
        <PostAndRepl
          post={post}
          postLoading={postLoading}
          replCount={replCount}
          replLoading={replLoading}
          repls={repls}
        />
        <WriterDiv>
          <ReplInput
            onChange={onChange}
            value={repl}
            ref={replInput}
          ></ReplInput>
          <ReplSubmitDiv>
            <span>입력</span>
          </ReplSubmitDiv>
        </WriterDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;
