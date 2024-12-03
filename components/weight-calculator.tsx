'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Scale, Weight, Earth } from "lucide-react"

export default function WeightCalculator() {
  const [earthWeight, setEarthWeight] = useState<string>("150")
  const [isCalculating, setIsCalculating] = useState(false)
  const [results, setResults] = useState({
    mars: "56.70",
    moon: "24.90",
    jupiter: "354.75",
    venus: "136.50"
  })

  const calculateSpaceWeight = (weight: number) => {
    // Relative surface gravity of planets (Earth = 1)
    const gravity = {
      mars: 0.378,
      moon: 0.166,
      jupiter: 2.365,
      venus: 0.91
    }

    return {
      mars: (weight * gravity.mars).toFixed(2),
      moon: (weight * gravity.moon).toFixed(2),
      jupiter: (weight * gravity.jupiter).toFixed(2),
      venus: (weight * gravity.venus).toFixed(2)
    }
  }

  const handleCalculate = () => {
    setIsCalculating(true)
    setTimeout(() => {
      setResults(calculateSpaceWeight(Number(earthWeight)))
      setIsCalculating(false)
    }, 1000)
  }

  return (
    <div className="relative p-6 border rounded-lg bg-secondary/30 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 text-primary">
        <Scale className="w-5 h-5" />
        <h3 className="font-medium">Space Weight Calculator</h3>
      </div>

      {/* Input Section */}
      <div className="flex gap-4 items-end">
        <div className="space-y-2 flex-1">
          <label
            htmlFor="earthWeight"
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            <Weight className="w-4 h-4" />
            Your Earth Weight (lbs)
          </label>
          <Input
            id="earthWeight"
            type="number"
            value={earthWeight}
            onChange={(e) => setEarthWeight(e.target.value)}
            className="max-w-[200px] bg-background"
            placeholder="Enter weight in pounds"
          />
        </div>
        <Button
          onClick={handleCalculate}
          className="flex items-center gap-2"
          disabled={isCalculating}
        >
          <Earth className={`w-4 h-4 ${isCalculating ? "animate-spin" : ""}`} />
          {isCalculating ? "Calculating..." : "Convert"}
        </Button>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="space-y-1 text-center p-3 rounded-md bg-background/50">
          <div className="text-sm text-muted-foreground">Mars Weight</div>
          <div className="text-lg font-medium text-primary">
            {results.mars} lbs
          </div>
          <div className="text-xs text-muted-foreground">37.8% of Earth weight</div>
        </div>
        <div className="space-y-1 text-center p-3 rounded-md bg-background/50">
          <div className="text-sm text-muted-foreground">Moon Weight</div>
          <div className="text-lg font-medium text-primary">
            {results.moon} lbs
          </div>
          <div className="text-xs text-muted-foreground">16.6% of Earth weight</div>
        </div>
        <div className="space-y-1 text-center p-3 rounded-md bg-background/50">
          <div className="text-sm text-muted-foreground">Jupiter Weight</div>
          <div className="text-lg font-medium text-primary">
            {results.jupiter} lbs
          </div>
          <div className="text-xs text-muted-foreground">236.5% of Earth weight</div>
        </div>
        <div className="space-y-1 text-center p-3 rounded-md bg-background/50">
          <div className="text-sm text-muted-foreground">Venus Weight</div>
          <div className="text-lg font-medium text-primary">
            {results.venus} lbs
          </div>
          <div className="text-xs text-muted-foreground">91% of Earth weight</div>
        </div>
      </div>
    </div>
  )
}