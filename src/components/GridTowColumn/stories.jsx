import { GridTowColumn } from '.'

export default {
  title: 'GridTowColumn',
  component: GridTowColumn,
  args: {
    title: 'Grid Two columns',
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam doloribus obcaecati ducimus eligendi vero architecto consectetur, laborum nostrum maxime nemo minus placeat illum dolorem molestias est at? Nobis, dolore fuga?`,
    srcImg: 'assets/images/javascript.svg',
  },
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
