"use client"

import { useState } from "react"
import { MemberHeader } from "@/components/member/header"
import { HeroBanner } from "@/components/member/hero-banner"
import { MemberInfoCard } from "@/components/member/member-info-card"
import { SectionHeader } from "@/components/member/tab-navigation"
import { ConsumptionRecords } from "@/components/member/consumption-records"
import { RecordDetail } from "@/components/member/record-detail"
import { type ConsumptionRecord } from "@/data/mock-data"

export default function MemberCenterPage() {
  const [selectedRecord, setSelectedRecord] = useState<ConsumptionRecord | null>(null)

  const handlePointsClick = () => {
    // TODO: 點數使用核銷流程入口
    console.log("[v0] Points redemption clicked")
  }

  // Show record detail view
  if (selectedRecord) {
    return (
      <RecordDetail
        record={selectedRecord}
        onBack={() => setSelectedRecord(null)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      <MemberHeader />
      <HeroBanner />
      <MemberInfoCard onPointsClick={handlePointsClick} />
      <SectionHeader />
      <ConsumptionRecords onSelectRecord={setSelectedRecord} />
    </div>
  )
}
