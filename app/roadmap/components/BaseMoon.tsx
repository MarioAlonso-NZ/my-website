export default function BaseMoon({ style, isCompleted, onClick }: { style: any, isCompleted: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      // Add suppressHydrationWarning here
      suppressHydrationWarning={true}
      className={`absolute w-8 h-8 rounded-full cursor-pointer pointer-events-auto transition-all z-20 ${
        isCompleted 
          ? 'bg-blue-500 shadow-[0_0_15px_#3b82f6] border-none scale-110' 
          : 'bg-gray-800 border border-gray-500 hover:scale-110'
      }`}
      style={style}
    />
  );
}