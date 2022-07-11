import React, { useState, useEffect, useCallback } from "react";
import {
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  CursorDiv,
} from "./styledComponent";
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import EachPost from "./EachPost";

function ShowPostList({ apiUrl }) {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/write");
  };

  const getPostList = useCallback(() => {
    setLoading(true);
    axios.get(`${apiUrl}list/?page=${page}&page_size=10`).then((response) => {
      const lastPage = Math.ceil(response.data.count / 10);
      const tempPages = [];
      for (let i = 1; i <= lastPage; i++) {
        tempPages.push(i);
      }
      setPages(tempPages);
      setPostList(response.data.results);
      setLoading(false);
    });
  });
  useEffect(getPostList, [page]);

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <CursorDiv>
            <FontAwesomeIcon onClick={getPostList} icon={faArrowsRotate} />
          </CursorDiv>
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
              {/* Loading.io*/}
            </LoadingDiv>
          ) : postList.length === 0 ? (
            <LoadingDiv>기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  postID={element.id}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      <PagingSection>
        <PagenumberDiv
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        {pages.map((pageNum) => (
          <PagenumberDiv key={pageNum} onClick={() => setPage(pageNum)}>
            {pageNum}
          </PagenumberDiv>
        ))}
        <PagenumberDiv
          onClick={() => {
            if (page < pages.length) setPage(page + 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}

export default ShowPostList;
