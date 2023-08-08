import { useEffect, useState } from 'react';
import '../../../styles/minigames.css';
import { fetchMiniGames } from '../api';
import { MiniGame } from '../types';
import { Adventure } from '../../adventures/types';

type Props = {
  adventure: Adventure | null;
  onAdventureChange: React.Dispatch<React.SetStateAction<Adventure | null>>;
  onStepChange: React.Dispatch<React.SetStateAction<number>>;
};

export const MiniGameList: React.FC<Props> = ({ adventure, onAdventureChange, onStepChange }) => {
  let [minigamesList, setMinigamesList] = useState<MiniGame[]>([]);

  useEffect(() => {
    fetchMiniGames().then((minigamesList) => setMinigamesList(minigamesList));
  }, []);

  const [isChecked, setisChecked] = useState([false, false, false]);

  function handleSubmit() {
    let minigames: MiniGame[] = [];
    minigamesList.forEach((minigame) => {
      if (isChecked[minigame.id]) {
        minigames.push(minigame);
      }
    });

    onStepChange(2);
    const updatedAdventure = { ...adventure, minigames: minigames } as Adventure;
    onAdventureChange(updatedAdventure);
    console.log(updatedAdventure);
  }

  function handleChange(id: number) {
    let newState = [...isChecked];
    newState[id] = !newState[id];
    setisChecked(newState);
  }

  return (
    <>
      <h2>Choisis tes mini-jeux</h2>
      <div className="list">
        <ul>
          {minigamesList.map((item) => {
            console.log(isChecked);
            return (
              <label>
                <li className="card" key={item.id}>
                  <div className="title">{item.name}</div>
                  <div className="description">{item.description}</div>
                  <div className="checkbox">
                    <input type="checkbox" onChange={() => handleChange(item.id)} />
                  </div>
                </li>
              </label>
            );
          })}
        </ul>
        <button disabled={isChecked.every((el) => el === false)} onClick={handleSubmit}>
          Valider
        </button>
      </div>
    </>
  );
};
