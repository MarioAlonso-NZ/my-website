import SpaceCanvas from './components/SpaceCanvas';
import AICopilot from './components/AICopilot';

export default function RoadmapPage() {
  return (
    <main className="w-full h-screen bg-[#06080d]">
      <SpaceCanvas />
      <AICopilot />
    </main>
  );
}