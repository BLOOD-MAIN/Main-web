"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { PageLoader } from "./page-loader"

interface PremiumLoginFormProps {
  role: "admin" | "user"
}

export function PremiumLoginForm({ role }: PremiumLoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // ✅ Admin credentials (updated)
      if (role === "admin") {
        if (email === "fghia2840@gmail.com" && password === "1DWFAW2G") {
          login({ email, role: "admin" })
          await new Promise((resolve) => setTimeout(resolve, 800))
          router.push("/admin/dashboard")
          return
        }
      }

      // ✅ User login
      if (role === "user") {
        if (email && password) {
          login({ email, role: "user" })
          await new Promise((resolve) => setTimeout(resolve, 800))
          router.push("/user/dashboard")
          return
        }
      }

      setError("Invalid credentials")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div className="w-full max-w-md">
        <div className="relative">
          {/* Background gradient orbs */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Card */}
          <div className="relative bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                {role === "admin" ? "Admin" : "User"} Portal
              </h1>
              <p className="text-sm text-foreground/60">
                {role === "admin"
                  ? "Secure access to blood-xmd administration"
                  : "Connect to your blood-xmd account"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground/80">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold text-foreground/80">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-input border border-border/50 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {/* Admin Demo Hint */}
              {role === "admin" && (
                <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg">
                  <p className="text-xs text-primary/80 font-mono">
                    Demo Admin: fghia2840@gmail.com / 1DWFAW2G
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                {isLoading ? "Authenticating..." : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 relative">
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>

            {/* Footer Links */}
            <div className="flex items-center justify-between text-xs text-foreground/50">
              <span>blood-xmd v1.0</span>
              <span className="flex gap-3">
                {role === "user" && (
                  <a href="/auth/admin" className="hover:text-primary transition-colors">
                    Admin
                  </a>
                )}
                {role === "admin" && (
                  <a href="/auth/login" className="hover:text-primary transition-colors">
                    User
                  </a>
                )}
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}