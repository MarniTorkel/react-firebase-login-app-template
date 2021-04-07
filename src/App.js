import React from 'react';
import { Routes } from './Routes';
import { useUsers } from './auth';

function App() {
  const { isLoading, user } = useUsers();

  return (
    <div className="App">
      <Routes isLoading={isLoading} user={user} />
    </div>
  );
}

export default App;