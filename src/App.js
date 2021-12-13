import { createContext } from 'react';
import ComponentB from './ComponentB';

export const SampleConext = createContext()

function App() {
  const text = "Text from ComponentA"
  return (
      <SampleConext.Provider value={text}>
        <h1>Here is A.</h1>
        <ComponentB />
      </SampleConext.Provider>
  );
}

export default App;
