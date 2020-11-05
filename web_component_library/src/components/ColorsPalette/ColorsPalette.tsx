import React from 'react';

import { Card } from 'antd';
import './colorsPalette.css';

export interface ColorsPaletteProps {
	/**
	 * Colors Palette
	 */
	color: string;
}

export const ColorsPalette: React.FC<ColorsPaletteProps> = ({ color }: ColorsPaletteProps) => {
	return (
		<Card title="Colors Palette" bordered={false}>
			<Card.Grid className="blue-1">blue-1 #2f54eb</Card.Grid>
            <Card.Grid className="blue-2">blue-2 #adc6ff</Card.Grid>
            <Card.Grid className="blue-3">blue-3 #d6e4ff</Card.Grid>
            <Card.Grid className="black">black-1 #000000</Card.Grid>
            <Card.Grid className="gray-1">gray-1 #595959</Card.Grid>
            <Card.Grid className="gray-2">gray-2 #f5f5f5</Card.Grid>
    	</Card>
	);
};
