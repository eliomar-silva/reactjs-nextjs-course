import P from 'prop-types';
import React, { useContext, useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O título que contexto',
  body: 'o Body do contexto',
  counter: 0,
};

const reduce = (state, action) => {
  return { ...state };
};

export const Context = React.createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, globalState);
  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

export const H1 = () => {
  const ctx = useContext(Context);
  console.log(ctx);
  return <h1>{ctx.state.title}</h1>;
};
function App() {
  return (
    <AppContext>
      <H1 />
    </AppContext>
  );
}

export default App;
