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
  const [showDetails, setShowDetails] = useState(false)

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
            {/* Left Side Card */}
            <div className="lg:col-span-1">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 sticky top-32 hover:border-primary/30 transition-all duration-300">
                {/* Profile Picture + Button */}
                <div className="mb-8 flex flex-col items-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <span className="text-5xl">👤</span>
                  </div>
                  <Button
                    onClick={() => setShowDetails(!showDetails)}
                    variant="outline"
                    className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-sm font-light"
                  >
                    {showDetails ? "Hide Special Details" : "View Special Details"}
                  </Button>
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

              {/* Special Details Section (toggle show/hide) */}
              {showDetails && (
                <Card className="bg-card/60 backdrop-blur-lg border-border/50 p-6 mt-6 overflow-y-auto max-h-[80vh]">
                  <div className="text-sm text-foreground space-y-6">
                    <div className="text-center">
                      <img
                        src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/about_me.gif?raw=true"
                        width={100}
                        className="mx-auto mb-4 rounded-lg"
                        alt="about"
                      />
                      <h1 className="text-xl font-bold">Hi 👋, I'm Sachithra Madusanka</h1>
                      <p className="text-foreground/60 font-light">
                        Passionate IT Student | Exploring the Boundless World of Technology
                      </p>
                    </div>

                    <ul className="space-y-2">
                      <li>🌱 Currently learning <strong>MERN</strong></li>
                      <li>🧑‍🎓 Undergraduate at <strong>SLIIT</strong></li>
                      <li>💬 Ask me about <strong>Java</strong></li>
                      <li>📫 Reach me at <strong>Bloodxmd6@gmail.com</strong></li>
                      <li>⚡ Fun fact: Call me <strong>Sachithra Madusanka</strong></li>
                    </ul>

                    <div className="flex justify-center mt-4">
                      <img
                        src="https://repository-images.githubusercontent.com/588181932/e36ec678-7984-4cdd-8e4c-a3932772ff8e"
                        alt="Coding"
                        width={350}
                        className="rounded-lg shadow-lg"
                      />
                    </div>

                    <hr className="border-border/40 my-6" />

                    <h3 className="text-lg font-semibold text-center">GitHub Stats</h3>
                    <div className="flex flex-col items-center space-y-4">
                      <img
                        src="https://github-readme-stats.vercel.app/api?username=BLOOD-MAIN&theme=dark&show_icons=true&count_private=true"
                        alt="stats"
                        width={350}
                      />
                      <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=BLOOD-MAIN&theme=dark&hide_border=false"
                        alt="streak"
                        width={350}
                      />
                      <img
                        src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=BLOOD-MAIN&theme=dark&hide_border=false&no-bg=true&langs_count=10"
                        alt="languages"
                        width={350}
                      />
                    </div>

                    <hr className="border-border/40 my-6" />

                    <h3 className="text-lg font-semibold">Connect with Me</h3>
                    <div className="flex gap-4 mt-3">
                      <a href="https://fb.com/schithra madusanka" target="_blank">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" width="30" />
                      </a>
                      <a href="https://instagram.com/sa_c_h_i_y_a" target="_blank">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" width="30" />
                      </a>
                      <a href="https://www.youtube.com/c/sachithra madusanka" target="_blank">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" width="30" />
                      </a>
                    </div>

                    <hr className="border-border/40 my-6" />

                    <h3 className="text-lg font-semibold text-center">Support</h3>
                    <div className="flex justify-center">
                      <a href="https://www.buymeacoffee.com/BLOOD-MAIN" target="_blank">
                        <img
                          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                          height="50"
                          width="210"
                          alt="Buy Me a Coffee"
                        />
                      </a>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Right side form (unchanged) */}
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