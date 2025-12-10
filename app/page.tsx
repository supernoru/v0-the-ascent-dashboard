"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { OverviewSection } from "@/components/sections/overview-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { DeepDiveSection } from "@/components/sections/deep-dive-section"
import { JourneySection } from "@/components/sections/journey-section"
import { StrategySection } from "@/components/sections/strategy-section"

export type SectionKey = "home" | "timeline" | "deepdive" | "journey" | "strategy"

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home")

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <OverviewSection />
      case "timeline":
        return <TimelineSection />
      case "deepdive":
        return <DeepDiveSection />
      case "journey":
        return <JourneySection />
      case "strategy":
        return <StrategySection />
      default:
        return <OverviewSection />
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Scanline overlay for CRT effect */}
      <div className="fixed inset-0 scanline z-50 pointer-events-none" />

      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="flex-1 ml-64 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">{renderSection()}</div>
      </main>
    </div>
  )
}
