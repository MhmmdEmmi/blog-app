import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  // User login
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("ورود انجام نشد!");
    }
  }
  // /User login

  if (redirect) return <Navigate to={"/"} />;

  return (
    <div class="flex flex-col items-center justify-center py-20">
      <div class="max-h-auto mx-auto w-80">
        <div class="mb-10 space-y-1">
          <p class="text-xl font-semibold">ورود به پنل</p>
          <p class="text-sm text-gray-500">وارد حساب کاربری خود شوید!</p>
        </div>
        {/* Login form   */}
        <form class="w-full" onSubmit={login}>
          <div class="mb-10 space-y-3">
            <div class="space-y-2">
              {/* Username */}
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="username"
                >
                  نام کاربری
                </label>
                <input
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="username"
                  placeholder="نام کاربری خود را وارد نمایید"
                  name="username"
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                />
              </div>
              {/* Password */}
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  رمز عبور
                </label>
                <input
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  placeholder="رمز عبور خود را وارد نمایید"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
            </div>
            <button
              class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              type="submit"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
