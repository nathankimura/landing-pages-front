import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/render-theme'

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>);
    expect(screen.getByRole('heading', { name: 'Children' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
