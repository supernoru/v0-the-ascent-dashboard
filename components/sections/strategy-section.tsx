"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Target, CheckCircle2, XCircle, AlertTriangle, Clock, Shield, Map, Gamepad2 } from "lucide-react"

const competitorData = [
  {
    competitor: "사이버펑크 2077",
    wins: ["비주얼 밀도 우위"],
    losses: ["스토리 깊이 열위"],
  },
  {
    competitor: "디아블로",
    wins: ["슈팅 타격감 우위"],
    losses: ["아이템 파밍 깊이 열위"],
  },
]

const actionItems = [
  {
    priority: "P0",
    label: "매우 시급",
    title: "코옵 연결 안정화 및 세이브 데이터 보호",
    icon: Shield,
    color: "destructive",
    description: "멀티플레이 연결 끊김 및 세이브 파일 손실 버그 해결. 유저 신뢰 회복의 핵심.",
  },
  {
    priority: "P1",
    label: "시급",
    title: "내비게이션 UX 개편 (3D 미니맵)",
    icon: Map,
    color: "chart-5",
    description: "복잡한 맵 구조에서 길을 잃는 유저 불만 해소. 3D 미니맵 또는 웨이포인트 시스템 도입.",
  },
  {
    priority: "P2",
    label: "권장",
    title: "엔드 콘텐츠 (무한 웨이브 모드) 추가",
    icon: Gamepad2,
    color: "accent",
    description: "충성 유저(30h+) 유지를 위한 파밍 콘텐츠 확대. 시즌 랭킹 시스템 고려.",
  },
]

export function StrategySection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">경쟁작 및 전략</h2>
          <p className="text-muted-foreground mt-1">Strategy</p>
        </div>
        <Badge variant="outline" className="border-primary text-primary font-mono">
          <Target className="w-4 h-4 mr-2" />
          전략 제언
        </Badge>
      </div>

      {/* Competitor Comparison Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-accent" />
            경쟁작 비교 분석
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">경쟁작</TableHead>
                <TableHead className="text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4" />
                    우위 (Win)
                  </div>
                </TableHead>
                <TableHead className="text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-destructive" />
                    열위 (Lose)
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitorData.map((item, index) => (
                <TableRow key={index} className="border-border hover:bg-secondary/50">
                  <TableCell className="font-medium text-foreground">{item.competitor}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {item.wins.map((win, idx) => (
                        <Badge key={idx} className="bg-chart-4/20 text-chart-4 border border-chart-4/50">
                          {win}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {item.losses.map((loss, idx) => (
                        <Badge key={idx} className="bg-destructive/20 text-destructive border border-destructive/50">
                          {loss}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Action Items */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-primary" />
          액션 아이템 (Priority List)
        </h3>

        {actionItems.map((item, index) => {
          const Icon = item.icon
          const priorityBg =
            item.color === "destructive" ? "bg-destructive" : item.color === "chart-5" ? "bg-chart-5" : "bg-accent"
          const borderColor =
            item.color === "destructive"
              ? "border-destructive/50 hover:border-destructive"
              : item.color === "chart-5"
                ? "border-chart-5/50 hover:border-chart-5"
                : "border-accent/50 hover:border-accent"
          const iconColor =
            item.color === "destructive"
              ? "text-destructive"
              : item.color === "chart-5"
                ? "text-chart-5"
                : "text-accent"

          return (
            <Card key={index} className={`bg-card border ${borderColor} transition-all`}>
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Badge className={`${priorityBg} text-background font-mono font-bold`}>{item.priority}</Badge>
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`w-5 h-5 ${iconColor}`} />
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-mono">
                      {item.priority === "P0" ? "즉시" : item.priority === "P1" ? "2주 내" : "분기 내"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/50">
        <CardContent className="py-6">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-bold text-foreground">전략 요약</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="text-primary font-semibold">기술적 안정성</span>을 최우선으로 확보한 후,{" "}
              <span className="text-accent font-semibold">UX 개선</span>과{" "}
              <span className="text-chart-4 font-semibold">엔드 콘텐츠</span>를 순차적으로 강화하여 유저 LTV를
              극대화합니다.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Badge variant="outline" className="border-primary text-primary">
                #기술부채해소
              </Badge>
              <Badge variant="outline" className="border-accent text-accent">
                #UX혁신
              </Badge>
              <Badge variant="outline" className="border-chart-4 text-chart-4">
                #콘텐츠확장
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
