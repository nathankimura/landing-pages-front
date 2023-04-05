import { screen } from '@testing-library/react';
import { GridTowColumn } from '.';
import { renderTheme } from '../../styles/render-theme'

describe('<GridTowColumn />', () => {
  it('should render', () => {
    renderTheme(<GridTowColumn>Children</GridTowColumn>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
