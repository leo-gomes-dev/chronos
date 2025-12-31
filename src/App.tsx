import './styles/global.css';
import './styles/theme.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>
        Chronos{' '}
        <button>
          <TimerIcon />;
        </button>
      </Heading>
      <p>A time tracking tool for developers</p>
    </>
  );
}

export default App;
