import { Story } from '@storybook/react/types-6-0';
import { NavLinks, NavLinksProps } from '.';
import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template: Story<NavLinksProps> = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
