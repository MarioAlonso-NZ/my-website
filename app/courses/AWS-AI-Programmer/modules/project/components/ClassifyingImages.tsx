'use client';

import React from 'react';
import { Image as ImageIcon, SearchCode, Database, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ClassifyingImages() {

  // Salida calculada simulando la ejecución de classify_images()
  const classifyingOutput = `--- Running classify_images() ---

--- Updated results_dic (Compound Data Structure) ---
File: Boston_terrier_02259.jpg  | Truth: boston terrier  | Classifier: boston bull, boston terrier         | Match: 1
File: beagle_0239.jpg           | Truth: beagle          | Classifier: walker hound, walker foxhound, beag | Match: 1
File: fox_squirrel_01.jpg       | Truth: fox squirrel    | Classifier: fox squirrel, eastern fox squirrel  | Match: 1
File: gecko_80.jpg              | Truth: gecko           | Classifier: banded gecko                        | Match: 1`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <ImageIcon className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            #TODO: 3 - Classifying Images (CNN Integration)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Run the images through the CNN model, clean the model's output labels, compare them against the ground-truth pet labels, and store everything in our compound dictionary.
        </p>
      </div>

      {/* 2. Conceptos Clave de Clasificación */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. Model Inference</span>
          <p className="text-slate-400 font-sans">
            Pass the concatenated full image path and the chosen architecture (e.g., <code className="text-slate-300 font-mono">vgg</code>) to the external <code className="text-cyan-300 font-mono">classifier()</code> function.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. Text Matching</span>
          <p className="text-slate-400 font-sans">
            Use <code className="text-slate-300 font-mono">.lower().strip()</code> to normalize the model's output, and the <code className="text-slate-300 font-mono">in</code> operator to check if the true label exists within the classifier's string.
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. Dict.extend()</span>
          <p className="text-slate-400 font-sans">
            Use <code className="text-slate-300 font-mono">results_dic[key].extend([label, match])</code> to append the classifier string and a 1/0 boolean integer to the existing list value.
          </p>
        </div>
      </div>

      {/* 3. Implementación del Proyecto */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: classify_images.py</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulates the <code className="text-cyan-300 font-mono">classify_images</code> logic. We are using a mock <code className="text-cyan-300 font-mono">classifier()</code> function here since we cannot run PyTorch models directly in the browser.
        </p>

        <RunnablePythonCode
          code={`# Mock classifier function for browser simulation
def classifier(image_path, model):
    mock_results = {
        "pet_images/beagle_0239.jpg": "Walker hound, Walker foxhound, beagle",
        "pet_images/Boston_terrier_02259.jpg": "boston bull, boston terrier",
        "pet_images/fox_squirrel_01.jpg": "fox squirrel, eastern fox squirrel",
        "pet_images/gecko_80.jpg": "banded gecko"
    }
    return mock_results.get(image_path, "unknown")

def classify_images(images_dir, results_dic, model):
    """
    Creates classifier labels, compares them, and adds them to results_dic.
    """
    for key in results_dic:
        # 1. Create full path
        image_path = images_dir + key
        
        # 2. Get classifier label using the CNN model
        model_label = classifier(image_path, model)
        
        # 3. Format the classifier label (lowercase, strip whitespace)
        model_label = model_label.lower().strip()
        
        # 4. Retrieve the ground-truth pet image label
        truth = results_dic[key][0]
        
        # 5. Compare labels using 'in' and extend the dictionary list
        if truth in model_label:
            results_dic[key].extend([model_label, 1])
        else:
            results_dic[key].extend([model_label, 0])

# --- Execution Simulation ---
# Setup initial dictionary from TODO 2
results_dic = {
    "Boston_terrier_02259.jpg": ["boston terrier"],
    "beagle_0239.jpg": ["beagle"],
    "fox_squirrel_01.jpg": ["fox squirrel"],
    "gecko_80.jpg": ["gecko"]
}

print("--- Running classify_images() ---")
classify_images("pet_images/", results_dic, "vgg")

print("\\n--- Updated results_dic (Compound Data Structure) ---")
for key in results_dic:
    # results_dic[key][0] -> truth | [1] -> classifier | [2] -> match (1/0)
    print(f"File: {key:25} | Truth: {results_dic[key][0]:15} | Classifier: {results_dic[key][1]:35} | Match: {results_dic[key][2]}")`}
          output={classifyingOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Compound Data Win: Because we used <code>.extend()</code>, our dictionary now tracks multiple variables per image seamlessly. For example, index 0 is the true label, index 1 is the CNN prediction, and index 2 is whether they matched.</span>
        </div>
      </div>

    </div>
  );
}