import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Button, Row, Menu, Col, Typography, Input } from 'antd';
import './header.css';

import { Link } from 'react-router-dom';

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
		link: string;
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
		link: string;
	}[];
}

export const Header: React.FC<HeaderProps> = ({ logoInfo, headerLinks }: HeaderProps) => {
	const activeTheme = useContext(ThemeContext);
	const onSearch = (value: any) => console.log(value);
	return (
		<Row justify="start" style={{ background: `${activeTheme.colors.themeBlue}` }}>
			<Col span={3} offset={1}>
				<Typography.Title
					level={3}
					style={{ paddingTop: '13px', color: `${activeTheme.colors.themeWhite}` }}
				>
					{logoInfo.map((logo) =>
						logo.type === 'Text' ? (
							<Link
								to={logo.link}
								style={{
									color: `${activeTheme.colors.themeWhite}`,
								}}
							>
								{logo.title}
							</Link>
						) : (
							<Link to={logo.link}>IMAGE</Link>
						),
					)}
				</Typography.Title>
			</Col>
			<Col span={12}>
				<Input.Search
					placeholder="Search"
					allowClear
					onSearch={onSearch}
					style={{ width: '100%', paddingTop: '13px' }}
				/>
			</Col>
			<Col span={7}>
				<Menu
					mode="horizontal"
					style={{
						textAlign: 'right',
						background: `${activeTheme.colors.themeBlue}`,
						paddingTop: '5px',
						border: '0px solid',
					}}
				>
					{headerLinks.map((header, index) =>
						header.type === 'Default' ? (
							<Menu.Item
								key={index}
								className="menu-item-default"
								style={{ color: `${activeTheme.colors.themeWhite}` }}
							>
								<Link
									to={header.link}
									style={{
										color: `${activeTheme.colors.themeWhite}`,
									}}
								>
									{header.headerTitle}
								</Link>
							</Menu.Item>
						) : header.type === 'Highlight' ? (
							<Menu.Item
								key={index}
								className="menu-item-highlight"
								style={{ color: `${activeTheme.colors.themeWhite}` }}
							>
								<Link
									to={header.link}
									style={{
										color: `${activeTheme.colors.themeWhite}`,
									}}
								>
									{header.headerTitle}
								</Link>
							</Menu.Item>
						) : (
							<Menu.Item key={index} className="menu-item-button">
								<Link to={header.link} className="menu-item-button">
									<Button type="primary" shape="round">
										{header.headerTitle}
									</Button>
								</Link>
							</Menu.Item>
						),
					)}
				</Menu>
			</Col>
		</Row>
	);
};
