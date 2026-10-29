// All content for the Career check prototype lives here.
// Ratings are deliberately broad (low / medium / high), not percentages.

export type RiskLevel = "low" | "medium" | "high";

export type Career = {
  id: string;
  degree: string;
  emoji: string;
  risk: RiskLevel;
  riskSummary: string;
  aiTasks: string[];
  humanTasks: string[];
  skills: { name: string; why: string }[];
};

export const careers: Career[] = [
  {
    id: "nursing",
    degree: "Nursing",
    emoji: "🩺",
    risk: "low",
    riskSummary:
      "AI can help with paperwork and spotting patterns, but caring for real people face to face is still very much a human job.",
    aiTasks: [
      "Drafting patient notes and handover summaries",
      "Flagging changes in a patient's vital signs",
      "Sorting rosters and reminders",
    ],
    humanTasks: [
      "Comforting worried patients and families",
      "Making judgment calls at the bedside",
      "Hands-on care like dressing wounds",
    ],
    skills: [
      { name: "Digital health tools", why: "Get comfortable with the apps and systems hospitals already use." },
      { name: "Checking AI outputs", why: "Know when an alert or summary looks wrong and needs a second look." },
      { name: "Compassionate communication", why: "Explaining things kindly is something patients always value." },
    ],
  },
  {
    id: "law",
    degree: "Law",
    emoji: "⚖️",
    risk: "medium",
    riskSummary:
      "AI is getting good at searching and summarising documents, so the reading-heavy parts of law will change, but advising and arguing for people won't go away.",
    aiTasks: [
      "Searching through past cases",
      "Summarising long contracts",
      "Writing a first draft of standard letters",
    ],
    humanTasks: [
      "Advising clients on what to actually do",
      "Arguing a case in court",
      "Weighing up what's fair and ethical",
    ],
    skills: [
      { name: "Fact-checking AI research", why: "AI can make up cases that sound real, so checking sources matters." },
      { name: "Client conversations", why: "Listening well and explaining clearly builds trust." },
      { name: "Tech and privacy law basics", why: "New rules about AI and data are a growing area of work." },
    ],
  },
  {
    id: "it",
    degree: "IT / Computer Science",
    emoji: "💻",
    risk: "high",
    riskSummary:
      "AI coding tools are already part of the job, so day-to-day work will change a lot, but someone still has to design, check, and take responsibility for the systems.",
    aiTasks: [
      "Writing routine bits of code",
      "Suggesting fixes for common bugs",
      "Writing basic tests and documentation",
    ],
    humanTasks: [
      "Working out what users actually need",
      "Designing how a whole system fits together",
      "Reviewing code for safety and quality",
    ],
    skills: [
      { name: "Working with AI coding tools", why: "Learn to use them well, and spot when they're wrong." },
      { name: "Problem solving", why: "Breaking a messy problem into clear steps is still the core skill." },
      { name: "Teamwork and communication", why: "Most software is built by teams talking to real users." },
    ],
  },
  {
    id: "business",
    degree: "Business",
    emoji: "📊",
    risk: "medium",
    riskSummary:
      "AI can crunch numbers and write reports fast, so routine office tasks will shift, but leading people and making big decisions still needs humans.",
    aiTasks: [
      "Making charts and summaries from data",
      "Drafting emails and reports",
      "Answering simple customer questions",
    ],
    humanTasks: [
      "Leading and motivating a team",
      "Negotiating deals",
      "Deciding on strategy when things are uncertain",
    ],
    skills: [
      { name: "Data literacy", why: "Understand what the numbers mean, not just how to make a chart." },
      { name: "Leadership", why: "Teams need people who can guide and support them through change." },
      { name: "Using AI responsibly", why: "Know what's okay to share with AI tools and what isn't." },
    ],
  },
  {
    id: "design",
    degree: "Design",
    emoji: "🎨",
    risk: "medium",
    riskSummary:
      "AI can churn out quick images and layouts, which changes how designers work, but having a point of view and understanding people is still yours.",
    aiTasks: [
      "Generating rough concept images",
      "Resizing and tidying up files",
      "Suggesting colour palettes",
    ],
    humanTasks: [
      "Understanding what the client really wants",
      "Making creative choices with taste",
      "Testing designs with real people",
    ],
    skills: [
      { name: "AI as a sketching tool", why: "Use it to explore ideas faster, then make them your own." },
      { name: "User research", why: "Talking to people and watching how they use things never goes out of style." },
      { name: "Presenting your ideas", why: "Explaining why a design works is half the job." },
    ],
  },
  {
    id: "teaching",
    degree: "Teaching",
    emoji: "🍎",
    risk: "low",
    riskSummary:
      "AI can help plan lessons and mark simple quizzes, but building relationships with students and managing a classroom is deeply human.",
    aiTasks: [
      "Drafting lesson plans and worksheets",
      "Marking simple quizzes",
      "Making practice questions",
    ],
    humanTasks: [
      "Building trust with students",
      "Managing a busy classroom",
      "Noticing when a student is struggling",
    ],
    skills: [
      { name: "Teaching with AI", why: "Help students use AI tools wisely, not just ban them." },
      { name: "Wellbeing support", why: "Caring for students' wellbeing matters more than ever." },
      { name: "Adapting lessons", why: "Being flexible with new tools and different learners is a big strength." },
    ],
  },
];

export const funFacts: string[] = [
  "AI can write a poem in seconds, but ask it to fold a fitted sheet and it's just as lost as the rest of us.",
  "Some AI chatbots have confidently made up facts. Always double-check, even if it sounds very sure of itself!",
  "AI image tools used to be famous for drawing people with way too many fingers. They're getting better, but still worth a count. ✋",
  "Lots of 'AI' you already use is pretty ordinary: spam filters, map directions, and the songs your music app recommends.",
];
