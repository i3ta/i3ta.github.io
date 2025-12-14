import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

const RECORDING_DURATION_MS = 20000; // Record for 20 seconds

export const Recorder = () => {
  const { gl } = useThree();
  const capturerRef = useRef(null);
  const isRecordingRef = useRef(false);

  useEffect(() => {
    if (!gl.domElement) return;

    // NOTE: We rely on the setTimeout for time limit instead of timeLimit option
    // to ensure the cleanup logic runs reliably.
    const capturer = new CCapture({
      format: 'webm',
      framerate: 60,
      verbose: true,
    });

    capturerRef.current = capturer;
    isRecordingRef.current = true;

    capturer.start();
    console.log('CCapture initialized and recording started.');

    const timeoutId = setTimeout(() => {
      if (capturerRef.current) {
        capturerRef.current.stop();
        capturerRef.current.save();
        capturerRef.current = null;
        isRecordingRef.current = false;
        console.log(
          `Recording stopped and saved after ${
            RECORDING_DURATION_MS / 1000
          } seconds.`
        );
      }
    }, RECORDING_DURATION_MS);

    return () => {
      clearTimeout(timeoutId);
      if (capturerRef.current) {
        capturerRef.current.stop();
        capturerRef.current = null;
        isRecordingRef.current = false;
        console.log('Recording cleaned up on unmount.');
      }
    };
  }, [gl.domElement]);

  useFrame(() => {
    if (isRecordingRef.current && capturerRef.current) {
      capturerRef.current.capture(gl.domElement);
    }
  });

  return null;
};
