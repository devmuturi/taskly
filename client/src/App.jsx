import { useState } from 'react';

function App() {
  const [visibility, setVisibility] = useState(true);

  const toggleDiv = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      {visibility && (<div id='myDiv'>Hello World!</div>)}

      <button onClick={toggleDiv}>Toggle Div</button>
    </div>
  )
}

export default App;