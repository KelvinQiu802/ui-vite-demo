import React from 'react';

// @ts-expect-error
import { Button } from '../dist/ui-vite.js';

function App() {
  return (
    <div className='App'>
      <Button text='Hello World' />
    </div>
  );
}

export default App;
