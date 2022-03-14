import './App.css';
import Card from './Components/Card';

import { ThemeContex, theme } from './Theme';


function App() {
  return (
    <ThemeContex.Provider value={theme.primary}>
      <Card />
    </ThemeContex.Provider>
  );
}

export default App;
