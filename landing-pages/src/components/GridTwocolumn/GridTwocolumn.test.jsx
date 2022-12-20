import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { GridTwocolumn } from '.';
import mock from './mock';

describe('<GridTwocolumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwocolumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
