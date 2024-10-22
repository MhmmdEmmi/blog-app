import { Link } from "react-router-dom";
import jalaali from "jalaali-js";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  // Convert the Gregorian date to Jalali
  const gregorianDate = new Date(createdAt);
  const jalaliDate = jalaali.toJalaali(gregorianDate);

  // Format Jalali date as YYYY/MM/DD
  const formattedJalaliDate = `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 mb-7">
      {/* Image */}
      <div className=" md:col-span-1">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      {/* Texts */}
      <div className="md:col-span-2 ">
        <Link to={`/post/${_id}`}>
          <h2 className="text-xl font-bold">{title}</h2>
        </Link>
        {/* Information paragraph */}
        <p className="flex gap-2 my-3 text-zinc-500 text-xs font-bold">
          {/* Author */}
          <a className="text-zinc-800">{author.username}</a>
          <time>{formattedJalaliDate}</time>
        </p>
        {/* Summary of the post */}
        <p className="leading-5">{summary}</p>
      </div>
    </div>
  );
}
