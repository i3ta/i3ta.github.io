import { RefObject, useEffect, useRef, useState } from 'react';

const videoSources = [
  { quality: 'high', src: 'high-res.mp4', minBandwidth: 5000000 },
  { quality: 'mid', src: 'mid-res.mp4', minBandwidth: 1500000 },
  { quality: 'low', src: 'low-res.mp4', minBandwidth: 0 },
];

export const DNABackground = ({
  ref,
  setLoaded,
}: {
  ref?: RefObject<HTMLDivElement> | undefined;
  setLoaded: (v: boolean) => any;
}) => {
  const [selectedSource, setSelectedSource] = useState('/low-res.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const selectVideoSource = () => {
      const connection =
        (navigator as any).connection ||
        (navigator as any).mozConnection ||
        (navigator as any).webkitConnection;

      let effectiveBandwidth = 0;

      if (connection && connection.downlink) {
        effectiveBandwidth = connection.downlink * 1000000;
      } else {
        console.warn('Network Information API not available');
        effectiveBandwidth = 2000000; // default to 2 Mbps
      }

      const sortedSources = [...videoSources].sort(
        (a, b) => b.minBandwidth - a.minBandwidth
      );

      let bestSource = sortedSources[sortedSources.length - 1].src;

      for (const source of sortedSources) {
        if (effectiveBandwidth >= source.minBandwidth) {
          bestSource = source.src;
          break;
        }
      }

      setSelectedSource(bestSource);
      console.log(
        `Network speed estimated at ${
          connection?.downlink ?? 'N/A'
        } Mbps. Loading: ${bestSource}`
      );
    };

    selectVideoSource();
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedData = () => {
      setLoaded(true);
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
  }, [selectedSource]);

  return (
    <div className="absolute !w-screen !h-screen top-0 right-0" ref={ref}>
      <video
        key={selectedSource}
        id="dna-background"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/dna-background-poster.jpg"
        ref={videoRef}
        src={selectedSource}
      />
    </div>
  );
};
