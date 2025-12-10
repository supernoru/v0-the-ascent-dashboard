"use client"

import { Activity, Cpu } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-pink to-transparent" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-card border border-border rounded-lg neon-glow-pink">
            <Cpu className="w-8 h-8 text-neon-pink" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground neon-text-pink">디 어센트(The Ascent)</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              서비스 현황 리포트 • 라이브 서비스 분석 대시보드
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Activity className="w-4 h-4 text-neon-cyan animate-pulse" />
          <span className="font-mono text-neon-cyan">LIVE</span>
          <span>•</span>
          <span className="font-mono">2024.12.09</span>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="mt-4 h-[1px] bg-gradient-to-r from-neon-pink via-border to-neon-cyan" />
    </header>
  )
}
