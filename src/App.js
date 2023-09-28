import { Analytics } from '@vercel/analytics/react';
import { Game } from './components/Game';
import { StApp, StHeader, StTitle } from './styled-ui';


const App = () => {

  return (
    <>
      <StApp>
        <StHeader>
          <StTitle><a href='/'>BattleShip v0.1a</a></StTitle>
        </StHeader>
        <Game />
      </StApp>
      <Analytics />
    </>
  );
}

export default App;
