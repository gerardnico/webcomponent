import React from 'react';

import { Provider } from 'react-redux';
import store from './lib/redux';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Library</h1>
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
