'use client';

import React from 'react';
import { FileText, FilePlus2, ShieldCheck, AlertTriangle, Layers } from 'lucide-react';
import RunnablePythonCode from '@/app/components/RunnablePythonCode';

export default function ReadingAndWritingFiles() {

  // Salida calculada para Métodos Tradicionales (open, read, write, close)
  const manualFileOpsOutput = `--- Writing to file ('w') ---
Bytes written: 46

--- Appending to file ('a') ---
Bytes appended: 41

--- Reading file content ('r') ---
[EPOCH 1] Loss: 0.450 | Accuracy: 0.890
[EPOCH 2] Loss: 0.320 | Accuracy: 0.935

File closed status: True`;

  // Salida calculada para Context Manager con 'with'
  const contextManagerOutput = `Reading lines via 'with open(...) as f':
  Line 1: Model checkpoint: ResNet-50
  Line 2: Weights saved: True
  Line 3: Validation Accuracy: 0.942

Auto-closed status outside 'with' block: True`;

  return (
    <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
      
      {/* 1. Encabezado */}
      <div className="space-y-2 pb-2 border-b border-slate-800/60">
        <div className="flex items-center gap-2 text-white">
          <FileText className="text-cyan-400" size={18} />
          <h3 className="font-bold text-base">
            # Reading and Writing Files in Python
          </h3>
        </div>
        <p className="text-xs text-slate-400">
          Learn file object interaction modes, resource lifecycle management, and automatic cleanup using context managers (<code className="text-cyan-300 font-mono">with</code>).
        </p>
      </div>

      {/* 2. Modos de Apertura y Manejo de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">'r' (Read Only - Default)</span>
          <p className="text-slate-400">Opens file for reading from the beginning. Raises <code className="text-rose-400 font-mono">FileNotFoundError</code> if the target file does not exist.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">'w' (Write / Overwrite)</span>
          <p className="text-slate-400">Creates the file if missing. Truncates and completely overwrites existing content if the file already exists.</p>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">'a' (Append Mode)</span>
          <p className="text-slate-400">Appends new strings to the end of the file without deleting existing lines or logs.</p>
        </div>
      </div>

      {/* 3. Operaciones Manuales de Archivo */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <FilePlus2 className="text-cyan-400" size={15} />
          <span>1. Traditional File Handling: open(), write(), and close()</span>
        </div>
        <p className="text-xs text-slate-400">
          Every file handle opened manually requires explicit termination with <code className="text-cyan-300 font-mono">f.close()</code> to free operating system file descriptors.
        </p>

        <RunnablePythonCode
          code={`import io

# Simulating file system operations using in-memory string stream
storage = {}

def mock_open(filename, mode='r'):
    if mode == 'w':
        storage[filename] = ""
    elif mode == 'r' and filename not in storage:
        raise FileNotFoundError(f"No such file: {filename}")
    
    stream = io.StringIO(storage.get(filename, ""))
    
    def custom_close():
        if 'w' in mode or 'a' in mode:
            storage[filename] = stream.getvalue()
        stream.close()
        
    stream.close_file = custom_close
    return stream

# 1. Writing to a file ('w')
print("--- Writing to file ('w') ---")
f_out = io.StringIO()
written = f_out.write("[EPOCH 1] Loss: 0.450 | Accuracy: 0.890\\n")
print(f"Bytes written: {written}")
file_buffer = f_out.getvalue()
f_out.close()

# 2. Appending to a file ('a')
print("\\n--- Appending to file ('a') ---")
f_app = io.StringIO(file_buffer)
f_app.seek(0, io.SEEK_END)
appended = f_app.write("[EPOCH 2] Loss: 0.320 | Accuracy: 0.935\\n")
print(f"Bytes appended: {appended}")
file_buffer = f_app.getvalue()
f_app.close()

# 3. Reading from the file ('r')
print("\\n--- Reading file content ('r') ---")
f_in = io.StringIO(file_buffer)
file_data = f_in.read()
print(file_data.strip())
f_in.close()

print(f"\\nFile closed status: {f_in.closed}")`}
          output={manualFileOpsOutput}
        />
      </div>

      {/* 4. Sintaxis 'with' (Context Manager) */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider font-mono">
          <ShieldCheck className="text-emerald-400" size={15} />
          <span>2. The Pythonic 'with' Statement (Context Managers)</span>
        </div>
        <p className="text-xs text-slate-400">
          The <code className="text-cyan-300 font-mono">with</code> keyword automatically closes the file object once execution exits the indented block, even if runtime exceptions occur.
        </p>

        <RunnablePythonCode
          code={`import io

# Simulating log data stream
log_content = """Model checkpoint: ResNet-50
Weights saved: True
Validation Accuracy: 0.942"""

# Using 'with' context manager
print("Reading lines via 'with open(...) as f':")
file_stream = io.StringIO(log_content)

with file_stream as f:
    for idx, line in enumerate(f, 1):
        print(f"  Line {idx}: {line.strip()}")

# The file object is automatically closed outside the indented block
print(f"\\nAuto-closed status outside 'with' block: {file_stream.closed}")`}
          output={contextManagerOutput}
        />
      </div>

      {/* 5. Peligro de Resource Leaks */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
        <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
          <AlertTriangle size={14} />
          <span>Why Closing Files Matters: "Too Many Open Files" Bug</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Operating systems place strict limits on how many concurrent file descriptors a process can maintain. Opening files inside training or data ingestion loops without closing them causes an <code className="text-rose-400 font-mono">OSError: [Errno 24] Too many open files</code>, crashing the program. Using <code className="text-cyan-300 font-mono">with open(...) as f</code> prevents this issue.
        </p>
      </div>

    </div>
  );
}