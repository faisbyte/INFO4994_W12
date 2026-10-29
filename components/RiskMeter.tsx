import type { RiskLevel } from "@/data/careers";

// Gauge geometry: a semicircle centred at (100, 100) with radius 80.
const CX = 100;
const CY = 100;
const R = 80;

// Angle in degrees: 180 = far left, 0 = far right.
function point(angle: number, radius = R) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY - radius * Math.sin(rad) };
}

function arc(from: number, to: number) {
  const start = point(from);
  const end = point(to);
  return `M ${start.x} ${start.y} A ${R} ${R} 0 0 1 ${end.x} ${end.y}`;
}

const segments = [
  { from: 180, to: 121, color: "#34d399" }, // low
  { from: 119, to: 61, color: "#fbbf24" }, // medium
  { from: 59, to: 0, color: "#fb7185" }, // high
];

const needleAngle: Record<RiskLevel, number> = { low: 150, medium: 90, high: 30 };

const labels: Record<RiskLevel, { text: string; className: string }> = {
  low: { text: "Low exposure", className: "bg-emerald-100 text-emerald-800" },
  medium: { text: "Medium exposure", className: "bg-amber-100 text-amber-800" },
  high: { text: "High exposure", className: "bg-rose-100 text-rose-800" },
};

export default function RiskMeter({ risk, summary }: { risk: RiskLevel; summary: string }) {
  const tip = point(needleAngle[risk], R - 18);
  const label = labels[risk];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800">AI risk meter</h2>
      <p className="text-sm text-slate-500">How much AI is likely to change this job</p>

      <svg viewBox="0 0 200 115" className="mx-auto mt-4 w-full max-w-xs" role="img" aria-label={label.text}>
        {segments.map((s) => (
          <path key={s.from} d={arc(s.from, s.to)} stroke={s.color} strokeWidth={18} fill="none" />
        ))}
        <line
          x1={CX}
          y1={CY}
          x2={tip.x}
          y2={tip.y}
          stroke="#334155"
          strokeWidth={4}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
        <circle cx={CX} cy={CY} r={7} fill="#334155" />
        <text x={20} y={114} fontSize={9} fill="#64748b" textAnchor="middle">Low</text>
        <text x={180} y={114} fontSize={9} fill="#64748b" textAnchor="middle">High</text>
      </svg>

      <span className={`mx-auto mt-2 rounded-full px-3 py-1 text-sm font-semibold ${label.className}`}>
        {label.text}
      </span>
      <p className="mt-4 text-slate-700">{summary}</p>
      <p className="mt-3 text-xs text-slate-400">
        &ldquo;Exposure&rdquo; means tasks will change, not that the job disappears.
      </p>
    </div>
  );
}
