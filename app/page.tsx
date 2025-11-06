import { Navigation } from "@/components/navigation"
import { CommentSection } from "@/components/comment-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen pt-24">
        <section className="relative overflow-hidden py-24 px-6">
          {/* Subtle background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="space-y-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Advanced AI Bots</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Meet{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  blood-xmd
                </span>
              </h1>

              <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
                Enterprise-grade AI assistants engineered for performance. Discover how our mini and main bots work
                together to deliver intelligent automation at scale.
              </p>

              <div className="flex gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  Explore Bots
                </Button>
                <Button
                  variant="outline"
                  className="border border-primary/30 text-primary hover:bg-primary/5 px-8 py-3 text-base font-semibold rounded-lg bg-transparent transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-20 px-6">
          <div className="space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Why Choose blood-xmd</h2>
            <p className="text-lg text-foreground/60 font-light">Two powerful bots. Infinite possibilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-primary/30 transition-all duration-300 hover:bg-card/70 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Mini Bot</h3>
                  <p className="text-sm text-foreground/50 font-light">Lightning-fast efficiency</p>
                </div>
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed font-light">
                Optimized for speed and simplicity. Perfect for routine tasks, rapid responses, and seamless
                integration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/70">
                  <span className="text-primary font-bold">▸</span> Sub-second response times
                </li>
                <li className="flex items-center gap-3 text-foreground/70">
                  <span className="text-primary font-bold">▸</span> Minimal resource overhead
                </li>
                <li className="flex items-center gap-3 text-foreground/70">
                  <span className="text-primary font-bold">▸</span> Always-on reliability
                </li>
              </ul>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-secondary/30 transition-all duration-300 hover:bg-card/70 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Main Bot</h3>
                  <p className="text-sm text-foreground/50 font-light">Advanced intelligence</p>
                </div>
              </div>
              <p className="text-foreground/70 mb-6 leading-relaxed font-light">
                Powerful AI built for complex analysis, deep problem-solving, and enterprise-grade applications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/70">
                  <span className="text-secondary font-bold">▸</span> Advanced intelligence
                </li>
                <li className="flex items-center gap-3 text-foreground/70">
                  <span className="text-secondary font-bold">▸</span> Complex problem-solving
                </li>
                <li className="flex items-center gap-3 text-foreground/70">
                  <span className="text-secondary font-bold">▸</span> Enterprise-ready
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-20 px-6">
          <CommentSection />
        </section>

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
