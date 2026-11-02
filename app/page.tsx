import Link from "next/link";
import Header from "@/components/Header";

const sections = [
  { href: "/ai-101", emoji: "🤖", title: "AI 101", text: "What AI actually is, in plain English. No maths required." },
  { href: "/career-check", emoji: "🎓", title: "Career check", text: "Pick your degree and see how AI might change the work." },
  { href: "/rules-and-policy", emoji: "📜", title: "Rules and policy", text: "What's okay (and not okay) when using AI at uni and work." },
  { href: "/action-plan", emoji: "🚀", title: "Action plan", text: "Small, doable steps to get AI-ready this semester." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-4 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            AI is changing work.
            <br />
            <span className="text-indigo-600">You&apos;ve got this.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            A quick, friendly guide to what AI means for your studies and your future career. No tech background needed.
          </p>
          <Link
            href="/career-check"
            className="mt-6 inline-block rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-500"
          >
            Check my career 🎓
          </Link>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300"
            >
              <span className="text-3xl">{s.emoji}</span>
              <h2 className="mt-2 text-lg font-bold text-slate-800">{s.title}</h2>
              <p className="mt-1 text-slate-600">{s.text}</p>
            </Link>
          ))}
        </section>

        <p className="text-center text-sm text-slate-500">
          Big idea: AI tends to change <strong>tasks</strong> more than it replaces whole <strong>jobs</strong>.
        </p>
      </main>
    </>
  );
}
