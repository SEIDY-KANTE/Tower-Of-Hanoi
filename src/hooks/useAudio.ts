import useSound from "use-sound";
import moveSound from "../assets/sound/game-sound.mp3";

export const useAudio = (volume = 0.1) => {
  const [playSound, { stop: stopSound }] = useSound(moveSound, {
    volume,
  });
  const play = () => playSound();
  const stop = () => stopSound();

  return { play, stop };
};
