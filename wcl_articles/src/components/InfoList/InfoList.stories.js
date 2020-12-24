import React from 'react';
import { InfoList } from './InfoList';

const Component = {
  title: ' Components/Card',
  component: InfoList,
};

const Template = (args) => <InfoList {...args}></InfoList>;

export const ArticleInfo = Template.bind({});

ArticleInfo.args = {
  list: [
    {
      id: 'readingTime',
      content: 3,
      suffix: 'min',
    },
    {
      id: 'views',
      content: 120,
      suffix: 'views',
    },
  ],
};

export default Component;
