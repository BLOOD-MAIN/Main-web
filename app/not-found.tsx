"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-2xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Animated 404 number */}
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-20 -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">Page Not Found</h2>
        <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Loading animation elements */}
        <div className="flex justify-center gap-2 mb-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            href="/auth/admin"
            className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300"
          >
            Admin Panel
          </Link>
        </div>

        {/* Footer text */}
        <p className="text-sm text-foreground/40 mt-12">Error Code: 404 | blood-xmd Administration System</p>
      </div>
    </div>
  )
}
