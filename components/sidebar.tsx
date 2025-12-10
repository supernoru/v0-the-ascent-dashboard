"use client"

import type React from "react"

import { Home, TrendingUp, Target, Users, Lightbulb } from "lucide-react"
import type { SectionKey } from "@/app/page"

interface SidebarProps {
  activeSection: SectionKey
  onSectionChange: (section: SectionKey) => void
}

const navItems: { key: SectionKey; label: string; icon: React.ElementType }[] = [
  { key: "home", label: "홈", icon: Home },
  { key: "timeline", label: "시계열 분석", icon: TrendingUp },
  { key: "deepdive", label: "게임성 상세", icon: Target },
  { key: "journey", label: "유저 여정", icon: Users },
  { key: "strategy", label: "전략 제언", icon: Lightbulb },
]

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-primary neon-text-pink">THE ASCENT</h1>
        <p className="text-xs text-muted-foreground mt-1 font-mono">Executive Analytics Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.key
          return (
            <button
              key={item.key}
              onClick={() => onSectionChange(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                isActive
                  ? "bg-primary/20 text-primary border border-primary/50 neon-glow-pink"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-accent"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground font-mono">
          <p>Last Updated</p>
          <p className="text-accent">2024.01.15 09:30 KST</p>
        </div>
      </div>
    </aside>
  )
}
