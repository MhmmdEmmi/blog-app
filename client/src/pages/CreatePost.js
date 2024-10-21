import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  " image",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    ev.preventDefault();
    console.log(files);
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
    });

    if (response.ok) setRedirect(true);
  }

  if (redirect) return <Navigate to={"/"} />;

  return (
    <div class="flex flex-col items-center justify-center py-20">
      <div class="max-h-auto mx-auto w-full">
        <div class="mb-10 space-y-1">
          <p class="text-xl font-semibold">ایجاد پست جدید</p>
          <p class="text-sm text-gray-500">
            جهت ایجاد پست، تمامی فیلدهـای زیر را تکمیل کنید.
          </p>
        </div>
        {/* create new post form   */}
        <form class="w-full" onSubmit={createNewPost}>
          <div class="mb-10 space-y-3">
            <div class="space-y-2">
              {/* Title */}
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="title"
                >
                  عنوان
                </label>
                <input
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="title"
                  placeholder="عنوان پست را وارد نمایید"
                  name="title"
                  type="text"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                />
              </div>
              {/* Summary */}
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="summary"
                >
                  خلاصه پست
                </label>
                <input
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="summary"
                  placeholder="خلاصه‌ای از پست خود را وارد نمایید"
                  name="summary"
                  type="text"
                  value={summary}
                  onChange={(ev) => setSummary(ev.target.value)}
                />
              </div>
              {/* File */}
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="summary"
                >
                  تصویر پست
                </label>
                <input
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="file"
                  onChange={(ev) => setFiles(ev.target.files)}
                />
              </div>
              {/* The text of the post */}
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="text"
                >
                  متن پست
                </label>
                <ReactQuill
                  modules={modules}
                  formats={formats}
                  value={content}
                  onChange={(newValue) => setContent(newValue)}
                />
              </div>
            </div>
            <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              ایجـاد پست
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
