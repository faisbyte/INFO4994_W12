const links = ["Home", "AI 101", "Career check", "Rules and policy"];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <span className="text-xl font-extrabold tracking-tight text-indigo-600">
          AI <span className="text-amber-500">&amp;</span> Me
        </span>
        <nav className="flex flex-wrap gap-1 text-sm">
          {links.map((link) => {
            const active = link === "Career check";
            return (
              <a
                key={link}
                href="#"
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 ${
                  active
                    ? "bg-indigo-100 font-semibold text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
