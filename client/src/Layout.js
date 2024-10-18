import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <main className="max-w-2xl p-3 my-0 mx-auto">
      {/* Header */}
      <Header />
      {/* Render Body */}
      <Outlet />
    </main>
  );
}
