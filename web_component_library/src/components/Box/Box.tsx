import React from 'react';

import { Card } from 'antd';
import { BoxTestComponent } from './styles';

export interface BoxTestProps {
	/**
	 * Colors Palette
	 */
	label?: string;
	/**
	 * Colors Palette
	 */
	backgroundColor?: string;
}

export const BoxTest: React.FC<BoxTestProps> = ({ backgroundColor, label }: BoxTestProps) => {
	return (
		<Card title="Card Test" bordered={false}>
			<BoxTestComponent backgroundColor={backgroundColor}>{label}</BoxTestComponent>
		</Card>
	);
};
