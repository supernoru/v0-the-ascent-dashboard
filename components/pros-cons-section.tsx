"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown, Zap, Crosshair, Volume2, Bug, Map, Wifi } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

const prosData = [
  { name: "비주얼", value: 95, icon: Zap },
  { name: "타격감", value: 85, icon: Crosshair },
  { name: "사운드", value: 80, icon: Volume2 },
]

const consData = [
  { name: "버그/결함", value: 55, icon: Bug },
  { name: "길찾기/맵", value: 28, icon: Map },
  { name: "코옵 끊김", value: 27, icon: Wifi },
]

const comparisonData = [
  { name: "비주얼", pros: 95, cons: 0 },
  { name: "타격감", pros: 85, cons: 0 },
  { name: "사운드", pros: 80, cons: 0 },
  { name: "버그/결함", pros: 0, cons: 55 },
  { name: "길찾기", pros: 0, cons: 28 },
  { name: "코옵 끊김", pros: 0, cons: 27 },
]

const CustomTooltip = ({
  active,
  payload,
  label,
}: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    const value = payload.find((p) => p.value > 0)
    if (value) {
      return (
        <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
          <p className="text-foreground font-medium">{label}</p>
          <p className={`font-mono text-lg ${value.dataKey === "pros" ? "text-neon-green" : "text-neon-red"}`}>
            {value.value}%
          </p>
          <p className="text-muted-foreground text-xs">{value.dataKey === "pros" ? "유저 호응도" : "불만 비율"}</p>
        </div>
      )
    }
  }
  return null
}

export function ProsConsSection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-foreground">유저 반응 분석 (장/단점)</CardTitle>
        <p className="text-sm text-muted-foreground">실질 여론: 긍정 53% • 중립 31% • 부정 16%</p>
      </CardHeader>
      <CardContent>
        {/* Comparison Chart */}
        <div className="h-[180px] w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData} layout="vertical" margin={{ top: 5, right: 20, left: 60, bottom: 5 }}>
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fill: "oklch(0.6 0.02 250)", fontSize: 10 }}
                axisLine={{ stroke: "oklch(0.25 0.02 250)" }}
                tickLine={{ stroke: "oklch(0.25 0.02 250)" }}
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "oklch(0.92 0.01 250)", fontSize: 10 }}
                axisLine={{ stroke: "oklch(0.25 0.02 250)" }}
                tickLine={false}
                width={55}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "oklch(0.2 0.015 250 / 0.5)" }} />
              <Legend
                formatter={(value) => (value === "pros" ? "강점" : "약점")}
                wrapperStyle={{ fontSize: "12px", color: "oklch(0.92 0.01 250)" }}
              />
              <Bar dataKey="pros" fill="oklch(0.7 0.2 140)" radius={[0, 4, 4, 0]} name="pros" />
              <Bar dataKey="cons" fill="oklch(0.6 0.2 25)" radius={[0, 4, 4, 0]} name="cons" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pros/Cons Lists */}
        <div className="grid grid-cols-2 gap-4">
          {/* Pros */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className="w-4 h-4 text-neon-green" />
              <span className="text-sm font-medium text-neon-green">강점</span>
            </div>
            {prosData.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <Icon className="w-4 h-4 text-neon-green" />
                  <span className="text-foreground">{item.name}</span>
                  <span className="ml-auto font-mono text-neon-green">{item.value}%</span>
                </div>
              )
            })}
          </div>

          {/* Cons */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsDown className="w-4 h-4 text-neon-red" />
              <span className="text-sm font-medium text-neon-red">약점</span>
            </div>
            {consData.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <Icon className="w-4 h-4 text-neon-red glitch-effect" />
                  <span className="text-foreground">{item.name}</span>
                  <span className="ml-auto font-mono text-neon-red">{item.value}%</span>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
