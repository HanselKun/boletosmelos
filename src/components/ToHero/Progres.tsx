"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

function ProgressDemo() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-neutral-900 p-6 rounded-2xl px-8 mx-auto mt-10 shadow-lg border border-neutral-800">
      <h2 className="text-white text-center mb-4">Porcentaje de boletas vendidas</h2>
      <Progress value={progress} className=" bg-neutral-900 h-4" />
      <p className="text-white text-sm text-center mt-2">{progress}%</p>
    </div>
  )
}

export default function PogressImplementd(){
  return(
     <div className="bg-neutral-900 py-2 px-4">
      <ProgressDemo />
    </div>
  );
}