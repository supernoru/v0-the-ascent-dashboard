"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Clock } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

const funnelData = [
  { name: "2시간 미만", satisfaction: 50, label: "환불 구간", risk: true },
  { name: "5~15시간", satisfaction: 72.7, label: "캠페인", risk: false },
  { name: "30시간 이상", satisfaction: 89.9, label: "충성 유저", risk: false },
]

const CustomTooltip = ({
  active,
  payload,
  label,
}: { active?: boolean; payload?: Array<{ value: number; payload: { label: string } }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
        <p className="text-foreground font-medium">{label}</p>
        <p className="text-neon-cyan font-mono text-lg">{payload[0].value}%</p>
        <p className="text-muted-foreground text-xs">{payload[0].payload.label}</p>
      </div>
    )
  }
  return null
}

export function FunnelSection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-neon-pink" />
          <CardTitle className="text-lg text-foreground">마의 2시간: 초반 이탈률 분석</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">플레이 타임별 만족도 퍼널 차트</p>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={funnelData} layout="vertical" margin={{ top: 10, right: 30, left: 80, bottom: 10 }}>
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fill: "oklch(0.6 0.02 250)", fontSize: 12 }}
                axisLine={{ stroke: "oklch(0.25 0.02 250)" }}
                tickLine={{ stroke: "oklch(0.25 0.02 250)" }}
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: "oklch(0.92 0.01 250)", fontSize: 12 }}
                axisLine={{ stroke: "oklch(0.25 0.02 250)" }}
                tickLine={false}
                width={75}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "oklch(0.2 0.015 250 / 0.5)" }} />
              <Bar dataKey="satisfaction" radius={[0, 4, 4, 0]}>
                {funnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.risk ? "oklch(0.6 0.2 25)" : "oklch(0.7 0.15 185)"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Warning Alert */}
        <div className="mt-4 flex items-center gap-3 p-3 bg-neon-red/10 border border-neon-red/30 rounded-lg">
          <AlertCircle className="w-5 h-5 text-neon-red flex-shrink-0 glitch-effect" />
          <div>
            <p className="text-sm font-medium text-neon-red">⚠ 초반 최적화 시급</p>
            <p className="text-xs text-muted-foreground">2시간 미만 플레이어의 50%가 이탈 - 환불 위험 구간</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
