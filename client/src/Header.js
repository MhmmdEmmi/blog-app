import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center mt-5 mb-12">
      <Link to="/" className="font-bold">
        کافه بلاگ
      </Link>
      <nav className="flex gap-4">
        <Link to="/register">ثبت نام</Link>
        <Link to="/login">ورود</Link>
      </nav>
    </header>
  );
}
