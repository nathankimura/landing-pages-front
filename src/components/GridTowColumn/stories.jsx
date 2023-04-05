import { GridTowColumn } from '.'
import mock from './mock'

export default {
  title: 'GridTowColumn',
  component: GridTowColumn,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTowColumn {...args} />
    </div>
  );
};
