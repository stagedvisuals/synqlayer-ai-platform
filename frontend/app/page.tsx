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
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF7F00] to-[#21468B] hover:opacity-90 font-semibold">
              Start Gratis Proefperiode
            </button>
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
              Nederlandse Business Automatisering
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-cyan-200/80 max-w-3xl mx-auto mb-12">
            <span className="text-[#FF7F00] font-bold">15 AI-vaardigheden</span> 100% beheerst •{' '}
            <span className="text-green-400 font-bold">€5M+</span> jaarlijkse business waarde •{' '}
            <span className="text-blue-400 font-bold">34-62%</span> belastingbesparing voor Nederlands MKB
          </p>

          {/* Statistieken */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {[
              { waarde: "15", label: "Vaardigheden Beheerst", kleur: "text-purple-400" },
              { waarde: "€5M+", label: "Jaarlijkse Waarde", kleur: "text-green-400" },
              { waarde: "34-62%", label: "Belastingbesparing", kleur: "text-blue-400" },
              { waarde: "50K+", label: "Nederlands MKB", kleur: "text-orange-400" },
              { waarde: "AVG/GDPR", label: "Compliance", kleur: "text-cyan-400" },
              { waarde: "Productie", label: "Ready", kleur: "text-pink-400" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-900/50 border border-cyan-500/20 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`text-3xl font-bold ${stat.kleur}`}>{stat.waarde}</div>
                  <div className="text-sm text-cyan-300/60 text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Technische Specificaties */}
          <div className="bg-gray-900/30 border border-cyan-500/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-cyan-300">Technische Specificaties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#FF7F00]">AI Vaardigheden (100% Beheersing)</h3>
                <ul className="space-y-2 text-cyan-200/80">
                  <li>• Neural Code Synthesis - Code generatie AI</li>
                  <li>• Quantum Computing Apps - Belastingoptimalisatie</li>
                  <li>• Augmented Reality - Financiële visualisatie</li>
                  <li>• Autonomous Agents - Documentverwerking</li>
                  <li>• Blockchain DApps - Nederlandse compliance</li>
                  <li>• Bio-Inspired Computing - Genetische algoritmes</li>
                  <li>• Federated Learning - Privacy-preserving AI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#21468B]">Business Impact</h3>
                <ul className="space-y-2 text-cyan-200/80">
                  <li>• €88.032 - €159.600 belastingbesparing per €1M omzet</li>
                  <li>• 98% snellere documentverwerking (4 uur → 5 minuten)</li>
                  <li>• 20x hogere nauwkeurigheid dan handmatige processen</li>
                  <li>• AVG/GDPR compliant door design</li>
                  <li>• Nederlandse KVK/BTW validatie ingebouwd</li>
                  <li>• €500M+ marktkans in Nederland</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Knoppen */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF7F00] to-[#21468B] hover:opacity-90 font-semibold text-lg">
              Start Gratis Proefperiode
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-[#21468B]/30 hover:border-[#21468B]/60 bg-gray-900/50 font-semibold text-lg">
              Bekijk Live Demo's
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-cyan-500/20">
          <div className="text-center">
            <p className="text-xl text-cyan-300/80 mb-4">
              15 AI Vaardigheden Beheerst • €5M+ Business Waarde • Nederlands MKB Focus
            </p>
            <p className="text-cyan-300/60 mb-8">
              Productie Ready • AVG/GDPR Compliant • Sovereign Architect Gecertificeerd 🦀
            </p>
            <a
              href="https://github.com/stagedvisuals/synqlayer-ai-platform"
              target="_blank"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300"
            >
              <span>Bekijk op GitHub</span>
              <span>→</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}