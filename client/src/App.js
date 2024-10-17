function App() {
  return (
    <main className="max-w-2xl p-3 my-0 mx-auto">
      {/* Logo */}
      <header className="flex justify-between items-center mt-5 mb-12">
        <a href="#" className="font-bold">
          کافه بلاگ
        </a>
        <nav className="flex gap-4">
          <a href="#">ثبت نام</a>
          <a href="#">ورود</a>
        </nav>
      </header>
      {/* Posts */}
      <div className="grid grid-cols-3 gap-5 mb-7">
        {/* Image */}
        <div className="col-span-1">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60a50f4518844e32d8c33c5f/1715063379900-7DOUUDQMGMBIB4B4G32T/IMG_0559.jpg?format=2500w"
            alt=""
          />
        </div>
        {/* Texts */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold">
            فهرستی از زیباترین کافه های جهان
          </h2>
          {/* Information paragraph */}
          <p className="flex gap-2 my-3 text-zinc-500 text-xs font-bold">
            {/* Author */}
            <a className="text-zinc-800">محمد امامی</a>
            <time>1403/7/26 08:17:38PM</time>
          </p>
          {/* Summary of the post */}
          <p className="leading-5">
            اندرو چانگ معمار، عکاس، طراح وب سایت، نوشیدنی قهوه و بنیانگذار Best
            Cafe Designs است. سایت او رشد فرهنگ جهانی کافه ها را ترسیم می کند و
            با بیش از 40 معمار، عکاس و نویسنده همکاری می کند. در این مصاحبه
            متوجه می‌شویم که ایده بهترین طرح‌های کافه چگونه شکل گرفت، کافه‌هایی
            که او ارائه می‌کند، گرایش‌های طراحی، طراحی وب‌سایت و برترین کافه‌های
            او.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
