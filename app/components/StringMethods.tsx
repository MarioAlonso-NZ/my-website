'use client';

import React from 'react';
import RunnablePythonCode from './RunnablePythonCode';
import NERDialog from './NERDialog';

export default function StringMethods() {
  const pythonOutput = `Lowercase: hello, world! this is a sample text for nlp tasks.
Replaced text: Hello, Universe! This is a sample text for NLP tasks.
Words: ['Hello,', 'World!', 'This', 'is', 'a', 'sample', 'text', 'for', 'NLP', 'tasks.']
The model BERT achieved an accuracy of 92.5% on the test set.`;

  const pythonCode = `# Example usage of string methods in NLP text preprocessing
sample_text = "Hello, World! This is a sample text for NLP tasks."

# Convert text to lowercase
lower_text = sample_text.lower()
print("Lowercase:", lower_text)

# Replace 'World' with 'Universe'
replaced_text = sample_text.replace("World", "Universe")
print("Replaced text:", replaced_text)

# Split text into words
words = sample_text.split()
print("Words:", words)

# Formatting text for model training logs
model_name = "BERT"
accuracy = 92.5
print("The model {} achieved an accuracy of {}% on the test set.".format(model_name, accuracy))`;

  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">

      {/* Introducción */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="space-y-3">
          <h3 className="font-bold text-white text-base">Quiz 3: Preparing Text for NER</h3>
          <p className="text-xs text-slate-400">
            Named Entity Recognition (NER) seeks to locate and classify named entities in text. Preparing text data ensures strings fit within specified limits.
          </p>
        </div>
        {/* The Dialog Button */}
        <NERDialog />
      </div>

      {/* Métodos Comunes */}
      <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">Common NLP String Methods</h4>
        <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 font-mono">
          <li><span className="text-cyan-400 font-bold">lower() / upper()</span>: Converts all characters to lowercase or uppercase.</li>
          <li><span className="text-cyan-400 font-bold">replace(old, new)</span>: Replaces occurrences of a specified substring.</li>
          <li><span className="text-cyan-400 font-bold">split()</span>: Splits a string into a list of individual words.</li>
          <li><span className="text-cyan-400 font-bold">format()</span>: Inserts variables into placeholders within a string template.</li>
        </ul>
      </div>

      {/* Bloque de Código de Ejemplo (Playground & Formatting) */}
      <div className="space-y-2">
        <RunnablePythonCode
          code={pythonCode}
          output={pythonOutput}
        />
      </div>

    </div>
  );
}