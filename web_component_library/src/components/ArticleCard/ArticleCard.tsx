import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Card } from 'antd';
import './articleCard.css';

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

	const LikesInfo = () => {
		return(
			<>
			Likes: 2000
			</>
		)
	}

	const ViewsInfo = () => {
		return(
			<>
			Views: 1000
			</>
		)
	}

	return (
		<Card
        bordered
        hoverable
        extra="Source Logo"
		title="Title Card"
		style={{
			maxWidth: '700px'
		}}
		headStyle={{
			color: `${activeTheme.colors.themeBlack}`,
			fontSize: '1.5rem',
			border: '0px solid'
		}}
		bodyStyle={{

		}}
		actions={[
			<LikesInfo />,
			<ViewsInfo />
		]}
		>
		<Card.Meta 
			description="Article description"
			style={{
				fontWeight: 'bold',
				border: '0px solid'
			}}
		/>
		</Card>
	);
};
