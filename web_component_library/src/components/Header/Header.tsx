import React from 'react';

import { Button, Row, Menu, Col, Typography } from 'antd';
import './header.css';

export interface HeaderProps {
	/**
	 * Header Links
     * 
     * Type of header link
     * Default: it's a simple link on header
     * Highligh: it's a highlighted link on header
     * Button: transform a link in a button
	
	 */
	headerLinks: {
		headerTitle: string;
		type: 'Default' | 'Highlight' | 'Button';
		//link: string;
	}[];
	/**
	 * Header Logo
     * 
     * Type of logo
     * Text: it's a simple text
     * Image: it's a image
     * AltText: ref text of this logo
     * Url: url for logo
	
	 */
	logoInfo: {
		type: 'Text' | ' Image';
		title: string;
		altText: string;
		//link: string;
	}[];
}

export const Header: React.FC<HeaderProps> = ({ logoInfo, headerLinks }: HeaderProps) => {
	return (
		<Row justify="start" className="header-background">
			<Col span={8} offset={1}>
				<Typography.Title level={3} className="logo-title">
					{logoInfo.map((logo) => (logo.type === 'Text' ? logo.title : 'IMAGE'))}
				</Typography.Title>
			</Col>
			<Col span={14}>
				<Menu mode="horizontal" className="menu-header">
					{headerLinks.map((header, index) =>
						header.type === 'Default' ? (
							<Menu.Item key={index}>{header.headerTitle}</Menu.Item>
						) : header.type === 'Highlight' ? (
							<Menu.Item key={index} className="menu-header-sign-in">
								{header.headerTitle}
							</Menu.Item>
						) : (
							<Menu.Item key={index} className="menu-header-item-button">
								<Button type="primary" shape="round">
									{header.headerTitle}
								</Button>
							</Menu.Item>
						),
					)}
				</Menu>
			</Col>
		</Row>
	);
};
