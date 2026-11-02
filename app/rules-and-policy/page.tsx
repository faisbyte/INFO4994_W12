import Header from "@/components/Header";

const levels = [
  {
    label: "Usually fine",
    emoji: "🟢",
    className: "bg-emerald-50 border-emerald-200",
    examples: ["Asking AI to explain a tricky concept", "Brainstorming ideas to get started", "Checking your grammar"],
  },
  {
    label: "Check first",
    emoji: "🟡",
    className: "bg-amber-50 border-amber-200",
    examples: ["Using AI to help draft parts of an assignment", "Summarising readings for study notes", "Using AI tools at a part-time job"],
  },
  {
    label: "Not okay",
    emoji: "🔴",
    className: "bg-rose-50 border-rose-200",
    examples: ["Handing in AI-written work as your own", "Using AI in an exam when it's not allowed", "Pasting private or personal info into a chatbot"],
  },
];

const rules = [
  {
    title: "At uni",
    text: "Rules can differ between units. Your unit outline or tutor will say what's allowed. If you use AI, be upfront about how.",
  },
  {
    title: "At work",
    text: "Many workplaces have their own AI policies, especially about customer and company data. Ask before you use a new tool.",
  },
  {
    title: "In the law",
    text: "Governments are starting to make rules for AI, like the EU's AI Act. Privacy laws already apply to the personal data you share.",
  },
];

export default function RulesAndPolicy() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-4 py-10">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Rules and policy</p>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">Is this okay?</h1>
          <p className="mt-2 text-slate-600">A simple traffic light guide to using AI. Your own unit or employer rules always come first.</p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {levels.map((level) => (
            <div key={level.label} className={`rounded-2xl border p-6 ${level.className}`}>
              <h2 className="text-lg font-bold text-slate-800">
                {level.emoji} {level.label}
              </h2>
              <ul className="mt-3 space-y-2 text-slate-700">
                {level.examples.map((ex) => <li key={ex}>{ex}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {rules.map((r) => (
            <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-bold text-slate-800">{r.title}</h2>
              <p className="mt-2 text-slate-600">{r.text}</p>
            </div>
          ))}
        </section>

        <p className="rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50 p-5 text-center text-slate-700">
          <strong>Golden rule:</strong> if you wouldn&apos;t be comfortable telling your tutor or boss how you used AI, don&apos;t do it.
        </p>
      </main>
    </>
  );
}
