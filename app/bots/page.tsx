import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BotsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen pt-24">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-4 mb-20">
            <h1 className="text-5xl font-bold text-foreground">Our Bots</h1>
            <p className="text-lg text-foreground/60 font-light max-w-2xl">
              Engineered for performance, built for scale. Learn how each bot brings unique capabilities to your
              workflow.
            </p>
          </div>

          <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <Card className="bg-card/50 backdrop-blur border-border/50 p-12 flex flex-col items-center justify-center sticky top-32">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-5xl">⚡</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground text-center mb-2">Mini Bot</h2>
                  <p className="text-foreground/50 text-center text-sm font-light">v2.1.0</p>
                </Card>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Overview</h3>
                  <p className="text-foreground/70 leading-relaxed font-light">
                    The mini bot is engineered for agility and efficiency. It excels at handling routine tasks with
                    remarkable speed, making it ideal for users who need quick, reliable assistance without unnecessary
                    complexity. Purpose-built for scalability.
                  </p>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Rapid Response Time", desc: "Sub-second response times for instant assistance" },
                      { title: "Optimized Performance", desc: "Low resource consumption for seamless integration" },
                      { title: "Easy Integration", desc: "Simple API for quick deployment" },
                      { title: "24/7 Availability", desc: "Always on, always ready to assist" },
                    ].map((feature, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-primary font-bold">▸</span>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-foreground/60 text-sm font-light">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  Start with Mini Bot
                </Button>
              </div>
            </div>
          </section>

          <div className="h-px bg-border/30 my-24"></div>

          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 lg:order-2">
                <Card className="bg-card/50 backdrop-blur border-border/50 p-12 flex flex-col items-center justify-center sticky top-32">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-5xl">🧠</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground text-center mb-2">Main Bot</h2>
                  <p className="text-foreground/50 text-center text-sm font-light">v3.0.0</p>
                </Card>
              </div>

              <div className="lg:col-span-2 lg:order-1 space-y-6">
                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-secondary/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Overview</h3>
                  <p className="text-foreground/70 leading-relaxed font-light">
                    The main bot represents the pinnacle of AI capabilities. Designed for complex problem-solving and
                    advanced analysis, it delivers sophisticated intelligence for demanding applications that require
                    depth and nuance at enterprise scale.
                  </p>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-secondary/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Advanced Intelligence", desc: "Deep learning models for sophisticated analysis" },
                      { title: "Complex Problem Solving", desc: "Handles multi-faceted challenges with precision" },
                      { title: "Comprehensive Analysis", desc: "Deep insights and detailed reporting capabilities" },
                      { title: "Customization Options", desc: "Tailor behavior and parameters to your needs" },
                    ].map((feature, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-secondary font-bold">▸</span>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-foreground/60 text-sm font-light">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                  Start with Main Bot
                </Button>
              </div>
            </div>
          </section>
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
