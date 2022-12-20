import { GridTwocolumn } from '.';
import mock from './mock';
export default {
  title: 'GridTwocolumn',
  component: GridTwocolumn,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwocolumn {...args} />
    </div>
  );
};
