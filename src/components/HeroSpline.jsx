import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Neon gradient overlays */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.35),transparent_60%)] blur-3xl" />
      </div>

      {/* Title layer */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="select-none bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]">
            Neon Knowledgeverse
          </h1>
          <p className="mt-4 text-cyan-100/90 md:text-lg">
            Study like you’ve jacked into a learning mainframe.
          </p>
        </motion.div>
      </div>

      {/* Glassmorphism overlay rim */}
      <div className="pointer-events-none absolute inset-x-6 bottom-6 z-10 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.25)]">
        <p className="text-center text-xs text-cyan-100/70">
          Interactive 3D scene powered by Spline — move your cursor or touch to explore
        </p>
      </div>
    </section>
  );
}
