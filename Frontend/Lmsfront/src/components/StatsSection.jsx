import { useEffect, useState } from "react";

const stats = [
  { value: 3, suffix: "k+", label1: "Successfully", label2: "Trained" },
  { value: 15, suffix: "+", label1: "Classes", label2: "Completed" },
  { value: 97.5, suffix: "+", label1: "Satisfaction", label2: "Rate" },
  { value: 100, suffix: "+", label1: "Students", label2: "Community" },
];

export default function StatsSection() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#0D6EFD] text-white rounded-3xl overflow-hidden">
          {stats.map((item, i) => (
            <StatBox key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBox({ value, suffix, label1, label2, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 sec
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const progress = elapsed / duration;
        const currentValue = start + progress * (end - start);
        setCount(currentValue.toFixed(1)); // 1 decimal place
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end.toFixed(1));
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);

  return (
    <div
      className={`relative p-10 text-center ${
        index !== 0 ? "border-l border-blue-300/30" : ""
      }`}
    >
      <WaveBG />
      <h1 className="text-4xl font-bold">
        {count}
        {suffix}
      </h1>
      <p className="mt-2 text-lg">
        <span className="font-semibold">{label1}</span> {label2}
      </p>
    </div>
  );
}

/* Wave Background */
function WaveBG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      viewBox="0 0 600 200"
      preserveAspectRatio="none"
    >
      <path
        d="M0 100 Q150 0 300 100 T600 100 V200 H0 Z"
        fill="rgba(255,255,255,0.12)"
      />
    </svg>
  );
}
