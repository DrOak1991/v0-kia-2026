"use client"

import { User, Receipt } from "lucide-react"
import { cn } from "@/lib/utils"

interface TabNavigationProps {
  activeTab: "profile" | "records"
  onTabChange: (tab: "profile" | "records") => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex border-b border-border bg-card mx-4 mt-4 rounded-t-lg overflow-hidden">
      <button
        onClick={() => onTabChange("profile")}
        className={cn(
          "flex-1 flex flex-col items-center gap-1 py-3 transition-colors",
          activeTab === "profile"
            ? "text-accent border-b-2 border-accent bg-accent/5"
            : "text-muted-foreground"
        )}
      >
        <User className="w-5 h-5" />
        <span className="text-sm font-medium">會員資料</span>
      </button>
      <button
        onClick={() => onTabChange("records")}
        className={cn(
          "flex-1 flex flex-col items-center gap-1 py-3 transition-colors",
          activeTab === "records"
            ? "text-accent border-b-2 border-accent bg-accent/5"
            : "text-muted-foreground"
        )}
      >
        <Receipt className="w-5 h-5" />
        <span className="text-sm font-medium">消費紀錄</span>
      </button>
    </div>
  )
}
