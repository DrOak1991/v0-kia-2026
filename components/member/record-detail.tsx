"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type ConsumptionRecord } from "@/data/mock-data"
import { ArrowLeft, MapPin, Gauge, User, FileText } from "lucide-react"

interface RecordDetailProps {
  record: ConsumptionRecord
  onBack: () => void
}

export function RecordDetail({ record, onBack }: RecordDetailProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatCurrency = (amount: number) => {
    return `NT$ ${amount.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
        <div className="flex items-center gap-3 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">消費明細</h1>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Summary Card */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">{record.type}</h2>
              <p className="text-sm text-muted-foreground">{record.id}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-accent">{formatCurrency(record.totalAmount)}</p>
              <p className="text-sm text-muted-foreground">獲得 {record.pointsEarned} 點</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">服務據點</p>
                <p className="text-sm font-medium text-foreground">{record.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">里程數</p>
                <p className="text-sm font-medium text-foreground">{record.mileage.toLocaleString()} km</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">服務技師</p>
                <p className="text-sm font-medium text-foreground">{record.technicianName}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">服務日期</p>
                <p className="text-sm font-medium text-foreground">{formatDate(record.date)}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Items List */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-foreground">保養項目明細</h3>
          <div className="divide-y divide-border">
            {record.items.map((item, index) => (
              <div key={index} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} x {formatCurrency(item.unitPrice)}
                    </p>
                  </div>
                  <p className="font-semibold text-foreground">{formatCurrency(item.subtotal)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-foreground">總計</span>
              <span className="text-xl font-bold text-accent">{formatCurrency(record.totalAmount)}</span>
            </div>
          </div>
        </Card>

        {/* Notes */}
        {record.notes && (
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-foreground">技師備註</h3>
            <p className="text-muted-foreground leading-relaxed">{record.notes}</p>
          </Card>
        )}
      </div>
    </div>
  )
}
