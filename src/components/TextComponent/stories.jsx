import { TextComponent } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Cumque est voluptate aperiam dignissimos nulla,
     nihil itaque illo magnam sed iusto quae nisi suscipit
     commodi quam accusamus possimus velit voluptas tenetur.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
