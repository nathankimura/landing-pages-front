import { SectionBackground } from '.'
import { SectionContainer } from '../SectionContainer'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackGround</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laborum ducimus quo a! Veritatis ad earum qui quisquam. Voluptatibus soluta dolore perspiciatis quos rem aperiam cum illo fugit ipsa est.</p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
