import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
  const [state] = useCounterContext();

  return <h1 style={{ fontSize: '80px' }}>{state.counter}</h1>;
};
