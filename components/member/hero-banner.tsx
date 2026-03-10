"use client"

import Image from "next/image"

export function HeroBanner() {
  return (
    <div className="relative w-full aspect-[16/9] bg-muted">
      <Image
        src="/images/kia-hero.jpg"
        alt="Kia 新車型"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  )
}
