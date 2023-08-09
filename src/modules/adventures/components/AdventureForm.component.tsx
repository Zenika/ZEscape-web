import { Adventure } from '../types';
import '../../../styles/form.css';
import { useState } from 'react';

type Props = {
  onAdventureChange: React.Dispatch<React.SetStateAction<Adventure>>;
  onStepChange: React.Dispatch<React.SetStateAction<number>>;
};

export const AdventureFormComponent: React.FC<Props> = ({ onAdventureChange, onStepChange }) => {
  const [updatedAdventure, setUpdatedAdventure] = useState<Adventure>({ id: 0, title: '', description: '', time: '' });

  const onUpdateTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedAdventure({ ...updatedAdventure, [event.target.name]: event.target.value });
  };

  const onUpdateTextAreaField = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedAdventure({ ...updatedAdventure, [event.target.name]: event.target.value });
  };

  function handleSubmit() {
    console.log(updatedAdventure);
    onAdventureChange(updatedAdventure);
    onStepChange(1);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titre"
          value={updatedAdventure.title}
          onChange={onUpdateTextField}
        />
        <textarea
          name="description"
          rows={10}
          placeholder="Description"
          value={updatedAdventure.description}
          onChange={onUpdateTextAreaField}
        />
        <input type="time" name="time" value={updatedAdventure.time} onChange={onUpdateTextField} />
        <input className="submit" type="submit" value="Valider" />
      </form>
    </>
  );
};
