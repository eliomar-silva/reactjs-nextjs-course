import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
