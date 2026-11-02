"use client";

import { useState } from "react";
import Header from "@/components/Header";
import RiskMeter from "@/components/RiskMeter";
import TasksCard from "@/components/TasksCard";
import FunFact from "@/components/FunFact";
import { careers } from "@/data/careers";

export default function CareerCheck() {
  const [careerId, setCareerId] = useState("");
  const [showPlan, setShowPlan] = useState(false);
  const career = careers.find((c) => c.id === careerId);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 space-y-8 px-4 py-10">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">Career check</p>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">What are you studying?</h1>
          <p className="mt-2 text-slate-600">Pick your degree to see how AI might change the work, and what you can do about it.</p>
          <select
            value={careerId}
            onChange={(e) => {
              setCareerId(e.target.value);
              setShowPlan(false);
            }}
            className="mt-5 w-full max-w-sm rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="">Choose a degree…</option>
            {careers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.emoji} {c.degree}
              </option>
            ))}
          </select>
        </section>

        {career ? (
          <>
            <section className="grid gap-6 md:grid-cols-2">
              <RiskMeter risk={career.risk} summary={career.riskSummary} />
              <TasksCard aiTasks={career.aiTasks} humanTasks={career.humanTasks} />
            </section>

            <section className="text-center">
              <button
                onClick={() => setShowPlan(!showPlan)}
                className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-500"
              >
                {showPlan ? "Hide my action plan" : "See my action plan 🚀"}
              </button>

              {showPlan && (
                <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-left">
                  <h2 className="text-lg font-bold text-indigo-900">3 skills to build now for {career.degree}</h2>
                  <ol className="mt-4 grid gap-4 sm:grid-cols-3">
                    {career.skills.map((skill, i) => (
                      <li key={skill.name} className="rounded-xl bg-white p-4 shadow-sm">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                          {i + 1}
                        </span>
                        <h3 className="mt-2 font-semibold text-slate-800">{skill.name}</h3>
                        <p className="mt-1 text-sm text-slate-600">{skill.why}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </section>
          </>
        ) : (
          <p className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
            👆 Choose a degree above to see your results.
          </p>
        )}

        <FunFact />
      </main>
    </>
  );
}
