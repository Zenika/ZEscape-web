import { useEffect } from 'react';
import { fetchAdventures } from '../api';

type Props = { id: number };

export const AdventureListComponent: React.FC<Props> = () => {
  useEffect(() => {
    fetchAdventures().then();
  }, []);

  return <ul></ul>;
};
