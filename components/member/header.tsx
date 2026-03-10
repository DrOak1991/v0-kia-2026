"use client"

import Image from "next/image"

export function MemberHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
          <Image
            src="/images/kia-logo.png"
            alt="Kia Logo"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-base font-semibold text-foreground">Kia 台中旗艦 會員專區</h1>
      </div>
    </header>
  )
}
