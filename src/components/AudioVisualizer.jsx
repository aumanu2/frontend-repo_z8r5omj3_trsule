import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Simple audio visualizer: animated neon bars that react to microphone input
export default function AudioVisualizer() {
  const [listening, setListening] = useState(false);
  const [levels, setLevels] = useState(Array(24).fill(0.1));
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);

  const toggleMic = async () => {
    if (listening) {
      setListening(false);
      if (audioContextRef.current) audioContextRef.current.suspend();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = audioCtx;
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 512;
      analyserRef.current = analyser;
      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const tick = () => {
        analyser.getByteFrequencyData(dataArray);
        const slice = 24;
        const step = Math.floor(bufferLength / slice);
        const newLevels = new Array(slice).fill(0).map((_, i) => {
          const start = i * step;
          let sum = 0;
          for (let j = 0; j < step; j++) sum += dataArray[start + j];
          return Math.max(0.1, sum / (step * 255));
        });
        setLevels(newLevels);
        rafRef.current = requestAnimationFrame(tick);
      };

      setListening(true);
      tick();
    } catch (e) {
      console.error(e);
      alert('Microphone access is required for the reactive waves.');
    }
  };

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center gap-3">
        <button
          onClick={toggleMic}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${listening ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/20' : 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20'}`}
        >
          {listening ? 'Stop Voice Reactive' : 'Enable Voice Reactive'}
        </button>
        <span className="text-xs text-cyan-100/60">Grant mic permission to animate the neon waves</span>
      </div>
      <div className="relative h-24 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="absolute inset-0 flex items-end justify-between px-2">
          {levels.map((lv, idx) => (
            <motion.div
              key={idx}
              animate={{ height: `${Math.min(100, lv * 100)}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="w-2 rounded-t bg-gradient-to-t from-fuchsia-500/70 via-cyan-400/70 to-emerald-400/70 shadow-[0_0_12px_rgba(34,211,238,0.45)]"
              style={{ filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.45))' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
