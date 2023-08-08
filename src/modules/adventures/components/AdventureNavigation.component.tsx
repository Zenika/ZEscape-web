import { useState } from 'react';
import { Adventure } from '../types';
import { MiniGameList } from '../../minigames/components/MiniGameList.component';

export const AdventureNavigationComponent = () => {
  const [adventure, setAdventure] = useState<Adventure | null>({ id: 0, title: '', description: '', time: '' });
  const [step, setStep] = useState(1);
  return (
    <>{step == 1 && <MiniGameList adventure={adventure} onAdventureChange={setAdventure} onStepChange={setStep} />}</>
  );
};
