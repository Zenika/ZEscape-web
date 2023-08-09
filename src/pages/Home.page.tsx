import { AdventureNavigationComponent } from '../modules/adventures/components/AdventureNavigation.component';
import '../styles/index.css';

export const Home = () => {
  return (
    <main>
      <h1>Crée ton aventure !</h1>
      <AdventureNavigationComponent />
    </main>
  );
};
