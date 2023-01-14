import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Maxime repellat nulla delectus quia quas, debitis culpa magnam
     veniam porro exercitationem ipsa rem aliquam ex recusandae est
     sequi, voluptatum iste! Soluta!`,
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
