import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Card } from 'antd';

export interface ArticleCardProps {
	/*
	 * Card Props
	 */
	cardInfo: {
		title: string;
		link: string;
		logo: string;
	}[];
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ ...props }: ArticleCardProps) => {
	const activeTheme = useContext(ThemeContext);
	return (
		<Card
        bordered
        hoverable
        extra="Test"
        title="Title Card"
		>
		</Card>
	);
};
