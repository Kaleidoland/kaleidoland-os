'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Toaster, toast } from 'sonner';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(false);

  const runAudit = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success('ORBITAL_AUDIT_COMPLETE: 8847');
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Toaster position="bottom-right" theme="dark" />
      <ParticleField />
      <main className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-cyan-500/20 mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs text-cyan-400 tracking-widest">ORBITAL OS ONLINE</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">
            KALEIDO<span className="text-cyan-400">LAND</span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            AI-native interstellar operating system. 5000 particles. 60fps. Sovereign runtime.
          </p>
          
          <button onClick={runAudit} disabled={loading} className="px-8 py-4 bg-cyan-400 text-black font-bold rounded-2xl hover:scale-105 transition-transform disabled:opacity-50" style={{ boxShadow: '0 0 40px rgba(0,255,255,0.3)' }}>
            {loading ? 'SCANNING...' : 'LAUNCH ORBITAL AUDIT'}
          </button>
        </div>
      </main>
    </>
  );
}
