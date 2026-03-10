"use client"

import { Card } from "@/components/ui/card"
import { consumptionRecords, type ConsumptionRecord } from "@/data/mock-data"
import { ChevronRight, Wrench, Calendar, Coins } from "lucide-react"

interface ConsumptionRecordsProps {
  onSelectRecord: (record: ConsumptionRecord) => void
}

export function ConsumptionRecords({ onSelectRecord }: ConsumptionRecordsProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  const formatCurrency = (amount: number) => {
    return `NT$ ${amount.toLocaleString()}`
  }

  return (
    <div className="mx-4 bg-card rounded-b-lg">
      <Card className="rounded-t-none border-t-0 divide-y divide-border">
        {consumptionRecords.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            <p>目前沒有消費紀錄</p>
          </div>
        ) : (
          consumptionRecords.map((record) => (
            <button
              key={record.id}
              onClick={() => onSelectRecord(record)}
              className="w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{record.type}</span>
                  <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                    {record.id}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(record.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Coins className="w-3.5 h-3.5" />
                    +{record.pointsEarned} 點
                  </span>
                </div>
                <p className="text-lg font-bold text-accent mt-1">
                  {formatCurrency(record.totalAmount)}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </button>
          ))
        )}
      </Card>
    </div>
  )
}
