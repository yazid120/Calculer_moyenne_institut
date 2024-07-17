import React, { useReducer } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { routes } from './routes'

interface State {
  routes: typeof routes;
}

type Action = { type: 'SET_ROUTES'; payload: typeof routes };

const initialState: State = {
  routes,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_ROUTES':
      return { ...state, routes: action.payload };
    default:
      return state;
  }
};

const RoutesComponent = () => {
  const element = useRoutes(routes);
  return element;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthProvider>
      <Router>
        <RoutesComponent />
      </Router>
    </AuthProvider>
  );
};

export default App;