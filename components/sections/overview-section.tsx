"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Brain, AlertTriangle, Globe } from "lucide-react"

const kpiData = [
  { label: "총 리뷰 수", value: "23,729", unit: "건", icon: MessageSquare, color: "cyan" },
  {
    label: "종합 추천율",
    value: "73.9",
    unit: "%",
    icon: ThumbsUp,
    color: "pink",
    subtext: "스팀 평가: 대체로 긍정적",
  },
  {
    label: "실질 감성 지수",
    value: "복합적",
    unit: "",
    icon: Brain,
    color: "purple",
    subtext: "긍정 53% | 부정 16% | 중립 31%",
  },
  {
    label: "주요 리스크",
    value: "기술적 결함",
    unit: "",
    icon: AlertTriangle,
    color: "red",
    subtext: "Technical Debt",
  },
]

const demographicData = [
  { region: "영어권", percentage: 63.2, color: "bg-accent" },
  { region: "중국", percentage: 8.8, color: "bg-primary" },
  { region: "러시아", percentage: 7.2, color: "bg-chart-3" },
  { region: "한국", percentage: 2.5, color: "bg-chart-4" },
  { region: "기타", percentage: 18.3, color: "bg-muted" },
]

const sentimentWords = {
  positive: ["비주얼/아트", "사이버펑크", "타격감", "OST"],
  negative: ["세이브 삭제", "크래시/튕김", "길찾기/맵", "코옵 오류"],
}

export function OverviewSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">대시보드 홈</h2>
          <p className="text-muted-foreground mt-1">Overview</p>
        </div>
        <Badge variant="outline" className="border-accent text-accent font-mono">
          LIVE DATA
        </Badge>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon
          const glowClass = kpi.color === "cyan" ? "neon-glow-cyan" : kpi.color === "pink" ? "neon-glow-pink" : ""
          const textColorClass =
            kpi.color === "cyan"
              ? "text-accent"
              : kpi.color === "pink"
                ? "text-primary"
                : kpi.color === "red"
                  ? "text-destructive"
                  : "text-chart-3"

          return (
            <Card key={index} className={`bg-card border-border hover:border-primary/50 transition-all ${glowClass}`}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.label}</CardTitle>
                <Icon className={`w-5 h-5 ${textColorClass}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold font-mono ${textColorClass}`}>
                  {kpi.value}
                  <span className="text-lg ml-1">{kpi.unit}</span>
                </div>
                {kpi.subtext && <p className="text-xs text-muted-foreground mt-1">{kpi.subtext}</p>}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Demographics */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center gap-2">
            <Globe className="w-5 h-5 text-accent" />
            <CardTitle className="text-lg">글로벌 유저 분포</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {demographicData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground">{item.region}</span>
                  <span className="font-mono text-accent">{item.percentage}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Sentiment Word Cloud */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">감성 키워드 분석</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-chart-4" />
                긍정 키워드
              </h4>
              <div className="flex flex-wrap gap-2">
                {sentimentWords.positive.map((word, index) => (
                  <Badge
                    key={index}
                    className="bg-chart-4/20 text-chart-4 border border-chart-4/50 hover:bg-chart-4/30"
                  >
                    {word}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                부정 키워드
              </h4>
              <div className="flex flex-wrap gap-2">
                {sentimentWords.negative.map((word, index) => (
                  <Badge
                    key={index}
                    className="bg-destructive/20 text-destructive border border-destructive/50 hover:bg-destructive/30"
                  >
                    {word}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
