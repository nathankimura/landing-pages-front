import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme'

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link='#target' text='Olá mundo' />);
    expect(screen.getByRole('heading', { name: 'Olá mundo' })).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Olá mundo' });
    expect(link).toHaveAttribute('href', '#target');
    // screen.debug(heading);
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link='#target' text='Olá mundo' srcImg='image.svg' />);
    expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute('src', 'image.svg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link='#target' text='Olá mundo' srcImg='image.svg' />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
