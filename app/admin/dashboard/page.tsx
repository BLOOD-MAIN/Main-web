"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  const handleLogout = () => {
    logout()
    router.push("/auth/admin")
  }

  const stats = [
    { label: "Total Bot Users", value: "8,432", change: "+24%", trend: "up", icon: "👥" },
    { label: "Active Sessions", value: "1,247", change: "+18%", trend: "up", icon: "🔌" },
    { label: "System Uptime", value: "99.98%", change: "Optimal", trend: "up", icon: "⚡" },
    { label: "Bot Requests/Min", value: "12.4K", change: "+42%", trend: "up", icon: "🚀" },
  ]

  const users = [
    {
      id: 1,
      name: "Developer Alpha",
      email: "dev.alpha@tech.io",
      status: "Active",
      role: "premium",
      activity: "2m ago",
      requests: 4280,
    },
    {
      id: 2,
      name: "Tech Team Beta",
      email: "tech.beta@enterprise.com",
      status: "Active",
      role: "enterprise",
      activity: "15s ago",
      requests: 28340,
    },
    {
      id: 3,
      name: "Startup Gamma",
      email: "startup@gamma.dev",
      status: "Active",
      role: "standard",
      activity: "5m ago",
      requests: 1240,
    },
    {
      id: 4,
      name: "Student Delta",
      email: "student.delta@uni.edu",
      status: "Inactive",
      role: "free",
      activity: "3d ago",
      requests: 124,
    },
    {
      id: 5,
      name: "Creator Epsilon",
      email: "creator@epsilon.io",
      status: "Active",
      role: "premium",
      activity: "1m ago",
      requests: 3400,
    },
  ]

  const performanceMetrics = [
    { name: "API Latency", value: "47ms", status: "excellent", range: "0-100ms" },
    { name: "Cache Hit Rate", value: "92.3%", status: "excellent", range: "0-100%" },
    { name: "Error Rate", value: "0.02%", status: "excellent", range: "0-1%" },
    { name: "Throughput", value: "2.4GB/s", status: "optimal", range: "0-5GB/s" },
  ]

  const botStats = [
    { name: "Mini Bot", active: 1284, requests: 284480, uptime: "99.95%" },
    { name: "Main Bot", active: 7148, requests: 1284320, uptime: "99.99%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      {/* Premium Sticky Header */}
      <header className="border-b border-border/30 bg-card/40 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                blood-xmd Control Hub
              </h1>
            </div>
            <p className="text-foreground/50 font-light text-sm">Enterprise Bot Management System</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">{user?.name}</p>
              <p className="text-xs text-foreground/50">System Administrator</p>
            </div>
            <Button
              onClick={handleLogout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="bg-card/50 backdrop-blur border-border/30 p-6 hover:border-primary/40 transition-all duration-300 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-foreground/60 text-xs font-light uppercase tracking-wider mb-2">{stat.label}</p>
              <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
            </Card>
          ))}
        </div>

        {/* Bot Performance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur border-border/30 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
              Bot Performance
            </h2>
            <div className="space-y-6">
              {botStats.map((bot) => (
                <div
                  key={bot.name}
                  className="p-4 bg-background/50 rounded-lg border border-border/20 hover:border-border/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-foreground font-semibold">{bot.name}</p>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full">
                      {bot.uptime} Uptime
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-foreground/60 font-light mb-1">Active Users</p>
                      <p className="text-lg font-bold text-primary">{bot.active.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 font-light mb-1">Total Requests</p>
                      <p className="text-lg font-bold text-secondary">{(bot.requests / 1000000).toFixed(2)}M</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/30 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary to-primary rounded-full"></span>
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-2 rounded-lg transition-all duration-300">
                Deploy Update
              </Button>
              <Button className="w-full bg-secondary/10 hover:bg-secondary/20 text-secondary font-semibold py-2 rounded-lg transition-all duration-300">
                Run Diagnostics
              </Button>
              <Button className="w-full bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold py-2 rounded-lg transition-all duration-300">
                System Backup
              </Button>
              <Button className="w-full bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold py-2 rounded-lg transition-all duration-300">
                View Logs
              </Button>
              <Button className="w-full bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold py-2 rounded-lg transition-all duration-300">
                Clear Cache
              </Button>
            </div>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-6 border-b border-border/30 pb-4 overflow-x-auto">
          {["overview", "performance", "users", "settings", "analytics"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium text-sm transition-all duration-300 capitalize whitespace-nowrap ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <Card className="bg-card/50 backdrop-blur border-border/30 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">System Health Overview</h2>
            <div className="space-y-4">
              <div className="p-4 bg-background/50 rounded-lg border border-border/20">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-foreground font-semibold">Server Infrastructure</p>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                    Optimal
                  </span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-border/20">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-foreground font-semibold">Database Performance</p>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                    Healthy
                  </span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-border/20">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-foreground font-semibold">API Gateway Health</p>
                  <span className="text-primary text-xs font-bold">48ms avg</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {activeTab === "performance" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric) => (
              <Card
                key={metric.name}
                className="bg-card/50 backdrop-blur border-border/30 p-6 hover:border-primary/40 transition-all"
              >
                <p className="text-foreground/60 text-xs font-light uppercase tracking-wider mb-2">{metric.name}</p>
                <h3 className="text-3xl font-bold text-foreground mb-2">{metric.value}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/50">Range: {metric.range}</span>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded">Good</span>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "users" && (
          <Card className="bg-card/50 backdrop-blur border-border/30 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">User Management Console</h2>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-lg">
                Add User
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-4 text-foreground/60 font-semibold text-xs uppercase">User</th>
                    <th className="text-left py-3 px-4 text-foreground/60 font-semibold text-xs uppercase">Email</th>
                    <th className="text-left py-3 px-4 text-foreground/60 font-semibold text-xs uppercase">Plan</th>
                    <th className="text-left py-3 px-4 text-foreground/60 font-semibold text-xs uppercase">Requests</th>
                    <th className="text-left py-3 px-4 text-foreground/60 font-semibold text-xs uppercase">Activity</th>
                    <th className="text-left py-3 px-4 text-foreground/60 font-semibold text-xs uppercase">Status</th>
                    <th className="text-left py-3 px-4 text-foreground/60 font-semibold text-xs uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border/20 hover:bg-background/50 transition-colors">
                      <td className="py-4 px-4 text-foreground font-medium">{user.name}</td>
                      <td className="py-4 px-4 text-foreground/60 font-light text-xs">{user.email}</td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded capitalize">
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-foreground font-semibold">{(user.requests / 1000).toFixed(1)}k</td>
                      <td className="py-4 px-4 text-foreground/60 text-xs">{user.activity}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded text-xs font-semibold ${
                            user.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-foreground/10 text-foreground/60"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="text-xs bg-transparent hover:bg-primary/10">
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs text-red-400 border-red-400/30 hover:bg-red-500/10 bg-transparent"
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === "settings" && (
          <Card className="bg-card/50 backdrop-blur border-border/30 p-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">System Configuration</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
                <div>
                  <p className="text-foreground font-semibold">Maintenance Mode</p>
                  <p className="text-foreground/60 text-sm font-light mt-1">Temporarily disable user access</p>
                </div>
                <input type="checkbox" className="w-5 h-5 cursor-pointer" />
              </div>
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
                <div>
                  <p className="text-foreground font-semibold">Email Notifications</p>
                  <p className="text-foreground/60 text-sm font-light mt-1">Send alerts to administrators</p>
                </div>
                <input type="checkbox" className="w-5 h-5 cursor-pointer" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
                <div>
                  <p className="text-foreground font-semibold">Auto Backup</p>
                  <p className="text-foreground/60 text-sm font-light mt-1">Daily automated database backups</p>
                </div>
                <input type="checkbox" className="w-5 h-5 cursor-pointer" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
                <div>
                  <p className="text-foreground font-semibold">Security Scans</p>
                  <p className="text-foreground/60 text-sm font-light mt-1">Hourly vulnerability checks</p>
                </div>
                <input type="checkbox" className="w-5 h-5 cursor-pointer" defaultChecked />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-all duration-300 mt-6">
                Save Configuration
              </Button>
            </div>
          </Card>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/30 p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">User Growth Trend</h3>
              <div className="space-y-4">
                {["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"].map((week, i) => {
                  const width = 30 + i * 12
                  return (
                    <div key={week} className="flex items-center justify-between">
                      <p className="text-foreground/60 text-sm font-light min-w-16">{week}</p>
                      <div className="flex items-center gap-3 flex-1 ml-4">
                        <div className="w-32 h-2 bg-background/50 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                            style={{ width: `${width}%` }}
                          ></div>
                        </div>
                        <p className="text-foreground text-sm font-semibold min-w-20">{800 + i * 400}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/30 p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Revenue Breakdown</h3>
              <div className="space-y-4">
                {["Free Plan", "Standard Plan", "Premium Plan", "Enterprise Plan"].map((plan, i) => {
                  const width = 25 + i * 18
                  return (
                    <div key={plan} className="flex items-center justify-between">
                      <p className="text-foreground/60 text-sm font-light min-w-32">{plan}</p>
                      <div className="flex items-center gap-3 flex-1 ml-4">
                        <div className="w-32 h-2 bg-background/50 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full"
                            style={{ width: `${width}%` }}
                          ></div>
                        </div>
                        <p className="text-foreground text-sm font-semibold min-w-20">${1.2 + i * 2.4}k</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
