import Nweet from "components/Nweet";
import { storageService, dbService } from "fbase";
import {
  getDocs,
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState, useRef } from "react";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState();
  useEffect(() => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const docRef = await addDoc(collection(dbService, "nweets"), {
    //     text: nweet,
    //     createAt: Date.now(),
    //     createorId: userObj.uid,
    //   });
    //   console.log("Document writen with ID : ", docRef.id);
    // } catch (error) {
    //   console.error("Error adding document: ", error);
    // }
    // setNweet("");
    const uuid = uuidv4();
    const storageRef = ref(storageService, `${userObj.uid}/${uuid}`);
    //imageId = `${userObj.uid}/${uuid}`;
    const response = await uploadString(storageRef, attachment, "data_url");
    console.log(response);
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
    setAttachment(null);
    fileInput.current.value = "";
  };
  const fileInput = useRef();
  return (
    <div>
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
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.createorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
