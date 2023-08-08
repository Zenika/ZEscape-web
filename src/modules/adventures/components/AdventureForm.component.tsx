import { Adventure } from '../types';
import '../../../styles/form.css';

type Props = {
  adventure: Adventure;
  setAdventure: React.Dispatch<React.SetStateAction<Adventure>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const AdventureFormComponent: React.FC<Props> = ({ adventure, setAdventure, setStep }) => {
  const onUpdateTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const adventureState = {
      ...adventure,
      [event.target.name]: event.target.value,
    };
    setAdventure(adventureState);
  };

  const onUpdateTexareatField = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <input type="text" name="title" placeholder="Titre" value={adventure.title} onChange={onUpdateTextField} />
        <textarea
          name="description"
          rows={10}
          placeholder="Description"
          value={adventure.description}
          onChange={onUpdateTexareatField}
        />
        <input type="time" name="time" placeholder="Titre" value={adventure.time} onChange={onUpdateTextField} />
        <input className="submit" type="submit" value="Valider" />
      </form>
    </>
  );
};
