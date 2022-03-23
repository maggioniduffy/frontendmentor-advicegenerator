import React, { useEffect, useState } from 'react';
import './App.css';

import getAdvice from './api/adivices';
import { AdviceCard } from './components';

function App() {
  const [ advice, setAdvice ] = useState<string>()
  const [ id, setId ] = useState<string>()

  const fetchAdvice = async () => {
    const response = await getAdvice();
    setAdvice(response.advice)
    setId(response.id)
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      {(id && advice) && <AdviceCard id={id} advice={advice} onPress={fetchAdvice} />}
    </div>
  );
}

export default App;
