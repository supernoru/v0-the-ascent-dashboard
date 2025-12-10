"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts"
import { Star, AlertOctagon } from "lucide-react"

const prosData = [
  { subject: "비주얼/분위기", score: 95, fullMark: 100 },
  { subject: "전투/건플레이", score: 85, fullMark: 100 },
  { subject: "사운드/OST", score: 80, fullMark: 100 },
  { subject: "세계관", score: 75, fullMark: 100 },
  { subject: "RPG 요소", score: 65, fullMark: 100 },
]

const consData = [
  { name: "기술적 안정성", risk: 55, label: "치명적" },
  { name: "UX/길찾기", risk: 28, label: "불편함" },
  { name: "멀티플레이 경험", risk: 27, label: "연결 끊김" },
]

const prosDetails = [
  {
    title: "비주얼/분위기",
    score: 95,
    description: "압도적 호평",
    detail: "사이버펑크 장르 최고 수준의 비주얼 밀도와 디테일. 네온 조명, 홀로그램 광고, 슬럼가 분위기 완벽 구현.",
  },
  {
    title: "전투/건플레이",
    score: 85,
    description: "트윈스틱 장르 완성도 높음",
    detail: "다양한 무기와 스킬 조합. 타격감 있는 전투 시스템. 액션 RPG로서 만족스러운 플레이.",
  },
  {
    title: "사운드/OST",
    score: 80,
    description: "신스웨이브",
    detail: "분위기에 완벽히 어울리는 일렉트로닉/신스웨이브 사운드트랙. 전투와 탐험 모두 몰입감 상승.",
  },
]

export function DeepDiveSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">게임성 상세 분석</h2>
          <p className="text-muted-foreground mt-1">Deep Dive</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pros - Radar Chart */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center gap-2">
            <Star className="w-5 h-5 text-chart-4" />
            <CardTitle className="text-lg">강점 분석 (Pros)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={prosData}>
                  <PolarGrid stroke="oklch(0.25 0.02 250)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "oklch(0.6 0.02 250)", fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "oklch(0.6 0.02 250)", fontSize: 10 }} />
                  <Radar
                    name="점수"
                    dataKey="score"
                    stroke="oklch(0.7 0.15 185)"
                    fill="oklch(0.7 0.15 185)"
                    fillOpacity={0.4}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Cons - Bar Chart */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-destructive" />
            <CardTitle className="text-lg">리스크 요인 (Cons)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={consData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.02 250)" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} stroke="oklch(0.6 0.02 250)" fontSize={12} />
                  <YAxis type="category" dataKey="name" stroke="oklch(0.6 0.02 250)" fontSize={12} width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "oklch(0.16 0.015 250)",
                      border: "1px solid oklch(0.25 0.02 250)",
                      borderRadius: "8px",
                      color: "oklch(0.92 0.01 250)",
                    }}
                    formatter={(value: number) => [`${value}%`, "위험도"]}
                  />
                  <Bar dataKey="risk" radius={[0, 4, 4, 0]}>
                    {consData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.risk > 50
                            ? "oklch(0.6 0.2 25)"
                            : entry.risk > 25
                              ? "oklch(0.65 0.15 50)"
                              : "oklch(0.7 0.2 140)"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-destructive" />
                <span className="text-xs text-muted-foreground">치명적 (&gt;50%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-chart-5" />
                <span className="text-xs text-muted-foreground">주의 (25-50%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-chart-4" />
                <span className="text-xs text-muted-foreground">경고 (&lt;25%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pros Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {prosDetails.map((item, index) => (
          <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{item.title}</CardTitle>
                <Badge className="bg-accent/20 text-accent border border-accent/50 font-mono">{item.score}점</Badge>
              </div>
              <p className="text-sm text-chart-4">{item.description}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk Detail Cards */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <AlertOctagon className="w-5 h-5 text-destructive" />
          리스크 상세
        </h3>
        {consData.map((item, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="py-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <Badge
                    className={`text-xs ${
                      item.risk > 50
                        ? "bg-destructive/20 text-destructive border-destructive/50"
                        : "bg-chart-5/20 text-chart-5 border-chart-5/50"
                    }`}
                  >
                    {item.label}
                  </Badge>
                </div>
                <span className="font-mono text-foreground">{item.risk}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.risk > 50 ? "bg-destructive" : item.risk > 25 ? "bg-chart-5" : "bg-chart-4"
                  }`}
                  style={{ width: `${item.risk}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
