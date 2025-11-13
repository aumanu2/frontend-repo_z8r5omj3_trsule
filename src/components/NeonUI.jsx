import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Users, PlayCircle, Music, Volume2, VolumeX, Cog, Star, Sparkles, Mic, Bot } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl ${className}`}
      style={{ boxShadow: '0 0 40px rgba(56,189,248,0.15)' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.08),transparent),radial-gradient(circle_at_10%_10%,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}

function NeonButton({ children, icon: Icon = Zap, onClick }) {
  return (
    <button onClick={onClick} className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-semibold text-cyan-100 transition-all hover:bg-cyan-400/20">
      <Icon size={18} className="text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
      <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">{children}</span>
    </button>
  );
}

export default function NeonUI() {
  const [musicOn, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative mx-auto -mt-14 max-w-7xl px-4 pb-24">
      {/* Floating toolbar */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <NeonButton icon={PlayCircle}>Quick Start</NeonButton>
          <NeonButton icon={Users}>Find Tutor</NeonButton>
          <NeonButton icon={Cog} onClick={() => setShowModal(true)}>Settings</NeonButton>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
          <Music size={18} className="text-fuchsia-300" />
          <button
            onClick={() => setMusicOn((v) => !v)}
            className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-xs text-cyan-100 hover:bg-black/20"
          >
            {musicOn ? 'Pause Synthwave' : 'Play Synthwave'}
          </button>
          <div className="flex items-center gap-2">
            {volume === 0 ? <VolumeX size={18} className="text-cyan-300" /> : <Volume2 size={18} className="text-cyan-300" />}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="h-1 w-24 cursor-pointer appearance-none rounded bg-cyan-500/30 accent-fuchsia-400"
            />
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <GlassCard className="md:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-cyan-100">Student Dashboard</h3>
            <Sparkles size={18} className="text-emerald-300" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_40%)]" />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-cyan-100/80">Course</p>
                    <h4 className="text-xl font-semibold text-white">Neon Algebra {i}</h4>
                  </div>
                  <div className="h-10 w-10 rounded-lg border border-fuchsia-400/40 bg-fuchsia-400/10" />
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/40">
                  <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400" />
                </div>
                <p className="mt-2 text-xs text-cyan-100/60">Streak: {Math.floor(3 + Math.random()*7)} days</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-cyan-100">AI Tutor Chatbox</h3>
            <Bot size={18} className="text-fuchsia-300" />
          </div>
          <div className="relative h-72 overflow-hidden rounded-xl border border-white/10 bg-black/30 p-3">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(236,72,153,0.08)_0px,rgba(236,72,153,0.08)_1px,transparent_2px,transparent_4px)]" />
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.06),transparent_50%)]" />
            <div className="relative space-y-2 text-sm">
              {["Hey student, ready to hack this topic?","Define the chain rule in your own words.","Try this: Derive d/dx of x^x."].map((t, idx) => (
                <p key={idx} className="glitch-line w-fit rounded bg-white/5 px-2 py-1 text-cyan-100">
                  {t}
                </p>
              ))}
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              <input className="flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-cyan-100 placeholder-cyan-100/40 outline-none" placeholder="Ask the hologram..." />
              <button className="rounded-lg border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-2 text-sm text-fuchsia-100">Send</button>
            </div>
          </div>
          <style>{`
            .glitch-line { position: relative; }
            .glitch-line::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent); mix-blend-mode: screen; filter: blur(1px); animation: scan 2.5s linear infinite; }
            @keyframes scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          `}</style>
        </GlassCard>
      </div>

      {/* Live Class Portal */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-cyan-100">Live Class Portal</h3>
            <Mic size={18} className="text-emerald-300" />
          </div>
          <AudioVisualizer />
          <div className="mt-4 h-48 overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(34,211,238,0.1),transparent)]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"400\" viewBox=\"0 0 10 10\"><path d=\"M0 5 Q2.5 2 5 5 T10 5\" fill=\"none\" stroke=\"rgba(168,85,247,0.35)\" stroke-width=\"0.2\"/></svg>')] bg-[length:200px_100px] animate-[wave_6s_linear_infinite] opacity-60" />
            </div>
          </div>
          <style>{`
            @keyframes wave { 0% { background-position-x: 0; } 100% { background-position-x: 200px; }}
          `}</style>
        </GlassCard>

        <GlassCard>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-bold text-cyan-100">Leaderboard</h3>
            <Trophy size={18} className="text-yellow-300" />
          </div>
          <div className="grid grid-cols-5 items-end gap-2">
            {[0,1,2,3,4].map((i) => {
              const fill = (i+1) * 18 + 10;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="h-24 w-6 overflow-hidden rounded-full border border-cyan-400/40 bg-gradient-to-b from-black/20 to-black/60">
                    <div className="h-full w-full origin-bottom animate-[grow_3s_ease-in-out_infinite_alternate] bg-[linear-gradient(to_top,rgba(56,189,248,0.2),rgba(217,70,239,0.35),rgba(16,185,129,0.35))]" style={{height: `${fill}%`, filter: 'drop-shadow(0 0 12px rgba(56,189,248,0.5))'}} />
                  </div>
                  <div className="h-8 w-8 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10" style={{ boxShadow: `0 0 ${6 + i*4}px rgba(217,70,239,0.6)` }} />
                </div>
              );
            })}
          </div>
          <style>{`@keyframes grow { from { transform: scaleY(0.3);} to { transform: scaleY(1);} }`}</style>
        </GlassCard>
      </div>

      {/* Achievements */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-cyan-100">Achievements</h3>
          <Star size={18} className="text-yellow-300" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.12),transparent_40%)]" />
              <div className="mb-2 flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-zinc-300 to-zinc-500" />
                <p className="font-semibold text-cyan-100">Badge {i}</p>
              </div>
              <p className="text-xs text-cyan-100/70">Unlocked by completing neon challenges.</p>
              <div className="pointer-events-none absolute -inset-8 animate-pulse rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 text-cyan-100 backdrop-blur-xl">
            <h4 className="mb-2 text-xl font-bold">Settings</h4>
            <p className="mb-4 text-sm text-cyan-100/70">Tweak your neon vibe.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <span>Motion Blur</span>
                <input type="checkbox" defaultChecked className="accent-fuchsia-400" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>Hover Distortion</span>
                <input type="checkbox" defaultChecked className="accent-emerald-400" />
              </div>
            </div>
            <button onClick={() => setShowModal(false)} className="mt-6 w-full rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-semibold text-cyan-100">Close</button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
