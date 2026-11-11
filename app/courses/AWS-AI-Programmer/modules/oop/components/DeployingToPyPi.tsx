'use client';

import React from 'react';
import { CloudUpload, PackageCheck, ShieldAlert, TerminalSquare, CheckCircle2, Lock } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function DeployingToPyPi() {

  // Salida calculada simulando la compilación y subida del paquete en la terminal
  const deploymentSimulationOutput = `--- 1. Building Distributions (sdist & bdist_wheel) ---
$ python3 setup.py sdist bdist_wheel
running sdist
running egg_info
writing distributions.egg-info/PKG-INFO
creating dist
Creating tar archive
running bdist_wheel
installing to build/bdist.linux-x86_64/wheel
creating 'dist/distributions-0.1-py3-none-any.whl' and adding 'build/bdist.linux-x86_64/wheel' to it
Done.

--- 2. Uploading to Test PyPi via Twine ---
$ twine upload --repository-url https://test.pypi.org/legacy/ dist/*
Enter your username: __token__
Enter your password: 
Uploading distributions-0.1-py3-none-any.whl
100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8.5/8.5 kB • 00:00 • 3.2 MB/s
Uploading distributions-0.1.tar.gz
100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 7.1/7.1 kB • 00:00 • 2.8 MB/s

View at:
https://test.pypi.org/project/distributions/0.1/`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <CloudUpload className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Deploying Packages to PyPi: Source Archives & Wheels
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Learn how to package your object-oriented AI code into modern built distributions and securely publish them to the Python Package Index (PyPi) using Twine and API Tokens.
        </p>
      </div>

      {/* 2. Formatos de Distribución: tar.gz vs .whl */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Source Archive (sdist) */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-semibold font-mono text-xs">
            <PackageCheck size={16} />
            <span>Source Archive (.tar.gz)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Created using the <code className="text-slate-300 font-mono">sdist</code> command. It contains the raw files needed to compile and install a Python package. When users install this, their machine must execute the setup instructions to build the package locally.
          </p>
        </div>

        {/* Built Distribution (bdist_wheel) */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold font-mono text-xs">
            <CheckCircle2 size={16} />
            <span>Built Distribution (.whl)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Created using the <code className="text-slate-300 font-mono">bdist_wheel</code> command. A wheel is a newer installation format that only needs to be copied to the proper directory. It bypasses the compilation step, making <code className="text-emerald-300 font-mono">pip install</code> significantly faster.
          </p>
        </div>

      </div>

      {/* 3. Seguridad y API Tokens */}
      <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-semibold font-mono text-xs">
          <Lock size={16} />
          <span>Security Best Practice: Using API Tokens</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed font-sans">
          Instead of using your account password to upload packages via Twine, you should generate an API token. This limits access specifically to uploading packages and protects your main account. When Twine prompts for credentials:
        </p>
        <ul className="list-disc list-inside text-xs text-slate-300 font-mono space-y-1 ml-2">
          <li>Username: <code className="text-cyan-300">__token__</code></li>
          <li>Password: <code className="text-cyan-300">pypi-your-generated-token-string</code></li>
        </ul>
      </div>

      {/* 4. Simulación de Comandos de Terminal */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <TerminalSquare className="text-cyan-400" size={15} />
          <span>Terminal Execution: Build and Upload Pipeline</span>
        </div>
        <p className="text-xs text-slate-400 mb-2 font-sans">
          Run these commands in the directory containing your <code className="text-cyan-300 font-mono">setup.py</code> file to generate both the source archive and the wheel, then upload them to Test PyPi.
        </p>

        <RunnablePythonCode
          code={`import os

# Simulating standard bash terminal commands for package deployment
print("--- 1. Building Distributions (sdist & bdist_wheel) ---")
print("$ python3 setup.py sdist bdist_wheel")
print("running sdist\\nrunning egg_info\\nwriting distributions.egg-info/PKG-INFO")
print("creating dist\\nCreating tar archive")
print("running bdist_wheel\\ninstalling to build/bdist.linux-x86_64/wheel")
print("creating 'dist/distributions-0.1-py3-none-any.whl' and adding 'build/bdist.linux-x86_64/wheel' to it")
print("Done.\\n")

print("--- 2. Uploading to Test PyPi via Twine ---")
print("$ twine upload --repository-url https://test.pypi.org/legacy/ dist/*")
print("Enter your username: __token__")
print("Enter your password: ")
print("Uploading distributions-0.1-py3-none-any.whl")
print("100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8.5/8.5 kB • 00:00 • 3.2 MB/s")
print("Uploading distributions-0.1.tar.gz")
print("100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 7.1/7.1 kB • 00:00 • 2.8 MB/s\\n")

print("View at:\\nhttps://test.pypi.org/project/distributions/0.1/")`}
          output={deploymentSimulationOutput}
        />

        <div className="flex items-center gap-2 p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono mt-3">
          <ShieldAlert size={16} className="shrink-0 text-cyan-400" />
          <span>Note on Repositories: test.pypi.org and pypi.org are entirely separate databases. You must register independent accounts for each. Always test your package deployments on Test PyPi before publishing to the main repository.</span>
        </div>
      </div>

    </div>
  );
}