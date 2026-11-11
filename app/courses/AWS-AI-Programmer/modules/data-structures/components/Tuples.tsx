'use client';

import React from 'react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode'; // <-- Import the component
import TuplesQuizDialog from './TupleQuizDialog';

export default function Tuples() {

    // 1. Calculate the exact Python output for the first block
    const locationOutput = `Latitude: 13.4125
Longitude: 103.866667`;

    // 2. Calculate the exact Python output for the unpacking block
    const unpackingOutput = `The dimensions are 52 x 40 x 100
The dimensions are 52 x 40 x 100`;

    return (
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">

            <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                <div>
                    <h3 className="font-bold text-white text-base"># Tuples</h3>
                    <p className="text-xs text-slate-400">
                        A <span className="text-cyan-400 font-semibold">tuple</span> is an immutable, ordered sequence of elements often used to store related pieces of information (like geographic coordinates or coordinates in multidimensional AI tensors).
                    </p>
                </div>

                {/* Trigger Pop-up Modal */}
                <TuplesQuizDialog />
            </div>

            {/* Introducción a Tuplas */}
            <div className="space-y-3">
                <RunnablePythonCode
                    code={`location = (13.4125, 103.866667)

print("Latitude:", location[0])
print("Longitude:", location[1])`}
                    output={locationOutput}
                />
            </div>

            {/* Tuplas vs Listas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs font-mono font-bold text-emerald-400 block">Ordered & Indexed:</span>
                    <p className="text-xs text-slate-400">
                        Like lists, elements are stored sequentially and can be accessed via numerical indices (<code className="text-cyan-400 font-mono">[0]</code>, <code className="text-cyan-400 font-mono">[-1]</code>).
                    </p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-xs font-mono font-bold text-rose-400 block">Immutable:</span>
                    <p className="text-xs text-slate-400">
                        Unlike lists, We cannot append, remove, or modify items in place once a tuple is constructed.
                    </p>
                </div>
            </div>

            {/* Tuple Unpacking */}
            <div className="space-y-3 bg-slate-950 p-5 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white text-sm">Tuple Unpacking & Compact Assignment</h4>
                <p className="text-xs text-slate-400">
                    Parentheses are optional when defining tuples. We can use <strong>tuple unpacking</strong> to unpack values directly into multiple variables in a single expression:
                </p>

                <RunnablePythonCode
                    code={`# 1. Standard unpacking from a tuple variable:
dimensions = 52, 40, 100
length, width, height = dimensions
print("The dimensions are {} x {} x {}".format(length, width, height))

# 2. Compact single-line multi-assignment:
length, width, height = 52, 40, 100
print("The dimensions are {} x {} x {}".format(length, width, height))`}
                    output={unpackingOutput}
                />
            </div>

        </div>
    );
}