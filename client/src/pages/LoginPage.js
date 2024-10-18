export default function LoginPage() {
  return (
    <div class="flex flex-col items-center justify-center py-20">
      <div class="max-h-auto mx-auto w-80">
        <div class="mb-10 space-y-1">
          <p class="text-xl font-semibold">ورود به پنل</p>
          <p class="text-sm text-gray-500">وارد حساب کاربری خود شوید!</p>
        </div>
        {/* Login form   */}
        <form class="w-full">
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
