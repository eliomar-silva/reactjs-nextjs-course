import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Footer footerHtml={'<h1>Olá</h1>'}></Footer>,
    );
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 2.0rem;
      }

      .c2 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      .c0 {
        text-align: Center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c3 {
        font-size: 2.0rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      <div>
        <footer
          class="c0"
        >
          <section
            class="c1 c2"
          >
            <div
              class="c3 c4"
            >
              <h1>
                Olá
              </h1>
            </div>
          </section>
        </footer>
      </div>
    `);
  });
});
