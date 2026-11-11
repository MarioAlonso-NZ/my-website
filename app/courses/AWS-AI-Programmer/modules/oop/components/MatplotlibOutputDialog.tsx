'use client';

import React, { useState, useEffect } from 'react';
import { BarChart2, X, Code2, Image as ImageIcon } from 'lucide-react';

export default function MatplotlibOutputDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const plotCode = `def plot_histogram_pdf(self, n_spaces = 50):
    """Function to plot the normalized histogram of the data and a plot of the 
    probability density function along the same range
    
    Args:
        n_spaces (int): number of data points 
    
    Returns:
        list: x values for the pdf plot
        list: y values for the pdf plot
    """
    
    mu = self.mean
    sigma = self.stdev

    min_range = min(self.data)
    max_range = max(self.data)
    
     # calculates the interval between x values
    interval = 1.0 * (max_range - min_range) / n_spaces

    x = []
    y = []
    
    # calculate the x values to visualize
    for i in range(n_spaces):
        tmp = min_range + interval*i
        x.append(tmp)
        y.append(self.pdf(tmp))

    # make the plots
    fig, axes = plt.subplots(2,sharex=True)
    fig.subplots_adjust(hspace=.5)
    axes[0].hist(self.data, density=True)
    axes[0].set_title('Normed Histogram of Data')
    axes[0].set_ylabel('Density')

    axes[1].plot(x, y)
    axes[1].set_title('Normal Distribution for \\n Sample Mean and Sample Standard Deviation')
    axes[0].set_ylabel('Density')
    plt.show()

    return x, y`;

  return (
    <>
      {/* Botón Disparador */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
      >
        <BarChart2 size={14} />
        View Matplotlib Output
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                  <BarChart2 className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    Matplotlib Subplots Output
                  </h2>
                  <p className="text-xs text-slate-400">
                    Visualizing the probability density function (PDF) and the normalized histogram.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Visualización de la Imagen */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
                    <ImageIcon className="text-emerald-400" size={15} />
                    <span>Rendered Figure</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-slate-800 overflow-hidden">
                    {/* Asegúrate de colocar image_4.png en tu carpeta public/ */}
                    <img 
                      src="../images/histogram.png" 
                      alt="Normed Histogram and Normal Distribution Curve" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Código de Matplotlib */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
                    <Code2 className="text-purple-400" size={15} />
                    <span>plot_histogram_pdf Method</span>
                  </div>
                  <div className="relative">
                    <pre className="text-cyan-300 bg-[#121824] p-4 rounded-xl border border-slate-800 overflow-x-auto text-xs font-mono">
                      <code>{plotCode}</code>
                    </pre>
                  </div>
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end shrink-0">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}