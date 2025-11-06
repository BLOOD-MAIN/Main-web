"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const router = useRouter()

  const isActive = (path: string) => pathname === path

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
        >
          blood-xmd
        </Link>

        <div className="flex gap-12 items-center">
          <Link
            href="/"
            className={`text-sm font-medium tracking-wide transition-all duration-300 ${
              isActive("/") ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/bots"
            className={`text-sm font-medium tracking-wide transition-all duration-300 ${
              isActive("/bots")
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Bots
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium tracking-wide transition-all duration-300 ${
              isActive("/contact")
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Contact
          </Link>

          {user ? (
            <div className="flex gap-3 items-center">
              <span className="text-sm text-foreground/60 font-light">
                {user.name}
                <span className="text-primary font-medium"> ({user.role})</span>
              </span>
              <Button
                onClick={handleLogout}
                className="bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-4 py-1 rounded transition-all duration-300 text-sm"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 text-sm bg-transparent"
                >
                  User Login
                </Button>
              </Link>
              <Link href="/auth/admin">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold">
                  Admin Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
