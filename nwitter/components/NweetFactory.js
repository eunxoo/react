import React, { useState, useRef } from "react";
import { storageService, dbService } from "fbase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    let fileUrl = "";
    if (attachment !== "") {
      const uuid = uuidv4();
      const storageRef = ref(storageService, `${userObj.uid}/${uuid}`);
      //imageId = `${userObj.uid}/${uuid}`;
      const response = await uploadString(storageRef, attachment, "data_url");
      fileUrl = await getDownloadURL(response.ref);
    }
    const nweetObj = {
      text: nweet,
      creatorId: userObj.uid,
      fileUrl,
      createAt: Date.now(),
    };
    await addDoc(collection(dbService, "nweets"), nweetObj);
    setNweet("");
    setAttachment("");
    fileInput.current.value = "";
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      //파일 로딩
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => {
    setAttachment("");
    fileInput.current.value = "";
  };
  const fileInput = useRef();

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          type="text"
          placeholder="What's on your mind?"
          onChange={onChange}
          maxLength={120}
        />
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          ref={fileInput}
        />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
    </>
  );
};

export default NweetFactory;
