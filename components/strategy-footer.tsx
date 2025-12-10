"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Hash, Rocket } from "lucide-react"

const competitorTags = ["사이버펑크2077", "디아블로", "루이너"]

export function StrategyFooter() {
  return (
    <footer className="space-y-4">
      {/* Strategy Card */}
      <Card className="bg-card border-neon-pink/30 neon-glow-pink">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="p-2 bg-neon-pink/20 rounded-lg">
                <Rocket className="w-6 h-6 text-neon-pink" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">핵심 전략 제언</p>
                <p className="text-lg font-bold text-foreground">
                  초반 크래시 해결 시 매출 <span className="text-neon-green font-mono">20%</span> 증대 예상
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:ml-auto">
              <TrendingUp className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-muted-foreground">긍정적 트렌드 전환 가능</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitor Tags & Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground">경쟁작 참고:</span>
          {competitorTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-secondary rounded-full text-neon-cyan border border-neon-cyan/20"
            >
              <Hash className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>주요 국가: 영어권(63%) • 중국(9%) • 한국(3%)</span>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-[2px] bg-gradient-to-r from-neon-pink via-border to-neon-cyan" />
    </footer>
  )
}
