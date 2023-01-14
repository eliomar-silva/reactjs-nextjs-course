import { Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quod
          velit libero culpa doloremque sint voluptate illo. Sapiente tempora,
          quibusdam in vero reprehenderit inventore aperiam consectetur, facere
          laudantium quo dicta?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
