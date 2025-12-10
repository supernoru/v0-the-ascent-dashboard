"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, ArrowDown, Lightbulb, TrendingUp } from "lucide-react"

const funnelData = [
  {
    step: 1,
    label: "환불 구간",
    range: "<2시간",
    satisfaction: 50.0,
    psychology: ["렉 걸려서 못하겠다", "조작이 어렵다"],
    color: "destructive",
    width: "100%",
  },
  {
    step: 2,
    label: "찍먹 구간",
    range: "2~10시간",
    satisfaction: 72.7,
    psychology: ["전투는 재밌는데 걷는 게 너무 많다"],
    color: "chart-5",
    width: "75%",
  },
  {
    step: 3,
    label: "충성 구간",
    range: "30시간+",
    satisfaction: 89.9,
    psychology: ["DLC 내놔라", "파밍할 게 더 필요하다"],
    color: "chart-4",
    width: "50%",
  },
]

export function JourneySection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">플레이어 여정</h2>
          <p className="text-muted-foreground mt-1">Retention & Psychology</p>
        </div>
        <Badge variant="outline" className="border-accent text-accent font-mono">
          <Users className="w-4 h-4 mr-2" />
          유저 심리 분석
        </Badge>
      </div>

      {/* Insight Card */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/50 neon-glow-pink">
        <CardContent className="py-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">핵심 인사이트</h3>
              <p className="text-foreground leading-relaxed">
                초반 2시간의 기술적 문제를 해결하면{" "}
                <span className="text-primary font-bold neon-text-pink">매출 20% 상승</span> 잠재력 보유.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <TrendingUp className="w-4 h-4 text-chart-4" />
                <span className="text-sm text-chart-4">환불율 감소 → LTV 증가 → 구전 효과</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funnel Visualization */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            플레이타임별 리텐션 퍼널
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {funnelData.map((stage, index) => {
              const bgColor =
                stage.color === "destructive"
                  ? "bg-destructive"
                  : stage.color === "chart-5"
                    ? "bg-chart-5"
                    : "bg-chart-4"
              const textColor =
                stage.color === "destructive"
                  ? "text-destructive"
                  : stage.color === "chart-5"
                    ? "text-chart-5"
                    : "text-chart-4"
              const borderColor =
                stage.color === "destructive"
                  ? "border-destructive/30"
                  : stage.color === "chart-5"
                    ? "border-chart-5/30"
                    : "border-chart-4/30"

              return (
                <div key={stage.step} className="relative">
                  {/* Funnel bar */}
                  <div
                    className={`${bgColor}/20 rounded-lg p-4 border ${borderColor} transition-all hover:${bgColor}/30`}
                    style={{ width: stage.width, marginLeft: "auto", marginRight: "auto" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge className={`${bgColor} text-background font-mono`}>Step {stage.step}</Badge>
                        <span className="font-semibold text-foreground">{stage.label}</span>
                        <span className="text-sm text-muted-foreground font-mono">({stage.range})</span>
                      </div>
                      <div className="text-right">
                        <span className={`text-2xl font-bold font-mono ${textColor}`}>{stage.satisfaction}%</span>
                        <p className="text-xs text-muted-foreground">만족도</p>
                      </div>
                    </div>

                    {/* Psychology quotes */}
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">유저 심리:</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.psychology.map((quote, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-muted text-muted-foreground">
                            &ldquo;{quote}&rdquo;
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow between stages */}
                  {index < funnelData.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {funnelData.map((stage) => {
          const bgColor =
            stage.color === "destructive"
              ? "bg-destructive/20"
              : stage.color === "chart-5"
                ? "bg-chart-5/20"
                : "bg-chart-4/20"
          const textColor =
            stage.color === "destructive"
              ? "text-destructive"
              : stage.color === "chart-5"
                ? "text-chart-5"
                : "text-chart-4"
          const borderColor =
            stage.color === "destructive"
              ? "border-destructive/50"
              : stage.color === "chart-5"
                ? "border-chart-5/50"
                : "border-chart-4/50"

          return (
            <Card key={stage.step} className={`bg-card border ${borderColor}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{stage.label}</CardTitle>
                  <Badge className={`${bgColor} ${textColor} border ${borderColor} font-mono`}>{stage.range}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">만족도</p>
                    <div className="flex items-end gap-1">
                      <span className={`text-3xl font-bold font-mono ${textColor}`}>{stage.satisfaction}</span>
                      <span className="text-muted-foreground mb-1">%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        stage.color === "destructive"
                          ? "bg-destructive"
                          : stage.color === "chart-5"
                            ? "bg-chart-5"
                            : "bg-chart-4"
                      }`}
                      style={{ width: `${stage.satisfaction}%` }}
                    />
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
