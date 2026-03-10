// Mock data for Kia Member Center
// Easy to edit for demo purposes

export interface MemberData {
  id: string
  name: string
  phone: string
  email: string
  memberSince: string
  totalPoints: number
  expiringPoints: number
  expiringDate: string | null
  vehicleModel: string
  vehiclePlate: string
  avatarUrl: string
}

export interface MaintenanceItem {
  name: string
  quantity: number
  unitPrice: number
  subtotal: number
}

export interface ConsumptionRecord {
  id: string
  date: string
  type: string
  totalAmount: number
  pointsEarned: number
  location: string
  mileage: number
  items: MaintenanceItem[]
  technicianName: string
  notes: string
}

export const memberData: MemberData = {
  id: "KIA-2024-001",
  name: "王小明",
  phone: "0912-345-678",
  email: "xiaoming.wang@email.com",
  memberSince: "2022-03-15",
  totalPoints: 2580,
  expiringPoints: 500,
  expiringDate: "2026-04-30",
  vehicleModel: "Kia EV6 GT-Line",
  vehiclePlate: "ABC-1234",
  avatarUrl: "/placeholder-avatar.jpg",
}

export const consumptionRecords: ConsumptionRecord[] = [
  {
    id: "SR-2026-0301",
    date: "2026-03-01",
    type: "定期保養",
    totalAmount: 8500,
    pointsEarned: 850,
    location: "Kia 台中旗艦服務中心",
    mileage: 45000,
    items: [
      { name: "機油更換 (合成機油 5W-30)", quantity: 1, unitPrice: 3500, subtotal: 3500 },
      { name: "機油濾芯", quantity: 1, unitPrice: 450, subtotal: 450 },
      { name: "空氣濾芯", quantity: 1, unitPrice: 800, subtotal: 800 },
      { name: "冷氣濾芯", quantity: 1, unitPrice: 650, subtotal: 650 },
      { name: "煞車油更換", quantity: 1, unitPrice: 1200, subtotal: 1200 },
      { name: "工資", quantity: 1, unitPrice: 1900, subtotal: 1900 },
    ],
    technicianName: "李技師",
    notes: "車況良好，建議下次保養時檢查輪胎磨耗狀況",
  },
  {
    id: "SR-2025-1215",
    date: "2025-12-15",
    type: "回廠檢修",
    totalAmount: 3200,
    pointsEarned: 320,
    location: "Kia 台中旗艦服務中心",
    mileage: 40000,
    items: [
      { name: "雨刷片更換 (前)", quantity: 2, unitPrice: 600, subtotal: 1200 },
      { name: "雨刷片更換 (後)", quantity: 1, unitPrice: 400, subtotal: 400 },
      { name: "車內消毒清潔", quantity: 1, unitPrice: 1200, subtotal: 1200 },
      { name: "工資", quantity: 1, unitPrice: 400, subtotal: 400 },
    ],
    technicianName: "張技師",
    notes: "已更換全車雨刷，建議定期清潔車內",
  },
  {
    id: "SR-2025-0920",
    date: "2025-09-20",
    type: "定期保養",
    totalAmount: 12800,
    pointsEarned: 1280,
    location: "Kia 台中旗艦服務中心",
    mileage: 35000,
    items: [
      { name: "機油更換 (合成機油 5W-30)", quantity: 1, unitPrice: 3500, subtotal: 3500 },
      { name: "機油濾芯", quantity: 1, unitPrice: 450, subtotal: 450 },
      { name: "變速箱油更換", quantity: 1, unitPrice: 4500, subtotal: 4500 },
      { name: "火星塞更換", quantity: 4, unitPrice: 350, subtotal: 1400 },
      { name: "全車檢查", quantity: 1, unitPrice: 800, subtotal: 800 },
      { name: "工資", quantity: 1, unitPrice: 2150, subtotal: 2150 },
    ],
    technicianName: "李技師",
    notes: "35000公里大保養完成，車輛狀況優良",
  },
  {
    id: "SR-2025-0610",
    date: "2025-06-10",
    type: "輪胎更換",
    totalAmount: 18000,
    pointsEarned: 1800,
    location: "Kia 台中旗艦服務中心",
    mileage: 30000,
    items: [
      { name: "輪胎 225/45R18 (Michelin)", quantity: 4, unitPrice: 4000, subtotal: 16000 },
      { name: "輪胎定位", quantity: 1, unitPrice: 1200, subtotal: 1200 },
      { name: "工資", quantity: 1, unitPrice: 800, subtotal: 800 },
    ],
    technicianName: "陳技師",
    notes: "已更換四條新輪胎並完成定位",
  },
  {
    id: "SR-2025-0305",
    date: "2025-03-05",
    type: "定期保養",
    totalAmount: 5600,
    pointsEarned: 560,
    location: "Kia 台中旗艦服務中心",
    mileage: 25000,
    items: [
      { name: "機油更換 (合成機油 5W-30)", quantity: 1, unitPrice: 3500, subtotal: 3500 },
      { name: "機油濾芯", quantity: 1, unitPrice: 450, subtotal: 450 },
      { name: "全車檢查", quantity: 1, unitPrice: 800, subtotal: 800 },
      { name: "工資", quantity: 1, unitPrice: 850, subtotal: 850 },
    ],
    technicianName: "李技師",
    notes: "例行保養，車況正常",
  },
]
