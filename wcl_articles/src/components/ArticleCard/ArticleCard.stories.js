import React from 'react';

import { ArticleCard } from './ArticleCard';

const CardConfig = {
  title: 'Example/Card',
  component: ArticleCard,
};

const Template = (args) => <ArticleCard {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Card Small',
};

export default CardConfig;
