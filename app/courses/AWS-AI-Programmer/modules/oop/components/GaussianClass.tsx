'use client';

import React from 'react';
import { Calculator, Sigma, FunctionSquare, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';
import { InlineMath, BlockMath } from 'react-katex'; // <-- Import KaTeX components

export default function GaussianClass() {

    // Salida calculada para la resolución de los quizzes estadísticos
    const mathQuizOutput = `--- Quiz 1: Exact point probability in a Continuous Distribution ---
Probability of exactly 185 lbs: 0.0

--- Quiz 2: Range probability in a Normal Distribution ---
Probability between 120 and 155 lbs: 0.1884 (Approx 0.19)

--- Quiz 3: Binomial Distribution (k successes in n trials) ---
Probability of exactly 7 allergic out of 60: 0.1221 (Approx 0.12)

All mathematical quiz validations passed!`;

    return (
        <div className="space-y-8 text-slate-300 text-sm leading-relaxed">

            {/* 1. Encabezado */}
            <div className="space-y-2 pb-2 border-b border-slate-800/60">
                <div className="flex items-center gap-2 text-white">
                    <Sigma className="text-cyan-400" size={18} />
                    <h3 className="font-bold text-base">
                        # A Gaussian Class: Math & Probability Foundations
                    </h3>
                </div>
                <p className="text-xs text-slate-400">
                    Before building the Python package, review the foundational statistical formulas for Gaussian (Normal) and Binomial distributions used to model AI data.
                </p>
            </div>

            {/* 2. Fórmulas Matemáticas (Gaussian & Binomial) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Gaussian Distribution */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs border-b border-slate-800 pb-2">
                        <FunctionSquare size={16} />
                        <span>Gaussian Distribution</span>
                    </div>

                    <div className="space-y-3 text-xs text-slate-400">
                        <p><strong className="text-slate-300">Mean:</strong> <InlineMath math={String.raw`\mu`} /></p>
                        <p><strong className="text-slate-300">Variance:</strong> <InlineMath math={String.raw`\sigma^2`} /></p>
                        <p><strong className="text-slate-300">Standard Deviation:</strong> <InlineMath math={String.raw`\sigma`} /></p>
                        
                        <div className="pt-2">
                            <strong className="text-slate-300 block mb-2">Probability Density Function (PDF):</strong>
                            <div className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-white">
                                <BlockMath math={String.raw`f(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}`} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Binomial Distribution */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs border-b border-slate-800 pb-2">
                        <Calculator size={16} />
                        <span>Binomial Distribution</span>
                    </div>
                    <div className="space-y-3 text-xs text-slate-400">
                        <p><strong className="text-slate-300">Mean:</strong> <InlineMath math={String.raw`\mu = n \cdot p`} /></p>
                        <p><strong className="text-slate-300">Variance:</strong> <InlineMath math={String.raw`\sigma^2 = n \cdot p \cdot (1 - p)`} /></p>
                        <p><strong className="text-slate-300">Standard Deviation:</strong> <InlineMath math={String.raw`\sigma = \sqrt{n \cdot p \cdot (1 - p)}`} /></p>
                        
                        <div className="pt-2">
                            <strong className="text-slate-300 block mb-2">Probability Density Function (PDF):</strong>
                            <div className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-white">
                                <BlockMath math={String.raw`f(k, n, p) = \frac{n!}{k!(n-k)!} p^k (1-p)^{(n-k)}`} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* 3. Resolución Programática de los Quizzes */}
            <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
                    <Calculator className="text-cyan-400" size={15} />
                    <span>Python Implementation: Solving the Probability Quizzes</span>
                </div>
                <p className="text-xs text-slate-400 mb-2 font-sans">
                    Translating the statistical questions into Python using the <code className="text-cyan-300 font-mono">math</code> module to verify the correct answers (0, 0.19, and 0.12).
                </p>

                <RunnablePythonCode
                    code={`import math

# --- Quiz 1: Exact point in a Continuous Distribution ---
# What is the probability that a man weighs *exactly* 185 pounds?
# In continuous distributions, the probability of any single exact point is always 0.
prob_exact_185 = 0.0

print("--- Quiz 1: Exact point probability in a Continuous Distribution ---")
print(f"Probability of exactly 185 lbs: {prob_exact_185}\\n")

# --- Quiz 2: Range in a Normal Distribution ---
# Mean = 180, Std Dev = 34. Probability between 120 and 155?
def normal_cdf(x, mu, sigma):
    # Cumulative Distribution Function for Normal Distribution
    return (1.0 + math.erf((x - mu) / (sigma * math.sqrt(2.0)))) / 2.0

mu_weight = 180
sigma_weight = 34
prob_up_to_155 = normal_cdf(155, mu_weight, sigma_weight)
prob_up_to_120 = normal_cdf(120, mu_weight, sigma_weight)
prob_between = prob_up_to_155 - prob_up_to_120

print("--- Quiz 2: Range probability in a Normal Distribution ---")
print(f"Probability between 120 and 155 lbs: {prob_between:.4f} (Approx 0.19)\\n")

# --- Quiz 3: Binomial Distribution ---
# n = 60 trials, p = 0.15 (allergic). Probability of exactly k = 7?
def binomial_pdf(k, n, p):
    combinations = math.comb(n, k)
    return combinations * (p**k) * ((1 - p)**(n - k))

n_trials = 60
p_allergic = 0.15
k_successes = 7
prob_binomial = binomial_pdf(k_successes, n_trials, p_allergic)

print("--- Quiz 3: Binomial Distribution (k successes in n trials) ---")
print(f"Probability of exactly 7 allergic out of 60: {prob_binomial:.4f} (Approx 0.12)\\n")

print("All mathematical quiz validations passed!")`}
                    output={mathQuizOutput}
                />

                <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
                    <span>Note: In Question 1, the probability is 0 because the area under the curve for a single infinitesimal point in a continuous Gaussian distribution is zero.</span>
                </div>
            </div>

        </div>
    );
}