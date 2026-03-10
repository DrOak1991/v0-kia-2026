"use client"

import { Card } from "@/components/ui/card"
import { memberData } from "@/data/mock-data"
import { User, Phone, Mail, Calendar, Car, CreditCard } from "lucide-react"

interface ProfileItemProps {
  icon: React.ReactNode
  label: string
  value: string
}

function ProfileItem({ icon, label, value }: ProfileItemProps) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-base font-medium text-foreground truncate">{value}</p>
      </div>
    </div>
  )
}

export function MemberProfile() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="mx-4 bg-card rounded-b-lg">
      <Card className="p-4 rounded-t-none border-t-0">
        <h3 className="text-lg font-semibold mb-2 text-foreground">基本資料</h3>
        <ProfileItem
          icon={<User className="w-5 h-5 text-muted-foreground" />}
          label="姓名"
          value={memberData.name}
        />
        <ProfileItem
          icon={<Phone className="w-5 h-5 text-muted-foreground" />}
          label="電話"
          value={memberData.phone}
        />
        <ProfileItem
          icon={<Mail className="w-5 h-5 text-muted-foreground" />}
          label="電子郵件"
          value={memberData.email}
        />
        <ProfileItem
          icon={<Calendar className="w-5 h-5 text-muted-foreground" />}
          label="會員加入日期"
          value={formatDate(memberData.memberSince)}
        />
      </Card>

      <Card className="p-4 mt-3">
        <h3 className="text-lg font-semibold mb-2 text-foreground">車輛資訊</h3>
        <ProfileItem
          icon={<Car className="w-5 h-5 text-muted-foreground" />}
          label="車型"
          value={memberData.vehicleModel}
        />
        <ProfileItem
          icon={<CreditCard className="w-5 h-5 text-muted-foreground" />}
          label="車牌號碼"
          value={memberData.vehiclePlate}
        />
      </Card>
    </div>
  )
}
