import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;
