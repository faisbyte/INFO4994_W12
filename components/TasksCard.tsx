function TaskList({ title, icon, items, className }: { title: string; icon: string; items: string[]; className: string }) {
  return (
    <div className={`rounded-xl p-4 ${className}`}>
      <h3 className="font-semibold text-slate-800">
        {icon} {title}
      </h3>
      <ul className="mt-2 space-y-1.5 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TasksCard({ aiTasks, humanTasks }: { aiTasks: string[]; humanTasks: string[] }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-800">Who does what?</h2>
      <TaskList title="Tasks AI might do" icon="🤖" items={aiTasks} className="bg-sky-50" />
      <TaskList title="Tasks you'll still do" icon="🙋" items={humanTasks} className="bg-violet-50" />
    </div>
  );
}
