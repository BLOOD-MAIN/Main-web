"use client"

import Link from "next/link"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="w-full max-w-md space-y-6">
      <LoginForm role="user" />
      <p className="text-center text-sm text-foreground/60 font-light">
        Admin?{" "}
        <Link href="/auth/admin" className="text-primary hover:text-primary/80 font-medium transition-colors">
          Sign in here
        </Link>
      </p>
    </div>
  )
}
