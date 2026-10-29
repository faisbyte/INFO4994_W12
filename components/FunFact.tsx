"use client";

import { useState } from "react";
import { funFacts } from "@/data/careers";

export default function FunFact() {
  const [index, setIndex] = useState(0);

  return (
    <aside className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-bold text-amber-800">💡 Did you know?</h2>
        <span className="text-xs text-amber-700">
          {index + 1} / {funFacts.length}
        </span>
      </div>
      <p className="mt-2 text-slate-700">{funFacts[index]}</p>
      <button
        onClick={() => setIndex((index + 1) % funFacts.length)}
        className="mt-3 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-amber-950 hover:bg-amber-300"
      >
        Next fact →
      </button>
    </aside>
  );
}
