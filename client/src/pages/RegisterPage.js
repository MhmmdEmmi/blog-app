import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // User registration
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) alert("ثبت نام با موفقیت انجام شد.");
    else alert("خطایی رخ داده است! لطفا مجددا تلاش کنید");
  }
  // /User registration

  return (
    <div class="flex flex-col items-center justify-center py-20">
      <div class="max-h-auto mx-auto w-80">
        <div class="mb-10 space-y-1">
          <p class="text-xl font-semibold">ثبت نام</p>
          <p class="text-sm text-gray-500">
            حساب کاربری ندارید؟ به صورت رایگان ثبت نام کنید
          </p>
        </div>
        {/* Login form   */}
        <form class="w-full" onSubmit={register}>
          <div class="mb-10 space-y-3">
            <div class="space-y-2">
              {/* Email */}
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  ایمیل
                </label>
                <input
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="ایمیل خود را وارد نمایید"
                  name="email"
                  type="email"
                />
              </div>
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
            <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
