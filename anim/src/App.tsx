import { useRef } from 'react';
import { DNABackground } from './dnaBackground';

function App() {
  const dnaRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="fixed h-screen w-screen -z-10 overflow-hidden border border-black shadow-black !shadow-lg">
      <div className="fixed top-0 h-screen w-screen bg-gradient-to-br from-neutral-900 to-neutral-950 -z-20" />
      <DNABackground cameraAngle={2.8} ref={dnaRef} />
    </div>
  );
}

export default App;
