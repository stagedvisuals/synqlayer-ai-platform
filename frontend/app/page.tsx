export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white">
      {/* Navigatie */}
      <nav className="sticky top-0 border-b border-cyan-500/20 bg-gray-900/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7F00] to-[#21468B] flex items-center justify-center">
                <div className="text-xl">🦀</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#FF7F00] to-[#21468B] bg-clip-text text-transparent">
                  SynqLayer AI Platform
                </div>
                <div className="text-xs text-cyan-300/60">Nederlandse Business Automatisering</div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/dashboard" className="text-cyan-300 hover:text-cyan-200 font-medium">
                Dashboard
              </a>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF7F00] to-[#21468B] hover:opacity-90 font-semibold">
                Start Gratis Proefperiode
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hoofdsectie */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7F00]/20 to-[#21468B]/20 border border-[#FF7F00]/30 mb-8">
            <span className="text-[#FF7F00] font-semibold">🦀 Sovereign Architect Gecertificeerd</span>
          </div>

          {/* Hoofdkop */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FF7F00] via-[#21468B] to-[#00A651] bg-clip-text text-transparent">
              SynqLayer AI
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-300">
              5 Geavanceerde Skills
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-cyan-200/80 max-w-3xl mx-auto mb-12">
            <span className="text-[#FF7F00] font-bold">100% beheersing</span> van 5 geavanceerde AI vaardigheden •{' '}
            <span className="text-green-400 font-bold">€5M+</span> jaarlijkse business waarde •{' '}
            <span className="text-blue-400 font-bold">Stand-alone</span> frontend (geen database nodig)
          </p>

          {/* 5 Skills Navigatie */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              { 
                id: "bio-inspired", 
                title: "Bio-Inspired Computing", 
                emoji: "🧬", 
                color: "from-purple-600 to-purple-800",
                description: "Belastingoptimalisatie algoritmes"
              },
              { 
                id: "federated", 
                title: "Federated Learning", 
                emoji: "🔒", 
                color: "from-blue-600 to-blue-800",
                description: "Privacy-preserving AI"
              },
              { 
                id: "predictive", 
                title: "Predictive Analytics", 
                emoji: "📈", 
                color: "from-green-600 to-green-800",
                description: "Business forecasting"
              },
              { 
                id: "multi-agent", 
                title: "Multi-Agent RL", 
                emoji: "🤖", 
                color: "from-yellow-600 to-yellow-800",
                description: "Autonome besluitvorming"
              },
              { 
                id: "data-mesh", 
                title: "Data Mesh", 
                emoji: "🌐", 
                color: "from-pink-600 to-pink-800",
                description: "Data governance"
              },
            ].map((skill) => (
              <a
                key={skill.id}
                href={`/dashboard#${skill.id}`}
                className="group"
              >
                <div className="bg-gray-900/50 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-2xl">{skill.emoji}</div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-cyan-300 mb-1">{skill.title}</h3>
                      <p className="text-sm text-cyan-300/60">{skill.description}</p>
                    </div>
                    <div className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300">
                      100% beheerst
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Stand-alone Feature */}
          <div className="bg-gradient-to-r from-[#FF7F00]/10 to-[#21468B]/10 border border-cyan-500/20 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center mr-4">
                <div className="text-xl">⚡</div>
              </div>
              <h2 className="text-3xl font-bold text-cyan-300">Stand-alone Frontend</h2>
            </div>
            <p className="text-xl text-cyan-200/80 max-w-3xl mx-auto">
              Geen database nodig • Geen Supabase • Geen backend dependencies • Volledig client-side • Direct live op Vercel
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-900/30 rounded-xl">
                <div className="text-4xl font-bold text-[#FF7F00] mb-2">0</div>
                <div className="text-lg text-cyan-200/80">Database Dependencies</div>
                <div className="text-sm text-cyan-300/60 mt-2">Geen Supabase nodig</div>
              </div>
              <div className="text-center p-6 bg-gray-900/30 rounded-xl">
                <div className="text-4xl font-bold text-[#21468B] mb-2">100%</div>
                <div className="text-lg text-cyan-200/80">Client-side</div>
                <div className="text-sm text-cyan-300/60 mt-2">Geen server vereist</div>
              </div>
              <div className="text-center p-6 bg-gray-900/30 rounded-xl">
                <div className="text-4xl font-bold text-[#00A651] mb-2">Instant</div>
                <div className="text-lg text-cyan-200/80">Deployment</div>
                <div className="text-sm text-cyan-300/60 mt-2">Direct live op Vercel</div>
              </div>
            </div>
          </div>

          {/* CTA Knoppen */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/dashboard"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF7F00] to-[#21468B] hover:opacity-90 font-semibold text-lg text-center"
            >
              Bekijk 5 Skills Dashboard
            </a>
            <button className="px-8 py-4 rounded-xl border-2 border-[#21468B]/30 hover:border-[#21468B]/60 bg-gray-900/50 font-semibold text-lg">
              Download Whitepaper (PDF)
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-cyan-500/20">
          <div className="text-center">
            <p className="text-xl text-cyan-300/80 mb-4">
              5 AI Skills • 100% Beheersing • Stand-alone Frontend • Nederlands MKB Focus
            </p>
            <p className="text-cyan-300/60 mb-8">
              🦀 Sovereign Architect Certified • AVG/GDPR Compliant • Node.js 24.x • Vercel Ready
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/" className="text-cyan-400 hover:text-cyan-300">
                Home
              </a>
              <a href="/dashboard" className="text-cyan-400 hover:text-cyan-300">
                Dashboard
              </a>
              <a href="https://github.com/stagedvisuals/synqlayer-ai-platform" target="_blank" className="text-cyan-400 hover:text-cyan-300">
                GitHub
              </a>
              <a href="https://vercel.com/stagedvisuals-projects" target="_blank" className="text-cyan-400 hover:text-cyan-300">
                Vercel
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}