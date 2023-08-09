import { useState } from 'react';
import { Adventure } from '../types';
import { AdventureFormComponent } from './AdventureForm.component';

export const AdventureNavigationComponent = () => {
  const [, setAdventure] = useState<Adventure>({ id: 0, title: '', description: '', time: '' });
  const [step, setStep] = useState(0);
  return <>{step == 0 && <AdventureFormComponent onAdventureChange={setAdventure} onStepChange={setStep} />}</>;
};
