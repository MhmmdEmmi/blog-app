export default function Post({
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="grid grid-cols-3 gap-5 mb-7">
      {/* Image */}
      <div className="col-span-1">
        <img src={"http://localhost:4000/" + cover} alt="" />
      </div>
      {/* Texts */}
      <div className="col-span-2">
        <h2 className="text-xl font-bold">{title}</h2>
        {/* Information paragraph */}
        <p className="flex gap-2 my-3 text-zinc-500 text-xs font-bold">
          {/* Author */}
          <a className="text-zinc-800">{author.username}</a>
          <time>{createdAt}</time>
        </p>
        {/* Summary of the post */}
        <p className="leading-5">{summary}</p>
      </div>
    </div>
  );
}
