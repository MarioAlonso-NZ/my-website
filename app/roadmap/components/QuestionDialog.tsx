// components/QuestionDialog.tsx
"use client";

export default function QuestionDialog({ question, onClose }: { question: string, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 border-2 border-emerald-500 rounded-xl p-8 max-w-lg w-full shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-in fade-in zoom-in duration-300">
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl">👽</span>
          <div>
            <h2 className="text-emerald-400 font-bold text-xl">Alien Transmission</h2>
            <p className="text-gray-400 text-sm">Answer correctly to defend your ship!</p>
          </div>
        </div>

        <p className="text-white text-lg mb-6 leading-relaxed">
          "{question}"
        </p>

        <textarea 
          className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-emerald-500 outline-none mb-4 h-24"
          placeholder="Type your answer here..."
        />

        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Skip
          </button>
          <button 
            onClick={onClose} // In the future, check the answer here!
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition-colors"
          >
            Submit Answer
          </button>
        </div>

      </div>
    </div>
  );
}