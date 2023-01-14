import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from '.';

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
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
