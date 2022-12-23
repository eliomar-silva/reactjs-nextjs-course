import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    expect(screen.getByText('children')).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        children
      </div>
    `);
  });
});
