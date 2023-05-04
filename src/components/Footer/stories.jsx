import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/nathankimura">Feito com ❤ por Nathan Kimura</a></p>`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
