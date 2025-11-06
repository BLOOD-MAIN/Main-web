"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function UserDashboard() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("home")
  const [chatMessage, setChatMessage] = useState("")
  const [conversations, setConversations] = useState([
    { id: 1, bot: "Mini Bot", message: "Quick response test", timestamp: "2 hours ago" },
    { id: 2, bot: "Main Bot", message: "Complex query analysis", timestamp: "1 day ago" },
  ])

  const handleLogout = () => {
    logout()
    router.push("/auth/login")
  }

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setConversations([{ id: Date.now(), bot: "Mini Bot", message: chatMessage, timestamp: "now" }, ...conversations])
      setChatMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Your Workspace</h1>
            <p className="text-foreground/60 font-light mt-1">Interact with blood-xmd bots</p>
          </div>
          <Button
            onClick={handleLogout}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300"
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-border/50 pb-4">
          {["home", "chat", "history", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium text-sm transition-all duration-300 capitalize ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Home Tab */}
        {activeTab === "home" && (
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-border/50 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Welcome, {user?.name}</h2>
              <p className="text-foreground/60 font-light mb-6">
                Access both mini bot and main bot for all your needs. Start chatting or explore your account settings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  onClick={() => setActiveTab("chat")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Start Chatting
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 font-semibold py-3 rounded-lg transition-all duration-300 bg-transparent"
                >
                  View Documentation
                </Button>
              </div>
            </Card>

            {/* Account Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-6">
                <p className="text-foreground/60 text-sm font-light mb-2">Account Status</p>
                <p className="text-2xl font-bold text-foreground">Active</p>
                <p className="text-primary text-xs font-semibold mt-3">Premium Plan</p>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-border/50 p-6">
                <p className="text-foreground/60 text-sm font-light mb-2">API Calls Used</p>
                <p className="text-2xl font-bold text-foreground">1,234 / 10,000</p>
                <div className="w-full bg-background/50 rounded h-2 mt-3">
                  <div className="bg-primary h-2 rounded" style={{ width: "12%" }}></div>
                </div>
              </Card>
              <Card className="bg-card/50 backdrop-blur border-border/50 p-6">
                <p className="text-foreground/60 text-sm font-light mb-2">Storage Used</p>
                <p className="text-2xl font-bold text-foreground">2.4 / 100 GB</p>
                <div className="w-full bg-background/50 rounded h-2 mt-3">
                  <div className="bg-secondary h-2 rounded" style={{ width: "2.4%" }}></div>
                </div>
              </Card>
            </div>

            {/* Quick Features */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Available Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Mini Bot", desc: "Fast & efficient responses", icon: "⚡" },
                  { title: "Main Bot", desc: "Advanced problem-solving", icon: "🧠" },
                  { title: "Chat History", desc: "Access all conversations", icon: "📝" },
                  { title: "API Access", desc: "Integrate into apps", icon: "🔌" },
                ].map((feature) => (
                  <Card
                    key={feature.title}
                    className="bg-card/50 backdrop-blur border-border/50 p-4 hover:border-primary/30 transition-all duration-300 hover:bg-card/70 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{feature.icon}</span>
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-foreground/60 font-light">{feature.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Chat Tab */}
        {activeTab === "chat" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-card/50 backdrop-blur border-border/50 p-8 flex flex-col h-96">
              <h2 className="text-2xl font-bold text-foreground mb-4">Chat Interface</h2>
              <div className="flex-1 overflow-y-auto mb-4 space-y-3 pb-2">
                <div className="flex justify-end">
                  <div className="bg-primary/20 border border-primary/30 rounded-lg p-3 max-w-xs">
                    <p className="text-foreground/80 text-sm">Hello! How can I help?</p>
                  </div>
                </div>
                {conversations.slice(0, 3).map((conv) => (
                  <div key={conv.id} className="flex justify-start">
                    <div className="bg-background/50 border border-border/30 rounded-lg p-3 max-w-xs">
                      <p className="text-xs text-primary font-semibold mb-1">{conv.bot}</p>
                      <p className="text-foreground/80 text-sm">{conv.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 rounded-lg transition-all duration-300"
                >
                  Send
                </Button>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Select Bot</h3>
              <div className="space-y-3">
                <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors">
                  <p className="font-bold text-foreground">Mini Bot</p>
                  <p className="text-xs text-foreground/60 font-light">Fast & efficient</p>
                </div>
                <div className="p-4 bg-background/50 border border-border/30 rounded-lg cursor-pointer hover:border-secondary/30 transition-colors">
                  <p className="font-bold text-foreground">Main Bot</p>
                  <p className="text-xs text-foreground/60 font-light">Advanced AI</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <Card className="bg-card/50 backdrop-blur border-border/50 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Conversation History</h2>
            <div className="space-y-3">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-4 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:bg-background/70 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {conv.bot}
                      </p>
                      <p className="text-foreground/60 text-sm font-light">{conv.message}</p>
                    </div>
                    <p className="text-foreground/50 text-xs font-light whitespace-nowrap ml-4">{conv.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <Card className="bg-card/50 backdrop-blur border-border/50 p-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Account Settings</h2>
            <div className="space-y-6">
              <div className="pb-6 border-b border-border/30">
                <h3 className="text-lg font-bold text-foreground mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-foreground/60 font-light mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user?.name}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground/60 font-light mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="pb-6 border-b border-border/30">
                <h3 className="text-lg font-bold text-foreground mb-4">Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer p-2">
                    <input type="checkbox" className="w-5 h-5" defaultChecked />
                    <span className="text-foreground font-light">Email notifications</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-2">
                    <input type="checkbox" className="w-5 h-5" defaultChecked />
                    <span className="text-foreground font-light">Save chat history</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-2">
                    <input type="checkbox" className="w-5 h-5" />
                    <span className="text-foreground font-light">Enable API access</span>
                  </label>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-all duration-300">
                Save Changes
              </Button>
            </div>
          </Card>
        )}
      </main>
    </div>
  )
}
