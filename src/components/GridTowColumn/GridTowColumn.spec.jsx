import { screen } from '@testing-library/react';
import { GridTowColumn } from '.';
import { renderTheme } from '../../styles/render-theme'

import mock from './mock';

describe('<GridTowColumn />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridTowColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
