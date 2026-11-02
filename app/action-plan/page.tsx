"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const steps = [
  "Try one AI tool for a study task, like explaining a concept you're stuck on",
  "Fact-check something an AI told you against a reliable source",
  "Read your unit outlines for the AI rules in each subject",
  "Pick one human skill to grow: speaking up in tutorials, teamwork, or writing",
  "Look up how AI is used in a job you're interested in",
  "Talk to someone working in your field about how AI affects their day",
];

export default function ActionPlan() {
  const [done, setDone] = useState<boolean[]>(steps.map(() => false));
  const count = done.filter(Boolean).length;

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 space-y-8 px-4 py-10">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Action plan</p>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">Your AI-ready checklist</h1>
          <p className="mt-2 text-slate-600">Small steps you can take this semester. Tick them off as you go!</p>
        </section>

        <div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Progress</span>
            <span>
              {count} / {steps.length}
            </span>
          </div>
          <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all"
              style={{ width: `${(count / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <ul className="space-y-3">
          {steps.map((step, i) => (
            <li key={step}>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-indigo-300">
                <input
                  type="checkbox"
                  checked={done[i]}
                  onChange={() => setDone(done.map((d, j) => (j === i ? !d : d)))}
                  className="mt-1 h-5 w-5 accent-indigo-600"
                />
                <span className={done[i] ? "text-slate-400 line-through" : "text-slate-700"}>{step}</span>
              </label>
            </li>
          ))}
        </ul>

        {count === steps.length && (
          <p className="rounded-2xl bg-emerald-50 p-5 text-center font-semibold text-emerald-800">
            🎉 All done! You&apos;re officially ahead of the curve.
          </p>
        )}

        <p className="text-center text-slate-600">
          Want skills for your degree?{" "}
          <Link href="/career-check" className="font-semibold text-indigo-600 hover:underline">
            Try the Career check →
          </Link>
        </p>
      </main>
    </>
  );
}
