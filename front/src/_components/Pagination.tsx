'use client';

import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function Pagination({ indexItem }: { indexItem?: number }) {
  const index = indexItem ?? 0;
  const targetProgress = index === 0 ? 50 : 100;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(targetProgress), 300);
    return () => clearTimeout(timer);
  }, [targetProgress]);

  return (
    <div className="w-40">
      <Progress value={progress} className="w-full bg-gray-300" />
    </div>
  );
}







