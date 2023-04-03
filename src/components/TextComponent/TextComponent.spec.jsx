import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render the component with the correct text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render the text with correct size', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const text = screen.getByText('Children');
    expect(text).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <p
        class="c0"
      >
        Children
      </p>
    `);
  });
});
