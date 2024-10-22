import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        // setUsername(userInfo.username);
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className="flex justify-between items-center mt-5 mb-12">
      <Link to="/" className="text-lg font-bold">
        کافه بلاگ
      </Link>
      <nav className="flex gap-4">
        {username && (
          <>
            <span>
              سـلام، <span className="font-medium">{username}</span>
            </span>
            <Link to="/create">ایجاد پست جدید</Link>
            <Link onClick={logout}>خروج</Link>
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
