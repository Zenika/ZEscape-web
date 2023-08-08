import { useState } from 'react';
import { Adventure } from '../types';
import { AdventureFormComponent } from './AdventureForm.component';

export const AdventureNavigationComponent = () => {
  const [adventure, setAdventure] = useState<Adventure>({ id: 0, title: '', description: '', time: '' });
  const [step, setStep] = useState(0);
  return (
    <>{step == 0 && <AdventureFormComponent adventure={adventure} setAdventure={setAdventure} setStep={setStep} />}</>
  );
};
