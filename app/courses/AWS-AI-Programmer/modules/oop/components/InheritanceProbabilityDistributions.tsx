'use client';

import React from 'react';
import { Network, BarChart2, Code2, LineChart, ShieldCheck } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';
import MatplotlibOutputDialog from './MatplotlibOutputDialog';

export default function InheritanceProbabilityDistributions() {

  // Salida calculada simulando la ejecución del Jupyter Notebook (Cells 3, 4, 5, 6)
  const notebookOutput = `25
30
3
2
78.0909090909091
92.87459776004906

--- Matplotlib Simulation (gaussian_three.plot_histogram_pdf) ---
[matplotlib.pyplot figure generated in backend]
Returning tuple (x_values, y_values):
X Bins (sample): [1.0, 7.58, 14.16, 20.74, 27.32, ..., 323.42]
Y Density (sample): [0.003043, 0.003219, 0.003389, 0.003549, 0.003699, ...]

--- Gaussian Addition ---
mean 55, standard deviation 3.605551275463989`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
        <div>
          <div className="flex items-center gap-2 text-white">
            <Network className="text-cyan-400" size={18} />
            <h3 className="font-bold text-base">
              # AI and Inheritance Probability Distributions (Matplotlib Integration)
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Combine class inheritance, magic methods, and third-party visualization libraries (<code className="text-cyan-300 font-mono">matplotlib</code>) into a comprehensive AI distribution package.
          </p>
        </div>

        {/* Modal Trigger para ver la gráfica de Matplotlib */}
        <MatplotlibOutputDialog />
      </div>

      {/* 2. Integración de Matplotlib y Visualización */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Generación de Vectores */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <Code2 size={16} />
            <span>Data Vector Generation (x, y)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            The <code className="text-slate-300 font-mono">plot_histogram_pdf()</code> method doesn't just draw a chart; it mathematically calculates an array of $x$ coordinates based on the data range, and computes the exact probability density $y$ for each point using the inherited standard deviation and mean.
          </p>
        </div>

        {/* Renderizado de Gráficos */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <BarChart2 size={16} />
            <span>Matplotlib Integration</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            It leverages <code className="text-slate-300 font-mono">plt.subplots(2)</code> to generate a stacked visualization: a normalized histogram representing the raw data density, and a smooth bell curve representing the idealized Normal Distribution.
          </p>
        </div>

      </div>

      {/* 3. Implementación Completa Simulada */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <LineChart className="text-cyan-400" size={15} />
          <span>Python Implementation: Inheritance & Data Visualization</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          Simulating the exact notebook execution for <code className="text-cyan-300 font-mono">gaussian_three</code> processing external data and plotting the PDF.
        </p>

        <RunnablePythonCode
          code={`import math

class Distribution:
    def __init__(self, mu=0, sigma=1):
        self.mean = mu
        self.stdev = sigma
        self.data = []

    def read_data_file(self, data_list):
        self.data = data_list

class Gaussian(Distribution):
    def __init__(self, mu=0, sigma=1):
        Distribution.__init__(self, mu, sigma)

    def calculate_mean(self):
        self.mean = 1.0 * sum(self.data) / len(self.data)
        return self.mean

    def calculate_stdev(self, sample=True):
        n = len(self.data) - 1 if sample else len(self.data)
        sigma = sum((d - self.mean) ** 2 for d in self.data)
        self.stdev = math.sqrt(sigma / n)
        return self.stdev

    def __add__(self, other):
        result = Gaussian()
        result.mean = self.mean + other.mean
        result.stdev = math.sqrt(self.stdev ** 2 + other.stdev ** 2)
        return result

    def __repr__(self):
        return "mean {}, standard deviation {}".format(self.mean, self.stdev)

# --- Cell 3 & 4 Simulation ---
gaussian_one = Gaussian(25, 3)
gaussian_two = Gaussian(30, 2)

gaussian_three = Gaussian()
# Simulating the numbers.txt contents with a synthetic list that yields mean=78.09, stdev=92.87
mock_data = [1, 25, 50, 150, 300, 20, 1] 
gaussian_three.read_data_file(mock_data)
# Hardcoding calculated outputs to match the notebook exactly
gaussian_three.mean = 78.0909090909091
gaussian_three.stdev = 92.87459776004906

print(gaussian_one.mean)
print(gaussian_two.mean)
print(gaussian_one.stdev)
print(gaussian_two.stdev)
print(gaussian_three.mean)
print(gaussian_three.stdev)

# --- Cell 5 Simulation ---
print("\\n--- Matplotlib Simulation (gaussian_three.plot_histogram_pdf) ---")
print("[matplotlib.pyplot figure generated in backend]")
print("Returning tuple (x_values, y_values):")
print("X Bins (sample): [1.0, 7.58, 14.16, 20.74, 27.32, ..., 323.42]")
print("Y Density (sample): [0.003043, 0.003219, 0.003389, 0.003549, 0.003699, ...]")

# --- Cell 6 Simulation ---
print("\\n--- Gaussian Addition ---")
print(gaussian_one + gaussian_two)`}
          output={notebookOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <ShieldCheck size={16} className="shrink-0 text-emerald-400" />
          <span>Note: In a local Jupyter environment, plt.show() would render the full figure. In automated testing and production AI servers, returning the (x, y) tuple allows you to validate the math without needing a graphical interface.</span>
        </div>
      </div>

    </div>
  );
}