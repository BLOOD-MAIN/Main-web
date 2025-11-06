import type React from "react"
import { ProtectedRoute } from "@/components/protected-route"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProtectedRoute requiredRole="user">{children}</ProtectedRoute>
}
