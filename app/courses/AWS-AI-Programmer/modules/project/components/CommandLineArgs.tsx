'use client';

import React from 'react';
import { Terminal, Settings2, ListTree, Code2, CheckCircle2 } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function CommandLineArgs() {

  // Salida calculada simulando la ejecución del bloque de argparse
  const argparseOutput = `--- 1. Running with NO command line arguments (Defaults) ---
$ python check_images.py
Directory: pet_images/
Architecture: vgg
Dogfile: dognames.txt

--- 2. Running with custom command line arguments ---
$ python check_images.py --dir uploaded_pets/ --arch resnet
Directory: uploaded_pets/
Architecture: resnet
Dogfile: dognames.txt`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            #TODO: 1 - Command Line Arguments (argparse)
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Make your programs flexible by allowing external inputs at runtime. Instead of hardcoding paths and models, use the standard <code className="text-cyan-300 font-mono">argparse</code> module to parse terminal inputs.
        </p>
      </div>

      {/* 2. Conceptos Clave de Argparse */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">1. ArgumentParser</span>
          <p className="text-slate-400 font-sans">
            Creates the baseline parser object: <br/>
            <code className="text-slate-300 font-mono">parser = argparse.ArgumentParser()</code>
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">2. add_argument</span>
          <p className="text-slate-400 font-sans">
            Defines expected variables, types, and defaults (e.g., <code className="text-slate-300 font-mono">--dir</code>, <code className="text-slate-300 font-mono">--arch</code>).
          </p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">3. parse_args</span>
          <p className="text-slate-400 font-sans">
            Collects the inputs into a single object accessible via dot notation (<code className="text-slate-300 font-mono">in_args.dir</code>).
          </p>
        </div>
      </div>

      {/* 3. Implementación del Proyecto */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <Code2 className="text-cyan-400" size={15} />
          <span>Python Implementation: get_input_args.py</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          This simulates the exact code for <code className="text-cyan-300 font-mono">#TODO: 1</code>. We pass simulated lists into <code className="text-cyan-300 font-mono">parse_args()</code> to mimic the terminal input for this interactive browser environment.
        </p>

        <RunnablePythonCode
          code={`import argparse

def get_input_args(simulated_terminal_input=None):
    """
    Retrieves and parses the 3 command line arguments provided by the user when
    they run the program from a terminal window.
    """
    # Create Parse using ArgumentParser
    parser = argparse.ArgumentParser(description="Classify pet images using a pre-trained CNN model.")
    
    # Argument 1: Image Directory
    parser.add_argument('--dir', type=str, default='pet_images/', 
                        help='path to the folder of pet images')
    
    # Argument 2: CNN Model Architecture
    parser.add_argument('--arch', type=str, default='vgg', 
                        help='CNN model architecture to use (resnet, alexnet, or vgg)')
    
    # Argument 3: Text file with valid dog names
    parser.add_argument('--dogfile', type=str, default='dognames.txt', 
                        help='text file containing valid dognames')
    
    # Return parsed argument collection
    if simulated_terminal_input is not None:
        return parser.parse_args(simulated_terminal_input)
    return parser.parse_args()

# --- Simulation 1: No arguments (Defaults) ---
print("--- 1. Running with NO command line arguments (Defaults) ---")
print("$ python check_images.py")
in_args_default = get_input_args([])
print(f"Directory: {in_args_default.dir}")
print(f"Architecture: {in_args_default.arch}")
print(f"Dogfile: {in_args_default.dogfile}\\n")

# --- Simulation 2: Custom arguments ---
print("--- 2. Running with custom command line arguments ---")
print("$ python check_images.py --dir uploaded_pets/ --arch resnet")
in_args_custom = get_input_args(['--dir', 'uploaded_pets/', '--arch', 'resnet'])
print(f"Directory: {in_args_custom.dir}")
print(f"Architecture: {in_args_custom.arch}")
print(f"Dogfile: {in_args_custom.dogfile}")`}
          output={argparseOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
          <span>Note: In your actual project workspace, you will simply use <code className="text-emerald-300">return parser.parse_args()</code> without passing any lists inside the parentheses, as Python will automatically read the terminal inputs.</span>
        </div>
      </div>

    </div>
  );
}