"use client"

interface PageLoaderProps {
  isLoading?: boolean
}

export function PageLoader({ isLoading = false }: PageLoaderProps) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center pointer-events-none">
      <div className="relative w-16 h-16">
        {/* Outer rings */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary animate-spin"></div>
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary border-l-secondary animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse"></div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl animate-pulse"></div>
      </div>
    </div>
  )
}
