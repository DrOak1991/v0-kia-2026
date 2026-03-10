"use client"

import { Receipt } from "lucide-react"

export function SectionHeader() {
  return (
    <div className="flex items-center gap-2 mx-4 mt-6 mb-2">
      <Receipt className="w-5 h-5 text-accent" />
      <h3 className="text-base font-semibold text-foreground">消費紀錄</h3>
    </div>
  )
}
