"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  role: "admin" | "user"
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string, role: "admin" | "user") => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Check session on mount
  useEffect(() => {
    const stored = localStorage.getItem("auth-user")
    if (stored) {
      setUser(JSON.parse(stored))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string, role: "admin" | "user") => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    const adminCredentials = {
      email: "blood-xmd",
      password: "1DWFAW2G",
    }

    // Admin login validation
    if (role === "admin") {
      if (email !== adminCredentials.email || password !== adminCredentials.password) {
        throw new Error("Invalid admin credentials")
      }
    } else {
      // User login accepts any email with password
      const validPassword = "password123"
      if (password !== validPassword) {
        throw new Error("Invalid credentials")
      }
    }

    const newUser: User = {
      id: Math.random().toString(),
      email,
      role,
      name: role === "admin" ? "blood-xmd Admin" : email.split("@")[0],
    }

    setUser(newUser)
    localStorage.setItem("auth-user", JSON.stringify(newUser))
    setLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth-user")
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}

export function useRequireRole(requiredRole: "admin" | "user" | null = null) {
  const { user, loading } = useAuth()

  if (loading) return { hasAccess: false, loading: true, user: null }

  if (!user) return { hasAccess: false, loading: false, user: null }

  if (requiredRole && user.role !== requiredRole) {
    return { hasAccess: false, loading: false, user }
  }

  return { hasAccess: true, loading: false, user }
}
