import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
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
    <div className="space-y-2">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold">{postInfo.title}</h1>
      {/* Created date & time */}
      <time className="block text-center text-sm">{postInfo.createdAt}</time>
      {/* Author */}
      <div className="block text-center text-sm">
        {postInfo.author.username}
      </div>

      {/* Edit post */}
      {userInfo.id === postInfo.author._id && (
        <div className="py-4">
          <Link
            to={`/edit/${postInfo._id}`}
            className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            ویرایش پست
          </Link>
        </div>
      )}

      {/* Image */}
      <div>
        <img src={`http://localhost:4000/${postInfo.cover}`} alt=""></img>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
    </div>
  );
}
