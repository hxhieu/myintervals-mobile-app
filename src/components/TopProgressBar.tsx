import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Bar as ProgressBar } from 'react-native-progress';

interface Props {
  interval?: number;
  step?: number;
}

interface GlobalLoaderHook {
  active?: boolean;
  setActiveLoader: (active: boolean) => void;
}

const topProgressBarState = atom<boolean>(false);

const useTopProgressBar = (): GlobalLoaderHook => {
  const [active, setActiveLoader] = useAtom(topProgressBarState);
  return {
    active,
    setActiveLoader,
  };
};

let timer: any;

const TopProgressBar = ({ interval, step }: Props) => {
  const [show, setShow] = useState<boolean>();
  const [progress, setProgress] = useState<number>(0);
  const { active } = useTopProgressBar();

  useEffect(() => {
    if (active) {
      setShow(true);
      if (timer) {
        clearInterval(timer);
      }
      let runningProcess = 0;
      timer = setInterval(() => {
        runningProcess += step || 0.1;
        if (runningProcess >= 1) {
          clearInterval(timer);
        }
        setProgress(runningProcess);
      }, interval || 100);
    } else {
      setProgress(1);
      setTimeout(() => {
        setProgress(0);
        setShow(false);
      }, 1000);
    }
  }, [active]);

  return (
    <ProgressBar
      width={null}
      borderRadius={0}
      borderWidth={0}
      progress={progress}
      height={3}
      color={show ? '#007bed' : 'black'}
      unfilledColor={show ? 'white' : 'black'}
    />
  );
};

export { TopProgressBar, useTopProgressBar };
