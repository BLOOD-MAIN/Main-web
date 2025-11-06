export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative w-16 h-16">
        {/* Outer rotating circle */}
        <svg
          className="spinner absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" className="text-primary opacity-30" />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="70 176"
            strokeLinecap="round"
            className="text-primary"
          />
        </svg>
        {/* Inner pulsing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full pulse-glow"></div>
        </div>
      </div>
    </div>
  )
}
