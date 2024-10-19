import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }

  return (
    <header className="flex justify-between items-center mt-5 mb-12">
      <Link to="/" className="font-bold">
        کافه بلاگ
      </Link>
      <nav className="flex gap-4">
        {username && (
          <>
            <Link to="/create">ایجاد پست جدید</Link>
            <a onClick={logout}>خروج</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/register">ثبت نام</Link>
            <Link to="/login">ورود</Link>
          </>
        )}
      </nav>
    </header>
  );
}
