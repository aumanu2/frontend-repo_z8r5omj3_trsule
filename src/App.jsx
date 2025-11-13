import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#06070A] text-white grid place-items-center">
      <div className="max-w-3xl text-center p-8 card-holo rounded-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Neon <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">Knowledgeverse</span>
        </h1>
        <p className="mt-4 text-cyan-100/70">
          Futuristic, chaotic, cyberpunk-inspired UI scaffold is live. We will re-enable the full experience once all assets are in place.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/15">Quick Start</button>
          <button className="px-4 py-2 rounded-xl bg-fuchsia-500/10 border border-fuchsia-400/30 hover:bg-fuchsia-500/15">Find Tutor</button>
          <button className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-400/30 hover:bg-emerald-500/15">Settings</button>
        </div>
        <p className="mt-8 text-xs text-white/40">Scaffold mode: components will be added next.</p>
      </div>
    </div>
  )
}
