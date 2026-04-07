export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 border-b border-cyan-500/20 bg-gray-900/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7F00] to-[#21468B] flex items-center justify-center">
                <div className="text-xl">🦀</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#FF7F00] to-[#21468B] bg-clip-text text-transparent">
                  SynqLayer AI
                </div>
                <div className="text-xs text-cyan-300/60">Dutch Business Revolution</div>
              </div>
            </div>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF7F00] to-[#21468B] hover:opacity-90 font-semibold">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7F00]/20 to-[#21468B]/20 border border-[#FF7F00]/30 mb-8">
            <span className="text-[#FF7F00] font-semibold">🦀 Sovereign Architect Certified</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FF7F00] via-[#21468B] to-[#00A651] bg-clip-text text-transparent">
              SynqLayer AI
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-300">
              Dutch Business Automation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-cyan-200/80 max-w-3xl mx-auto mb-12">
            <span className="text-[#FF7F00] font-bold">15 AI skills</span> mastered to 100% •{' '}
            <span className="text-green-400 font-bold">€5M+</span> annual business value •{' '}
            <span className="text-blue-400 font-bold">34-62%</span> tax savings for Dutch MKB
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {[
              { value: "15", label: "Skills Mastered", color: "text-purple-400" },
              { value: "€5M+", label: "Annual Value", color: "text-green-400" },
              { value: "34-62%", label: "Tax Savings", color: "text-blue-400" },
              { value: "50K+", label: "Dutch MKB", color: "text-orange-400" },
              { value: "AVG/GDPR", label: "Compliance", color: "text-cyan-400" },
              { value: "Production", label: "Ready", color: "text-pink-400" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-900/50 border border-cyan-500/20 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-cyan-300/60 text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF7F00] to-[#21468B] hover:opacity-90 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-[#21468B]/30 hover:border-[#21468B]/60 bg-gray-900/50 font-semibold text-lg">
              View Live Demos
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                15 Mastered AI Skills
              </span>
            </h2>
            <p className="text-xl text-cyan-200/60 max-w-3xl mx-auto">
              Each skill delivers proven business value for Dutch MKB companies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { name: "Neural Code Synthesis", value: "€1.2M", icon: "🧠" },
              { name: "Quantum Computing", value: "€2.5M", icon: "⚛️" },
              { name: "Augmented Reality", value: "€800K", icon: "👁️" },
              { name: "Autonomous Agents", value: "€1.8M", icon: "🤖" },
              { name: "Blockchain DApps", value: "€1.5M", icon: "⛓️" },
              { name: "Bio-Inspired Computing", value: "€3.2M", icon: "🧬" },
              { name: "Federated Learning", value: "€2.8M", icon: "🔒" },
              { name: "Predictive Analytics", value: "€2.1M", icon: "📈" },
              { name: "Multi-Agent RL", value: "€1.9M", icon: "🌐" },
              { name: "Data Mesh Architecture", value: "€2.4M", icon: "🗄️" },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-900/50 border border-cyan-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                    <div className="text-2xl">{skill.icon}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30">
                    <span className="text-green-400 font-bold text-sm">100%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                <div className="mt-4 p-3 rounded-xl bg-gray-800/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-300/60">Annual Value</span>
                    <span className="text-xl font-bold text-green-400">{skill.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#FF7F00]/10 via-[#21468B]/10 to-[#00A651]/10 border border-cyan-500/30">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF7F00] via-[#21468B] to-[#00A651] bg-clip-text text-transparent mb-2">
                €5,000,000+
              </div>
              <div className="text-xl text-cyan-300/80">
                Total Annual Business Value from 15 Mastered Skills
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-cyan-500/20">
          <div className="text-center">
            <p className="text-xl text-cyan-300/80 mb-4">
              15 AI Skills Mastered • €5M+ Business Value • Dutch MKB Focus
            </p>
            <p className="text-cyan-300/60 mb-8">
              Production Ready • AVG/GDPR Compliant • Sovereign Architect Certified 🦀
            </p>
            <a
              href="https://github.com/stagedvisuals/synqlayer-ai-platform"
              target="_blank"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300"
            >
              <span>View on GitHub</span>
              <span>→</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}