import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    // Post page
    <div>
      {/* Title */}
      <h1 className="text-center text-3xl font-bold">{postInfo.title}</h1>
      {/* Created date & time */}
      <time className="block text-center">{postInfo.createdAt}</time>
      {/* Author */}
      <div>{postInfo.author.username}</div>
      {/* Image */}
      <div>
        <img src={`http://localhost:4000/${postInfo.cover}`} alt=""></img>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
    </div>
  );
}
