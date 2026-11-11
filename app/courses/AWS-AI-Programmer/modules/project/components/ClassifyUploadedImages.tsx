'use client';

import React from 'react';
import { UploadCloud, Image as ImageIcon, TerminalSquare, FileSearch, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ClassifyUploadedImages() {

  // Salida calculada simulando la ejecución del script Bash y la evaluación final
  const evaluationOutput = `--- Simulating: sh run_models_batch_uploaded.sh ---
Processing 4 images in 'uploaded_images/'...
Generating resnet_uploaded-images.txt...
Generating alexnet_uploaded-images.txt...
Generating vgg_uploaded-images.txt...
Done.

--- Final Model Evaluation Summary ---

Q1. Dog_01 (Golden Retriever): 
    Did all 3 get the same breed? YES.
    ResNet: Golden Retriever | AlexNet: Golden Retriever | VGG: Golden Retriever

Q2. Dog_02 (Flipped/Rotated): 
    Did all 3 get the same breed as Dog_01? NO.
    ResNet: Golden Retriever | AlexNet: Labrador Retriever (Mismatch!) | VGG: Golden Retriever

Q3. Non-Dogs (Black_bear_01.jpg, Coffee_mug_01.jpg): 
    Did all 3 correctly identify them as NOT dogs? YES.

Q4. Conclusion (Best Model): 
    ResNet and VGG performed the best. AlexNet struggled with spatial variance (the flipped image), indicating a less robust feature extraction for rotated patterns.`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <UploadCloud className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            Final Step: Classify Uploaded Images & Model Evaluation
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Put your program to the ultimate test by providing your own custom images. Run a batch script across all three CNN architectures to evaluate real-world robustness.
        </p>
      </div>

      {/* 2. Requisitos de Imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block flex items-center gap-2">
            <ImageIcon size={14} /> 1. Format & Shape
          </span>
          <p className="text-slate-400 font-sans">
            Images must be in <code className="text-slate-300 font-mono">.jpg</code> format and cropped to be approximately square (equal width and height).
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block flex items-center gap-2">
            <FileSearch size={14} /> 2. Naming Convention
          </span>
          <p className="text-slate-400 font-sans">
            Use underscores for spaces. Required: <br/>
            - <code className="text-slate-300 font-mono">Dog_01.jpg</code><br/>
            - <code className="text-slate-300 font-mono">Animal_Name_01.jpg</code><br/>
            - <code className="text-slate-300 font-mono">Object_Name_01.jpg</code>
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block flex items-center gap-2">
            <TerminalSquare size={14} /> 3. Spatial Variance
          </span>
          <p className="text-slate-400 font-sans">
            Create <code className="text-slate-300 font-mono">Dog_02.jpg</code> by horizontally flipping or rotating <code className="text-slate-300 font-mono">Dog_01.jpg</code> by 180 degrees to test model robustness.
          </p>
        </div>
      </div>

      {/* 3. Simulación de Ejecución */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Execution Simulation: run_models_batch_uploaded.sh</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          In the actual workspace, you will run <code className="text-cyan-300 font-mono">sh run_models_batch_uploaded.sh</code> in the terminal. Here is a simulation of the resulting evaluation to answer the final 4 questions of the project.
        </p>

        <RunnablePythonCode
          code={`import time

print("--- Simulating: sh run_models_batch_uploaded.sh ---")
print("Processing 4 images in 'uploaded_images/'...")
time.sleep(0.5)
print("Generating resnet_uploaded-images.txt...")
time.sleep(0.5)
print("Generating alexnet_uploaded-images.txt...")
time.sleep(0.5)
print("Generating vgg_uploaded-images.txt...")
print("Done.\\n")

print("--- Final Model Evaluation Summary ---\\n")

print("Q1. Dog_01 (Golden Retriever): ")
print("    Did all 3 get the same breed? YES.")
print("    ResNet: Golden Retriever | AlexNet: Golden Retriever | VGG: Golden Retriever\\n")

print("Q2. Dog_02 (Flipped/Rotated): ")
print("    Did all 3 get the same breed as Dog_01? NO.")
print("    ResNet: Golden Retriever | AlexNet: Labrador Retriever (Mismatch!) | VGG: Golden Retriever\\n")

print("Q3. Non-Dogs (Black_bear_01.jpg, Coffee_mug_01.jpg): ")
print("    Did all 3 correctly identify them as NOT dogs? YES.\\n")

print("Q4. Conclusion (Best Model): ")
print("    ResNet and VGG performed the best. AlexNet struggled with spatial variance (the flipped image), indicating a less robust feature extraction for rotated patterns.")`}
          output={evaluationOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Project Complete: Congratulations! By analyzing these output texts, you have successfully built, timed, evaluated, and stress-tested a full AI image classification pipeline.</span>
        </div>
      </div>

    </div>
  );
}