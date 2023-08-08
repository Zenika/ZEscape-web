import { Adventure } from '../types';
import '../../../styles/form.css';

type Props = {
  adventure: Adventure;
  setAdventure: React.Dispatch<React.SetStateAction<Adventure>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const AdventureFormComponent: React.FC<Props> = ({ adventure, setAdventure, setStep }) => {
  const onUpdateField = (event: { target: { name: any; value: any } }) => {
    const adventureState = {
      ...adventure,
      [event.target.name]: event.target.value,
    };
    setAdventure(adventureState);
  };

  function handleSubmit() {
    setStep(1);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Titre" value={adventure.title} onChange={onUpdateField} />
        <textarea name="description" placeholder="Description" value={adventure.description} onChange={onUpdateField} />
        <input type="time" name="time" placeholder="Titre" value={adventure.time} onChange={onUpdateField} />
        <input className="submit" type="submit" value="Valider" />
      </form>
    </>
  );
};
