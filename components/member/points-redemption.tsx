"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, AlertTriangle, Minus, Plus, QrCode, Keyboard, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { memberData } from "@/data/mock-data"

type RedemptionStep = "input-points" | "merchant-verify" | "success"
type MerchantInputMode = "scan" | "manual"

interface PointsRedemptionProps {
  onClose: () => void
}

export function PointsRedemption({ onClose }: PointsRedemptionProps) {
  const [step, setStep] = useState<RedemptionStep>("input-points")
  const [showInitialWarning, setShowInitialWarning] = useState(true)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [pointsToRedeem, setPointsToRedeem] = useState(100)
  const [merchantCode, setMerchantCode] = useState("")
  const [merchantInputMode, setMerchantInputMode] = useState<MerchantInputMode>("manual")
  const [isScanning, setIsScanning] = useState(false)

  const maxPoints = memberData.totalPoints
  const minPoints = 100
  const pointStep = 100

  const handlePointsChange = (delta: number) => {
    const newValue = pointsToRedeem + delta
    if (newValue >= minPoints && newValue <= maxPoints) {
      setPointsToRedeem(newValue)
    }
  }

  const handleInputChange = (value: string) => {
    const numValue = parseInt(value, 10)
    if (!isNaN(numValue) && numValue >= 0 && numValue <= maxPoints) {
      setPointsToRedeem(numValue)
    } else if (value === "") {
      setPointsToRedeem(0)
    }
  }

  const handleNextStep = () => {
    if (step === "input-points") {
      setStep("merchant-verify")
    } else if (step === "merchant-verify") {
      setShowConfirmDialog(true)
    }
  }

  const handleConfirmRedeem = () => {
    setShowConfirmDialog(false)
    // TODO: Actually submit redemption to backend
    setStep("success")
  }

  const handleScanQR = () => {
    setIsScanning(true)
    // Simulate QR scan
    setTimeout(() => {
      setMerchantCode("KIA-TC-001")
      setIsScanning(false)
    }, 2000)
  }

  const canProceedToMerchant = pointsToRedeem >= minPoints && pointsToRedeem <= maxPoints
  const canSubmit = merchantCode.length >= 6

  // Initial warning dialog
  if (showInitialWarning) {
    return (
      <AlertDialog open={showInitialWarning} onOpenChange={setShowInitialWarning}>
        <AlertDialogContent className="max-w-[90%] rounded-lg">
          <AlertDialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <AlertDialogTitle className="text-center">注意事項</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              點數核銷作業請由服務據點工作人員協助操作，請將手機交給工作人員進行後續步驟。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col gap-2 sm:flex-col">
            <AlertDialogAction 
              onClick={() => setShowInitialWarning(false)}
              className="w-full bg-primary hover:bg-primary/90"
            >
              我了解，繼續操作
            </AlertDialogAction>
            <AlertDialogCancel 
              onClick={onClose}
              className="w-full"
            >
              返回
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  // Success page
  if (step === "success") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
          <div className="flex items-center h-14 px-4">
            <h1 className="flex-1 text-center font-semibold">點數核銷完成</h1>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">核銷成功</h2>
          <p className="text-muted-foreground text-center mb-8">
            已成功使用 {pointsToRedeem.toLocaleString()} 點
          </p>

          <Card className="w-full max-w-sm p-4 mb-8">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">核銷點數</span>
                <span className="font-semibold text-accent">{pointsToRedeem.toLocaleString()} 點</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">折抵金額</span>
                <span className="font-semibold">NT$ {pointsToRedeem.toLocaleString()}</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="text-muted-foreground">剩餘點數</span>
                <span className="font-semibold">{(maxPoints - pointsToRedeem).toLocaleString()} 點</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">服務據點</span>
                <span className="font-semibold">{merchantCode}</span>
              </div>
            </div>
          </Card>

          <Button 
            onClick={onClose}
            className="w-full max-w-sm bg-primary hover:bg-primary/90"
          >
            返回會員中心
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
        <div className="flex items-center h-14 px-4">
          <button onClick={onClose} className="p-2 -ml-2 hover:bg-primary-foreground/10 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="flex-1 text-center font-semibold pr-9">
            {step === "input-points" ? "點數使用" : "商家驗證"}
          </h1>
        </div>
      </header>

      {/* Progress indicator */}
      <div className="px-4 py-3 bg-card border-b">
        <div className="flex items-center gap-2">
          <div className={`flex-1 h-1 rounded-full ${step === "input-points" ? "bg-accent" : "bg-accent"}`} />
          <div className={`flex-1 h-1 rounded-full ${step === "merchant-verify" ? "bg-accent" : "bg-muted"}`} />
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span className={step === "input-points" ? "text-accent font-medium" : ""}>輸入點數</span>
          <span className={step === "merchant-verify" ? "text-accent font-medium" : ""}>商家驗證</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        {step === "input-points" && (
          <div className="space-y-6">
            <Card className="p-4">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground mb-1">目前可用點數</p>
                <p className="text-3xl font-bold text-foreground">{maxPoints.toLocaleString()} 點</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground text-center mb-4">請輸入要使用的點數</p>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handlePointsChange(-pointStep)}
                    disabled={pointsToRedeem <= minPoints}
                    className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <Input
                    type="number"
                    value={pointsToRedeem}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-32 text-center text-2xl font-bold h-14"
                    min={minPoints}
                    max={maxPoints}
                  />
                  <button
                    onClick={() => handlePointsChange(pointStep)}
                    disabled={pointsToRedeem >= maxPoints}
                    className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  最低使用 {minPoints} 點，每 {pointStep} 點為單位
                </p>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">折抵金額</span>
                <span className="text-xl font-bold text-accent">NT$ {pointsToRedeem.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">1 點 = 1 元</p>
            </Card>
          </div>
        )}

        {step === "merchant-verify" && (
          <div className="space-y-6">
            <Card className="p-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">即將使用</p>
                <p className="text-2xl font-bold text-accent">{pointsToRedeem.toLocaleString()} 點</p>
                <p className="text-sm text-muted-foreground">折抵 NT$ {pointsToRedeem.toLocaleString()}</p>
              </div>
            </Card>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">請掃描或輸入服務據點識別碼</p>
              
              {/* Toggle buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setMerchantInputMode("scan")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors ${
                    merchantInputMode === "scan" 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-card border-border"
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span className="text-sm font-medium">掃描 QR Code</span>
                </button>
                <button
                  onClick={() => setMerchantInputMode("manual")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors ${
                    merchantInputMode === "manual" 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-card border-border"
                  }`}
                >
                  <Keyboard className="w-4 h-4" />
                  <span className="text-sm font-medium">手動輸入</span>
                </button>
              </div>

              {merchantInputMode === "scan" ? (
                <Card className="p-6">
                  {isScanning ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                      <p className="text-muted-foreground">掃描中...</p>
                    </div>
                  ) : merchantCode ? (
                    <div className="text-center py-4">
                      <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">已掃描</p>
                      <p className="text-lg font-semibold">{merchantCode}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
                        <QrCode className="w-16 h-16 text-muted-foreground" />
                      </div>
                      <Button onClick={handleScanQR} variant="outline" className="w-full">
                        開啟相機掃描
                      </Button>
                    </div>
                  )}
                </Card>
              ) : (
                <Card className="p-4">
                  <label className="text-sm text-muted-foreground mb-2 block">服務據點識別碼</label>
                  <Input
                    type="text"
                    value={merchantCode}
                    onChange={(e) => setMerchantCode(e.target.value.toUpperCase())}
                    placeholder="例如: KIA-TC-001"
                    className="text-center text-lg font-mono tracking-wider"
                  />
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    請向工作人員索取服務據點識別碼
                  </p>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer button */}
      <div className="sticky bottom-0 p-4 bg-background border-t">
        <Button
          onClick={handleNextStep}
          disabled={step === "input-points" ? !canProceedToMerchant : !canSubmit}
          className="w-full bg-primary hover:bg-primary/90 h-12 text-base"
        >
          {step === "input-points" ? "下一步" : "確認送出"}
        </Button>
      </div>

      {/* Confirmation dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="max-w-[90%] rounded-lg">
          <AlertDialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <AlertDialogTitle className="text-center">確認扣除點數</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-center">
                <div className="bg-muted/50 rounded-lg p-4 my-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">使用點數</span>
                    <span className="font-bold text-accent">{pointsToRedeem.toLocaleString()} 點</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">折抵金額</span>
                    <span className="font-semibold text-foreground">NT$ {pointsToRedeem.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between text-sm">
                    <span className="text-muted-foreground">服務據點</span>
                    <span className="font-semibold text-foreground">{merchantCode}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  點數扣除後無法復原，請確認無誤後再進行。
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col gap-2 sm:flex-col">
            <AlertDialogAction 
              onClick={handleConfirmRedeem}
              className="w-full bg-accent hover:bg-accent/90"
            >
              確認扣除
            </AlertDialogAction>
            <AlertDialogCancel className="w-full">
              取消
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
