"use client"

import { ChevronRight, User } from "lucide-react"
import { Card } from "@/components/ui/card"
import { memberData } from "@/data/mock-data"
import { QRCodeSVG } from "qrcode.react"

export function MemberInfoCard() {
  const hasExpiringPoints = memberData.expiringPoints > 0 && memberData.expiringDate

  return (
    <Card className="mx-4 -mt-6 relative z-10 p-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden">
          <User className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-foreground">{memberData.name}</h2>
          <p className="text-2xl font-bold text-accent">{memberData.totalPoints.toLocaleString()} 點</p>
          {hasExpiringPoints ? (
            <p className="text-sm text-muted-foreground">
              {memberData.expiringPoints} 點將於 {memberData.expiringDate} 到期
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">未來 30 天內沒有即將過期的點數</p>
          )}
        </div>
        <ChevronRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
      </div>

      <div className="mt-6 flex justify-center">
        <div className="bg-white p-3 rounded-lg">
          <QRCodeSVG
            value={`KIA-MEMBER:${memberData.id}`}
            size={180}
            level="M"
            includeMargin={false}
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">會員編號: {memberData.id}</p>
      </div>
    </Card>
  )
}
