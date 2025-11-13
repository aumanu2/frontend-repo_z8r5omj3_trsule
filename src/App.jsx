import React from 'react'
import { motion } from 'framer-motion'
import HeroSpline from './components/HeroSpline'
import NeonUI from './components/NeonUI'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#06070A] text-white">
      {/* Animated background grid / noise */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.06),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(217,70,239,0.06),transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.05]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      <HeroSpline />

      {/* Floating icons */}
      <div className="fixed right-4 top-4 z-40 flex flex-col gap-3">
        {['⚡','🎧','🛰️','📡','🧬'].map((icon, i) => (
          <motion.div key={i} whileHover={{ rotate: i%2?6:-6, scale: 1.08 }} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl">
            <span className="text-lg" aria-hidden>{icon}</span>
          </motion.div>
        ))}
      </div>

      <NeonUI />

      {/* Footer shimmer */}
      <div className="relative py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <p className="mx-auto max-w-7xl px-4 text-center text-sm text-cyan-100/60">© 2025 Neon Knowledgeverse — Cyber-learning reimagined.</p>
      </div>
    </div>
  )
}
