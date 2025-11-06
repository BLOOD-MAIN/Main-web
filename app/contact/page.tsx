"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent! Thank you for reaching out.")
  }

  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen pt-24">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 sticky top-32 hover:border-primary/30 transition-all duration-300">
                {/* Profile Picture */}
                <div className="mb-8">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <span className="text-5xl">👤</span>
                  </div>
                </div>

                {/* Owner Details */}
                <div className="text-center space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">blood-xmd</h2>
                  <p className="text-foreground/60 font-light">Bot Creator & Developer</p>

                  <div className="pt-6 space-y-4 border-t border-border/50 text-sm">
                    <div>
                      <p className="text-foreground/50 font-light">Expertise</p>
                      <p className="text-primary font-semibold">AI & Bot Development</p>
                    </div>
                    <div>
                      <p className="text-foreground/50 font-light">Status</p>
                      <p className="text-primary font-semibold">Available for Collaborations</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-foreground/70 text-sm leading-relaxed font-light">
                      Passionate about creating intelligent bots that make a difference. Available for collaborations
                      and inquiries.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
                  <p className="text-lg text-foreground/60 font-light">
                    Have questions? Want to collaborate? We'd love to hear from you.
                  </p>
                </div>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-primary/30 transition-all duration-300">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-foreground font-semibold mb-3">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-background/50 text-foreground border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-foreground/30 font-light transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-foreground font-semibold mb-3">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-background/50 text-foreground border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-foreground/30 font-light transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-foreground font-semibold mb-3">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project or question..."
                        className="w-full bg-background/50 text-foreground border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-foreground/30 resize-none font-light transition-all duration-300"
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Connect with Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="border-border/50 hover:border-primary/50 hover:bg-primary/5 h-12 bg-transparent transition-all duration-300 font-light"
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border/50 hover:border-primary/50 hover:bg-primary/5 h-12 bg-transparent transition-all duration-300 font-light"
                    >
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border/50 hover:border-primary/50 hover:bg-primary/5 h-12 bg-transparent transition-all duration-300 font-light"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border/50 hover:border-primary/50 hover:bg-primary/5 h-12 bg-transparent transition-all duration-300 font-light"
                    >
                      Discord
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <footer className="border-t border-border/50 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-12 flex items-center justify-between">
            <p className="text-foreground/50 text-sm font-light">© 2025 blood-xmd. All rights reserved.</p>
            <div className="flex gap-6 text-foreground/50 text-sm">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
