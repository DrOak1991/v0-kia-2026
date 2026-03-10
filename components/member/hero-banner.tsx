"use client"

import Image from "next/image"

export function HeroBanner() {
  return (
    <div className="relative w-full aspect-[16/9] bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80"
        alt="Kia EV6"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  )
}
