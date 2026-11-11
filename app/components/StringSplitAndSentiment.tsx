'use client';

import React from 'react';
import RunnablePythonCode from './RunnablePythonCode';
import AccuracyDialog from './AccuracyDialog';

export default function StringSplitAndSentiment() {

  const pythonOutput = `Length: 383 characters
First 'accuracy' at index: 25
Last 'model' at index: 219
Word 'model' count: 4
Positive words breakdown: {'achieved': 1, 'consistent': 1, 'improved': 1, 'ready': 1, 'meets': 1}
Negative words count: 1`;

  const pythonCode = `# Model output text sample
model_output = (
    "The AI model achieved an accuracy of 92.5% in the initial tests.\\n"
    "The model's performance was consistent across different datasets.\\n"
    "Further tuning of the model hyperparameters improved the accuracy to 94%.\\n"
    "This model is now ready for deployment in the production environment.\\n"
    "Model performance will be monitored continuously to ensure it meets the expected standards."
)

# 1. Length of the string
length_of_model_output = len(model_output)

# 2. Indices and counts
index_first_accuracy = model_output.find('accuracy')
index_last_model = model_output.rfind('model')
count_model = model_output.count('model')

# 3. Tokenization into individual words
tokens = model_output.split()

# 4. Basic Sentiment Analysis
positive_words = ['achieved', 'consistent', 'improved', 'ready', 'meets']
negative_words = ['monitored']

count_positive = {word: model_output.count(word) for word in positive_words}
count_negative = sum(token in negative_words for token in tokens)

# Output results
print(f"Length: {length_of_model_output} characters")
print(f"First 'accuracy' at index: {index_first_accuracy}")
print(f"Last 'model' at index: {index_last_model}")
print(f"Word 'model' count: {count_model}")
print(f"Positive words breakdown: {count_positive}")
print(f"Negative words count: {count_negative}")`

  return (
    <div className="space-y-6 text-slate-300 text-sm leading-relaxed">

      {/* Introducción */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="space-y-3">
          <h3 className="font-bold text-white text-base"># Quiz: Text Analysis & Sentiment</h3>
          <p className="text-xs text-slate-400">
            In this exercise, we manipulate a text string to find lengths, indices, and perform basic sentiment analysis to prepare for NLP tasks.
          </p>
        </div>
        
        {/* Group the buttons together */}
        <div className="flex flex-col gap-2 shrink-0">
          <AccuracyDialog />
        </div>
      </div>

      {/* Escenario y Tarea */}
      <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">Scenario & Tasks</h4>
        <p className="text-xs text-slate-300">
          We evaluate model output text to answer questions using built-in string methods such as <code className="text-cyan-400 font-mono">len()</code>, <code className="text-cyan-400 font-mono">find()</code>, <code className="text-cyan-400 font-mono">rfind()</code>, <code className="text-cyan-400 font-mono">count()</code>, and <code className="text-cyan-400 font-mono">split()</code>.
        </p>
      </div>

      {/* Bloque de Código de Solución */}
      <div className="space-y-2">
        <RunnablePythonCode
          code={pythonCode}
          output={pythonOutput}
        />
      </div>

    </div>
  );
}