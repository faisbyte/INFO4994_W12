"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "AI 101", href: "/ai-101" },
  { label: "Career check", href: "/career-check" },
  { label: "Rules and policy", href: "/rules-and-policy" },
  { label: "Action plan", href: "/action-plan" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-indigo-600">
          AI <span className="text-amber-500">&amp;</span> Me
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm">
          {links.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 ${
                  active
                    ? "bg-indigo-100 font-semibold text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
