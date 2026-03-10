"use client"

export function MemberHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex items-center justify-center w-8 h-8">
          <svg
            viewBox="0 0 100 40"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M10 5 L20 35 L30 15 L40 35 L50 5 M60 5 L60 35 M75 5 L65 20 L85 35 M65 35 L85 5" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-lg font-semibold">Kia 台中旗艦 會員專區</h1>
      </div>
    </header>
  )
}
