"use client"

import { ChevronRight, User, Gift } from "lucide-react"
import { Card } from "@/components/ui/card"
import { memberData } from "@/data/mock-data"

interface MemberInfoCardProps {
  onPointsClick?: () => void
}

export function MemberInfoCard({ onPointsClick }: MemberInfoCardProps) {
  const hasExpiringPoints = memberData.expiringPoints > 0 && memberData.expiringDate

  return (
    <Card className="mx-4 -mt-6 relative z-10 p-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden">
          <User className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-foreground">{memberData.name}</h2>
          <p className="text-xs text-muted-foreground">會員編號: {memberData.id}</p>
        </div>
      </div>

      {/* 點數使用入口 */}
      <button
        onClick={onPointsClick}
        className="w-full mt-4 p-4 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Gift className="w-5 h-5 text-accent" />
          </div>
          <div className="text-left">
            <p className="text-2xl font-bold text-accent">{memberData.totalPoints.toLocaleString()} 點</p>
            {hasExpiringPoints ? (
              <p className="text-xs text-muted-foreground">
                {memberData.expiringPoints} 點將於 {memberData.expiringDate} 到期
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">點擊使用點數折抵</p>
            )}
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
      </button>
    </Card>
  )
}
