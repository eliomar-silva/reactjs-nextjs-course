import { Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
