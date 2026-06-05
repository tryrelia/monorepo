import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Code2, Palette } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Vite + shadcn</div>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
        <Badge className="mb-4 inline-flex" variant="secondary">
          <Zap className="w-3 h-3 mr-1" />
          Modern Web Development
        </Badge>
        
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Build Beautiful Web Apps <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            with Ease
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Combine the power of Vite, React, Tailwind CSS, and shadcn components to create stunning, responsive interfaces in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Building <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
            View Docs
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose This Stack?</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader>
              <Code2 className="w-8 h-8 text-blue-400 mb-3" />
              <CardTitle className="text-white">Lightning Fast</CardTitle>
              <CardDescription className="text-slate-400">
                Next-generation frontend tooling with instant HMR
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-300">
              Vite provides an incredibly fast development experience with instant module replacement.
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader>
              <Palette className="w-8 h-8 text-cyan-400 mb-3" />
              <CardTitle className="text-white">Beautiful UI</CardTitle>
              <CardDescription className="text-slate-400">
                Pre-built components that look great out of the box
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-300">
              shadcn components are customizable and accessible, built on Radix UI primitives.
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition">
            <CardHeader>
              <Zap className="w-8 h-8 text-blue-400 mb-3" />
              <CardTitle className="text-white">Developer Experience</CardTitle>
              <CardDescription className="text-slate-400">
                Everything you need in one place
              </CardDescription>
            </CardHeader>
            <CardContent className="text-slate-300">
              TypeScript, Tailwind CSS, and ESLint configured and ready to go.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
        <p className="text-xl text-slate-300 mb-8">
          Start building with our component library and customize everything to your needs.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
          Explore Components
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-8 text-center text-slate-400">
        <p>&copy; 2024 Vite + shadcn. Built with modern web technologies.</p>
      </footer>
    </div>
  )
}

export default App