import { useContext } from 'react';
import { GlobalContext } from '../contexts/AppContext';

const P = () => {
  const {
    state: { body, counter },
    setState,
  } = useContext(GlobalContext);
  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body}
    </p>
  );
};

export default P;
