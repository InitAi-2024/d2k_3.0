declare module 'use-sound' {
  type SoundOptions = {
    volume?: number;
    playbackRate?: number;
    interrupt?: boolean;
    soundEnabled?: boolean;
    preload?: boolean;
    sprite?: Record<string, [number, number]>;
    onload?: () => void;
    onend?: () => void;
    onplay?: () => void;
    onpause?: () => void;
    onstop?: () => void;
  };

  type PlayFunction = (options?: {
    id?: string;
    forceSoundEnabled?: boolean;
    playbackRate?: number;
  }) => void;

  type ExposedData = {
    sound: HTMLAudioElement | null;
    stop: (id?: string) => void;
    pause: (id?: string) => void;
    duration: number | null;
  };

  export default function useSound(
    src: string,
    options?: SoundOptions
  ): [PlayFunction, ExposedData];
} 