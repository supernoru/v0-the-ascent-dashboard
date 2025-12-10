"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { Calendar, TrendingUp, TrendingDown, Minus } from "lucide-react"

const timelineData = [
  { month: "2021.07", reviews: 0, sentiment: 0 },
  { month: "2021.08", reviews: 6700, sentiment: 76, phase: "Phase 1" },
  { month: "2021.09", reviews: 2100, sentiment: 74 },
  { month: "2021.10", reviews: 420, sentiment: 72, phase: "Phase 2" },
  { month: "2021.11", reviews: 1150, sentiment: 85.5, phase: "Phase 3" },
  { month: "2021.12", reviews: 890, sentiment: 78 },
  { month: "2022.01", reviews: 650, sentiment: 75 },
  { month: "2022.02", reviews: 480, sentiment: 74 },
]

const phases = [
  {
    id: 1,
    title: "Phase 1: 기대와 실망의 공존",
    date: "2021.08 출시",
    reviews: "6,700건",
    sentiment: "76%",
    trend: "up",
    issues: ["실행 불가", "서버 불안정"],
    color: "accent",
  },
  {
    id: 2,
    title: "Phase 2: 유저 이탈 가속화",
    date: "2021.10 암흑기",
    reviews: "420건",
    sentiment: "72% (최저)",
    trend: "down",
    issues: ["세이브 파일 증발 버그"],
    color: "destructive",
  },
  {
    id: 3,
    title: "Phase 3: 안정화 단계",
    date: "2021.11 반등",
    reviews: "1,150건",
    sentiment: "85.5%",
    trend: "up",
    issues: ["대규모 패치 및 첫 할인"],
    color: "chart-4",
  },
]

export function TimelineSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">서비스 흐름</h2>
          <p className="text-muted-foreground mt-1">Timeline & Trends</p>
        </div>
        <Badge variant="outline" className="border-primary text-primary font-mono">
          <Calendar className="w-4 h-4 mr-2" />
          2021.08 - 2022.02
        </Badge>
      </div>

      {/* Chart */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            리뷰 볼륨 vs 감성 점수
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 250)" />
                <XAxis dataKey="month" stroke="oklch(0.6 0.02 250)" fontSize={12} />
                <YAxis yAxisId="left" stroke="oklch(0.7 0.15 185)" fontSize={12} />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="oklch(0.75 0.2 330)"
                  fontSize={12}
                  domain={[60, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.16 0.015 250)",
                    border: "1px solid oklch(0.25 0.02 250)",
                    borderRadius: "8px",
                    color: "oklch(0.92 0.01 250)",
                  }}
                />
                <ReferenceLine
                  yAxisId="right"
                  y={72}
                  stroke="oklch(0.6 0.2 25)"
                  strokeDasharray="5 5"
                  label={{ value: "최저점", fill: "oklch(0.6 0.2 25)", fontSize: 10 }}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="reviews"
                  stroke="oklch(0.7 0.15 185)"
                  strokeWidth={3}
                  dot={{ fill: "oklch(0.7 0.15 185)", strokeWidth: 2, r: 4 }}
                  name="리뷰 수"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="sentiment"
                  stroke="oklch(0.75 0.2 330)"
                  strokeWidth={3}
                  dot={{ fill: "oklch(0.75 0.2 330)", strokeWidth: 2, r: 4 }}
                  name="긍정률 %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-accent rounded" />
              <span className="text-sm text-muted-foreground">리뷰 수</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-primary rounded" />
              <span className="text-sm text-muted-foreground">긍정률 %</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((phase) => {
          const TrendIcon = phase.trend === "up" ? TrendingUp : phase.trend === "down" ? TrendingDown : Minus
          const borderColor =
            phase.color === "accent"
              ? "border-accent/50 hover:border-accent"
              : phase.color === "destructive"
                ? "border-destructive/50 hover:border-destructive"
                : "border-chart-4/50 hover:border-chart-4"
          const textColor =
            phase.color === "accent"
              ? "text-accent"
              : phase.color === "destructive"
                ? "text-destructive"
                : "text-chart-4"

          return (
            <Card key={phase.id} className={`bg-card border ${borderColor} transition-all`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={`${textColor} border-current text-xs`}>
                    {phase.date}
                  </Badge>
                  <TrendIcon className={`w-5 h-5 ${textColor}`} />
                </div>
                <CardTitle className="text-base mt-2">{phase.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">리뷰</p>
                    <p className="font-mono text-foreground">{phase.reviews}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">긍정률</p>
                    <p className={`font-mono ${textColor}`}>{phase.sentiment}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">주요 이슈</p>
                  <div className="flex flex-wrap gap-1">
                    {phase.issues.map((issue, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {issue}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
