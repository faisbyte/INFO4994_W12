import Header from "@/components/Header";

const basics = [
  {
    title: "What is AI?",
    text: "Computer programs that learn patterns from lots of examples, then use those patterns to make guesses: the next word, what's in a photo, which song you'll like.",
  },
  {
    title: "How do chatbots work?",
    text: "Tools like ChatGPT are trained on huge amounts of text. They predict what words are likely to come next. That's why they sound fluent, but can still be wrong.",
  },
  {
    title: "Where is it already?",
    text: "Spam filters, map directions, face unlock, autocorrect, streaming recommendations. You probably use AI dozens of times a day.",
  },
];

const goodAt = ["Summarising long text", "Spotting patterns in data", "Drafting first versions", "Doing repetitive tasks fast"];
const badAt = ["Knowing if something is true", "Understanding feelings", "Taking responsibility", "Common sense in new situations"];

const myths = [
  { myth: "AI understands what it says.", truth: "It predicts patterns. It doesn't 'know' things the way people do." },
  { myth: "If AI says it confidently, it's right.", truth: "AI can make things up and sound very sure. Always check important facts." },
  { myth: "AI will take every job.", truth: "It mostly changes parts of jobs. People who can use it well are in a strong spot." },
];

export default function Ai101() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-4 py-10">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">AI 101</p>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">AI, minus the jargon</h1>
          <p className="mt-2 text-slate-600">Everything you need to know in about three minutes.</p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {basics.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800">{b.title}</h2>
              <p className="mt-2 text-slate-600">{b.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h2 className="font-bold text-slate-800">👍 AI is good at</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
              {goodAt.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-violet-50 p-6">
            <h2 className="font-bold text-slate-800">🙅 AI struggles with</h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
              {badAt.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800">Myth or fact? (tap to find out)</h2>
          <div className="mt-4 space-y-3">
            {myths.map((m) => (
              <details key={m.myth} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <summary className="cursor-pointer font-semibold text-slate-800">&ldquo;{m.myth}&rdquo;</summary>
                <p className="mt-2 text-slate-600">
                  <strong className="text-rose-600">Myth!</strong> {m.truth}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
