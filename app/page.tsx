"use client"

import { useState } from "react"
import { MemberHeader } from "@/components/member/header"
import { HeroBanner } from "@/components/member/hero-banner"
import { MemberInfoCard } from "@/components/member/member-info-card"
import { TabNavigation } from "@/components/member/tab-navigation"
import { MemberProfile } from "@/components/member/member-profile"
import { ConsumptionRecords } from "@/components/member/consumption-records"
import { RecordDetail } from "@/components/member/record-detail"
import { type ConsumptionRecord } from "@/data/mock-data"

export default function MemberCenterPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "records">("profile")
  const [selectedRecord, setSelectedRecord] = useState<ConsumptionRecord | null>(null)

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
      <MemberInfoCard />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === "profile" ? (
        <MemberProfile />
      ) : (
        <ConsumptionRecords onSelectRecord={setSelectedRecord} />
      )}
    </div>
  )
}
