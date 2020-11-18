import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ArticleCard as ArticleCardComponent, ArticleCardProps} from './ArticleCard';

export default {
	title: 'Components/Article Card',
	component: ArticleCardComponent,
} as Meta;

const ArticleCardTemplate: Story<ArticleCardProps> = (args) => <ArticleCardComponent {...args} />;

export const ArticleCard = ArticleCardTemplate.bind({});
ArticleCard.args = {
    cardInfo: [{
		title: 'Article Title',
		link: '#',
        logo: 'medium'
    }]
}