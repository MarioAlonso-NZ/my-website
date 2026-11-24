'use client';

import React, { useState } from 'react';
import { Sun, Clock, Filter, ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function SunPlanetsPractice() {
  const [activeTab, setActiveTab] = useState<'setup' | 'arithmetic' | 'filtering' | 'grader'>('setup');

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Sun className="text-emerald-400" size={18} />
          <h3 className="font-bold text-base">
            Practice Exercise: Manipulate a Series (Sun &amp; Planets)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Put your Pandas Series skills to work by creating a custom-indexed Series of planetary distances from the Sun, calculating sunlight travel time via element-wise arithmetic, filtering results with <strong>Boolean indexing</strong>, and validating your output with an automated grader.
        </p>
      </div>

      {/* 2. Interactive Feature Tabs */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('setup')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'setup' 
                ? 'border-b-2 border-emerald-500 text-emerald-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Sun size={14} /> 1. Create Series
          </button>
          <button 
            onClick={() => setActiveTab('arithmetic')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'arithmetic' 
                ? 'border-b-2 border-cyan-500 text-cyan-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Clock size={14} /> 2. Light Travel Time
          </button>
          <button 
            onClick={() => setActiveTab('filtering')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'filtering' 
                ? 'border-b-2 border-purple-500 text-purple-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Filter size={14} /> 3. Boolean Indexing
          </button>
          <button 
            onClick={() => setActiveTab('grader')}
            className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'grader' 
                ? 'border-b-2 border-amber-500 text-amber-400 bg-slate-900' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <ShieldCheck size={14} /> 4. Automated Grader
          </button>
        </div>

        {/* Tab Content Areas */}
        <div className="p-5 min-h-[380px]">
          
          {/* TAB 1: Create Series */}
          {activeTab === 'setup' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                <strong>Task 1:</strong> You are given two Python lists—<code className="text-emerald-300">planets</code> and <code className="text-emerald-300">distance_from_sun</code> (in units of <code className="text-emerald-300">10⁶ km</code>). Combine them into a Pandas Series named <code className="text-emerald-300">dist_planets</code> using the planet names as the index.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">data = distance_from_sun</span>
                  <p className="text-xs text-slate-400">Numeric values representing each planet&apos;s average distance from the Sun.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-emerald-400 font-mono text-xs font-bold block mb-1">index = planets</span>
                  <p className="text-xs text-slate-400">Custom string labels (<code className="text-slate-200">&apos;Earth&apos;</code>, <code className="text-slate-200">&apos;Saturn&apos;</code>, etc.) replacing default integer indices.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

# Given lists (distance in units of 10^6 km)
planets = ['Earth', 'Saturn', 'Venus', 'Mars', 'Jupiter']
distance_from_sun = [149.6, 1433.5, 108.2, 227.9, 778.6]

# Step 1: Create the Pandas Series
dist_planets = pd.Series(data=distance_from_sun, index=planets)

print(dist_planets)`}
                output={`Earth       149.6\nSaturn     1433.5\nVenus       108.2\nMars        227.9\nJupiter     778.6\ndtype: float64`}
              />
            </div>
          )}

          {/* TAB 2: Light Travel Time */}
          {activeTab === 'arithmetic' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                <strong>Task 2:</strong> Calculate how many minutes it takes sunlight to reach each planet. Since distances are already scaled by <code className="text-cyan-300">10⁶ km</code> and light travels at <code className="text-cyan-300">18 × 10⁶ km/minute</code>, simply divide <code className="text-cyan-300">dist_planets</code> by <code className="text-cyan-300">18</code>.
              </p>

              <div className="flex items-start gap-3 p-3 bg-slate-900/50 border border-slate-800 rounded">
                <Info className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>Vectorized Division:</strong> Dividing a Series by a scalar (<code className="text-cyan-300">dist_planets / 18</code>) automatically broadcasts the operation across all five planets without needing a loop.
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

planets = ['Earth', 'Saturn', 'Venus', 'Mars', 'Jupiter']
distance_from_sun = [149.6, 1433.5, 108.2, 227.9, 778.6]
dist_planets = pd.Series(data=distance_from_sun, index=planets)

# Step 2: Calculate light travel time in minutes (c = 18 x 10^6 km/min)
time_light = dist_planets / 18

print(time_light)`}
                output={`Earth       8.311111\nSaturn     79.638889\nVenus       6.011111\nMars       12.661111\nJupiter    43.255556\ndtype: float64`}
              />
            </div>
          )}

          {/* TAB 3: Boolean Indexing */}
          {activeTab === 'filtering' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                <strong>Task 3:</strong> Use <strong>Boolean indexing</strong> to filter <code className="text-purple-300">time_light</code> and select only the planets where sunlight takes <strong>less than 40 minutes</strong> to arrive.
              </p>

              <div className="flex items-start gap-3 p-3 bg-emerald-950/20 border border-emerald-500/30 rounded">
                <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Evaluating <code className="text-purple-300">time_light &lt; 40</code> produces a Boolean mask (<code className="text-slate-200">True/False</code> for each planet). Passing that mask back into <code className="text-purple-300">time_light[...]</code> keeps only the matching rows (<code className="text-emerald-300">Earth</code>, <code className="text-emerald-300">Venus</code>, and <code className="text-emerald-300">Mars</code>).
                </p>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

planets = ['Earth', 'Saturn', 'Venus', 'Mars', 'Jupiter']
distance_from_sun = [149.6, 1433.5, 108.2, 227.9, 778.6]

dist_planets = pd.Series(data=distance_from_sun, index=planets)
time_light = dist_planets / 18

# Step 3: Filter planets where sunlight takes < 40 minutes
close_planets = time_light[time_light < 40]

print(close_planets)`}
                output={`Earth     8.311111\nVenus     6.011111\nMars     12.661111\ndtype: float64`}
              />
            </div>
          )}

          {/* TAB 4: Automated Grader (sun_planets_grader.py) */}
          {activeTab === 'grader' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <p className="text-xs text-slate-400">
                In <code className="text-amber-300">sun_planets_grader.py</code>, the reference solution is isolated from the notebook and validated against your variables using type checking and Pandas&apos; strict <code className="text-amber-300">.equals()</code> comparison.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/50 p-3 rounded border border-amber-500/30">
                  <span className="text-amber-400 font-mono text-xs font-bold block mb-1">isinstance(x, pd.Series)</span>
                  <p className="text-xs text-slate-400">Ensures the variable is genuinely a Pandas Series rather than a plain list or NumPy array.</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800">
                  <span className="text-amber-400 font-mono text-xs font-bold block mb-1">ref.equals(student)</span>
                  <p className="text-xs text-slate-400">Checks that both the <strong>values</strong> and the <strong>index labels</strong> match identically in order and type.</p>
                </div>
              </div>

              <RunnablePythonCode
                code={`import pandas as pd

_PLANETS = ['Earth', 'Saturn', 'Venus', 'Mars', 'Jupiter']
_DISTANCE_FROM_SUN = [149.6, 1433.5, 108.2, 227.9, 778.6]

def _reference_solution():
    dist_planets = pd.Series(data=_DISTANCE_FROM_SUN, index=_PLANETS)
    time_light = dist_planets / 18
    close_planets = time_light[time_light < 40]
    return dist_planets, time_light, close_planets

def grade(dist_planets, time_light, close_planets):
    ref_dist, ref_time, ref_close = _reference_solution()

    try:
        dist_ok = isinstance(dist_planets, pd.Series) and ref_dist.equals(dist_planets)
    except Exception:
        dist_ok = False

    try:
        time_ok = isinstance(time_light, pd.Series) and ref_time.equals(time_light)
    except Exception:
        time_ok = False

    try:
        close_ok = isinstance(close_planets, pd.Series) and ref_close.equals(close_planets)
    except Exception:
        close_ok = False

    if not dist_ok:
        print("dist_planets is incorrect")
    elif not time_ok:
        print("time_light is incorrect. Verify that it is created by dividing dist_planets by 18.")
    elif not close_ok:
        print("close_planets is incorrect. Verify that \`close_planets\` is created by using \`time_light < 40\` as a boolean index in \`time_light\`")
    else:
        print("Nice work!")

# Test the grader with the completed solution
dist_planets = pd.Series(data=_DISTANCE_FROM_SUN, index=_PLANETS)
time_light = dist_planets / 18
close_planets = time_light[time_light < 40]

grade(dist_planets, time_light, close_planets)`}
                output={`Nice work!`}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}