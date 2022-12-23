import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should rede home', () => {
    renderTheme(<Home />);
  });
  it('should do something', () => {
    expect(1).toBe(1);
  });
});
