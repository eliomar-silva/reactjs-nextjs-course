import { useContext } from 'react';
import { GlobalContext } from '../contexts/AppContext/index';
const H1 = () => {
  const {
    state: { title, counter },
  } = useContext(GlobalContext);

  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

export default H1;
