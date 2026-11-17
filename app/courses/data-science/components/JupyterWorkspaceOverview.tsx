'use client';

import React from 'react';
import { CloudCog, HardDrive, RefreshCcw, RotateCcw, Cpu, AlertTriangle, Save } from 'lucide-react';

export default function JupyterWorkspaceOverview() {
  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <CloudCog className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Udacity Jupyter Workspace Rules
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          The Workspace is a provided Linux container with pre-installed packages. While convenient, it is ephemeral (temporary) and has strict resource limits you must manage carefully.
        </p>
      </div>

      {/* 2. Storage & File System */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          File System & Storage Limits
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Save size={64} />
            </div>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono text-xs">
              <HardDrive size={16} />
              <span>Persistence (/workspace)</span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              <strong>Only</strong> files stored in the <code className="text-cyan-300">/workspace</code> directory are backed up. Anything stored outside of it (like the <code className="text-slate-400">/opt</code> directory) will be completely deleted when the machine reboots.
            </p>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <AlertTriangle size={64} />
            </div>
            <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs">
              <AlertTriangle size={16} />
              <span>Size Limits</span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Keep the total contents of the workspace under <strong>3GiB</strong>. Do not store individual files larger than <strong>1.5GB</strong>, or your Workspace will freeze the next time you try to load it.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Refresh vs Reset */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800/60 pb-2">
          Troubleshooting: Refresh vs Reset
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
              <RefreshCcw size={16} />
              <span>Refresh Workspace (Safe)</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              Shuts down the current container and moves all your <code className="text-emerald-300">/workspace</code> files to a brand new Virtual Machine. Use this if the workspace is glitching.
            </p>
          </div>

          <div className="p-4 bg-rose-950/20 border border-rose-900/50 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-semibold font-mono text-xs">
              <RotateCcw size={16} />
              <span>Reset Workspace (Danger)</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              Wipes everything and restores the environment to the original starter files. <strong>You will lose all your progress and custom files!</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 4. GPU Warning */}
      <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm">
          <Cpu size={18} />
          <span>GPU Quota Management (100 Hours)</span>
        </div>
        <p className="text-xs text-amber-200/80 font-sans leading-relaxed">
          You only get a total of <strong>100 hours of GPU time</strong> for the entire program! It is absolutely critical that you click the <strong>Disable</strong> button at the bottom of the Workspace immediately after your heavy computations are done. 
        </p>
        <div className="bg-amber-950/50 p-2 rounded text-xs text-amber-300/70 border border-amber-900/50">
          *Note: Toggling the GPU off triggers a backup and moves you to a non-GPU machine. This process only preserves the /workspace directory.
        </div>
      </div>

    </div>
  );
}