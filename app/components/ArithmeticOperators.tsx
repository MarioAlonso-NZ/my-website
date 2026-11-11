"use client";

import React, { useState } from "react";

export default function ArithmeticOperators() {
    // State for the interactive calculator (kept as strings!)
    const [numA, setNumA] = useState<string>("10");
    const [numB, setNumB] = useState<string>("3");
    const [operator, setOperator] = useState<string>("+");

    // Function to calculate the result dynamically (Python Style)
    const calculate = () => {
        // 1. Handle empty inputs gracefully
        if (numA === "" || numB === "") return "";

        // 2. Helper to check if a string is actually a number
        const isNumber = (val: string) => val.trim() !== "" && !isNaN(Number(val));

        // 3. Dynamic Typing: Convert to number if possible, otherwise keep as string
        const valA = isNumber(numA) ? Number(numA) : numA;
        const valB = isNumber(numB) ? Number(numB) : numB;

        // 4. Python `+` behavior (Concatenation vs Addition)
        if (operator === "+") {
            if (typeof valA === "string" || typeof valB === "string") {
                return String(valA) + String(valB);
            }
            return valA + valB;
        }

        // 5. Python `*` behavior (String Repetition vs Multiplication)
        if (operator === "*") {
            if (typeof valA === "string" && typeof valB === "number") {
                // Cap the repetition to a safe limit (e.g., 1000) to prevent memory crashes
                const safeRepeat = Math.min(valB, 1000);
                return valA.repeat(safeRepeat);
            }
            if (typeof valA === "number" && typeof valB === "string") {
                const safeRepeat = Math.min(valA, 1000);
                return valB.repeat(safeRepeat);
            }
            return (valA as number) * (valB as number);
        }

        // 6. Python `-`, `/`, `%`, `**`, `//` behavior (Strict Math)
        // If either is a string, Python raises a TypeError
        if (typeof valA === "string" || typeof valB === "string") {
            return "TypeError: unsupported operand type(s)";
        }

        // 7. Standard Math Operations
        switch (operator) {
            case "-":
                return valA - valB;
            case "/":
                if (valB === 0) return "ZeroDivisionError";
                return valA / valB;
            case "%":
                if (valB === 0) return "ZeroDivisionError";
                return valA % valB;
            case "**":
                return valA ** valB;
            case "//":
                if (valB === 0) return "ZeroDivisionError";
                return Math.floor(valA / valB);
            default:
                return 0;
        }
    };

    const result = calculate();

    // 1. Check if it's NaN and give it a friendly message. 
    // Otherwise, keep the result.
    const safeResult = (typeof result === "number" && isNaN(result))
        ? "Math Error"
        : result;

    // 2. Ensure we are ALWAYS dealing with a string for the display logic
    const resultString = String(safeResult);

    const displayResult = resultString.length > 40
        ? resultString.substring(0, 14) + "..." + resultString.at(-1)
        : resultString;

    return (
        <div className="space-y-8">
            {/* TEXT INTRO */}
            <p className="text-slate-300">
                Python uses standard mathematical operators. Because it is dynamically typed,
                it will automatically handle the result (e.g., concatenating strings, repeating strings,
                or converting an integer to a float when dividing).
            </p>

            {/* CHEAT SHEET TABLE */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-slate-800 text-slate-200">
                        <tr>
                            <th className="px-6 py-3 font-semibold">Operator</th>
                            <th className="px-6 py-3 font-semibold">Name</th>
                            <th className="px-6 py-3 font-semibold">Example</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-mono">
                        <tr><td className="px-6 py-3 text-cyan-400">+</td><td className="px-6 py-3">Addition / Concat</td><td className="px-6 py-3 text-slate-500">10 + 3 = 13 | "p" + 2 = "p2"</td></tr>
                        <tr><td className="px-6 py-3 text-cyan-400">-</td><td className="px-6 py-3">Subtraction</td><td className="px-6 py-3 text-slate-500">10 - 3 = 7</td></tr>
                        <tr><td className="px-6 py-3 text-cyan-400">*</td><td className="px-6 py-3">Multiplication / Repeat</td><td className="px-6 py-3 text-slate-500">10 * 3 = 30 | "p" * 3 = "ppp"</td></tr>
                        <tr><td className="px-6 py-3 text-cyan-400">/</td><td className="px-6 py-3">Division</td><td className="px-6 py-3 text-slate-500">10 / 3 = 3.333...</td></tr>
                        <tr><td className="px-6 py-3 text-cyan-400">%</td><td className="px-6 py-3">Modulus (Remainder)</td><td className="px-6 py-3 text-slate-500">10 % 3 = 1</td></tr>
                        <tr><td className="px-6 py-3 text-cyan-400">**</td><td className="px-6 py-3">Exponentiation</td><td className="px-6 py-3 text-slate-500">10 ** 3 = 1000</td></tr>
                        <tr><td className="px-6 py-3 text-cyan-400">//</td><td className="px-6 py-3">Floor Division</td><td className="px-6 py-3 text-slate-500">10 // 3 = 3</td></tr>
                    </tbody>
                </table>
            </div>

            {/* PEMDAS SECTION */}
            <div className="bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Order of Operations (PEMDAS)</h3>
                <p className="text-sm text-slate-300 mb-4">
                    Python follows standard mathematical order: <strong>P</strong>arentheses, <strong>E</strong>xponents, <strong>M</strong>ultiplication/<strong>D</strong>ivision, <strong>A</strong>ddition/<strong>S</strong>ubtraction.
                </p>
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-sm text-slate-300 flex flex-col gap-2">
                    <span className="text-slate-500"># Step 1: Multiplication first (3 * 4)</span>
                    <span>{`result = 2 + 3 * 4`}</span>
                    <span className="text-slate-500"># Step 2: Then Addition</span>
                    <span>{`result = 2 + 12  # -> 14`}</span>
                </div>
            </div>

            {/* INTERACTIVE PLAYGROUND */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    Interactive Playground (Python Style)
                </h3>

                <div className="flex flex-wrap items-center gap-4 font-mono text-xl bg-slate-950 p-6 rounded-lg border border-slate-800">
                    <input
                        type="text"
                        value={numA}
                        onChange={(e) => setNumA(e.target.value)}
                        onFocus={(e) => e.target.select()} // Fixes the leading zero issue!
                        className="w-24 bg-slate-900 border border-slate-700 text-cyan-300 px-3 py-2 rounded focus:outline-none focus:border-cyan-500"
                        placeholder="0"
                    />

                    <select
                        value={operator}
                        onChange={(e) => setOperator(e.target.value)}
                        className="bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded focus:outline-none focus:border-cyan-500 appearance-none text-center"
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        <option value="%">%</option>
                        <option value="**">**</option>
                        <option value="//">//</option>
                    </select>

                    <input
                        type="text"
                        value={numB}
                        onChange={(e) => setNumB(e.target.value)}
                        onFocus={(e) => e.target.select()} // Fixes the leading zero issue!
                        className="w-24 bg-slate-900 border border-slate-700 text-cyan-300 px-3 py-2 rounded focus:outline-none focus:border-cyan-500"
                        placeholder="0"
                    />

                    <span className="text-slate-500">=</span>

                    {/* Result container with break-words so long strings don't break UI */}
                    <span
                        className="text-green-400 font-bold break-all"
                        title={String(result)}
                    >
                        {displayResult}
                    </span>
                </div>

                <p className="text-xs text-slate-500 mt-3 text-center">
                    Try <code className="text-cyan-300">"p" + 2</code> or <code className="text-cyan-300">"p" * 20</code> to see Python's dynamic typing in action!
                </p>
            </div>
        </div>
    );
}