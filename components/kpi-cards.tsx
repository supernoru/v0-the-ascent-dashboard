"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, ThumbsUp, AlertTriangle } from "lucide-react"

const kpiData = [
  {
    title: "총 리뷰 수",
    value: "23,729",
    unit: "건",
    icon: MessageSquare,
    color: "neon-cyan",
    description: "스팀 전체 리뷰",
  },
  {
    title: "현재 추천율",
    value: "73.9",
    unit: "%",
    icon: ThumbsUp,
    color: "neon-green",
    description: "대체로 긍정적",
  },
  {
    title: "최대 리스크",
    value: "기술적 결함",
    unit: "",
    icon: AlertTriangle,
    color: "neon-red",
    description: "치명적 버그 55%",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {kpiData.map((kpi) => {
        const Icon = kpi.icon
        const colorClasses = {
          "neon-cyan": "text-neon-cyan border-neon-cyan/30 neon-glow-cyan",
          "neon-green": "text-neon-green border-neon-green/30",
          "neon-red": "text-neon-red border-neon-red/30",
          "neon-pink": "text-neon-pink border-neon-pink/30 neon-glow-pink",
        }

        return (
          <Card
            key={kpi.title}
            className={`bg-card border ${colorClasses[kpi.color as keyof typeof colorClasses]} transition-all hover:scale-[1.02]`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{kpi.title}</p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl font-bold font-mono ${kpi.color === "neon-cyan" ? "text-neon-cyan" : kpi.color === "neon-green" ? "text-neon-green" : "text-neon-red"}`}
                    >
                      {kpi.value}
                    </span>
                    <span className="text-sm text-muted-foreground">{kpi.unit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{kpi.description}</p>
                </div>
                <div className={`p-2 rounded-lg bg-secondary/50`}>
                  <Icon
                    className={`w-5 h-5 ${kpi.color === "neon-cyan" ? "text-neon-cyan" : kpi.color === "neon-green" ? "text-neon-green" : "text-neon-red"}`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
