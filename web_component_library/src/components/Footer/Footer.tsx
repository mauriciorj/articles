import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { Row, Col, List } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import './footer.css';

import { Link } from 'react-router-dom';

export interface FooterProps {
	/**
	 * Footer Sessions and Respective Links
	 */
	footerLinks: {
		title: string;
		type: string;
		subTitle?: { name: string; link: string }[];
		social?: string[];
	}[];
	/**
	 * Copyright
	 */
	copyrightLabel: string;
}

export const Footer: React.FC<FooterProps> = ({ footerLinks, copyrightLabel }: FooterProps) => {
	const activeTheme = useContext(ThemeContext);
	return (
		<>
			<Row style={{ background: `${activeTheme.colors.themeBlue}` }}>
				<Col offset={1}></Col>
				{footerLinks.map((footer, index) => (
					<Col offset={1} span={5}>
						<List
							header={<strong>{footer.title}</strong>}
							size="small"
							bordered={false}
							key={index}
						>
							{footer.type !== 'social' &&
								footer.subTitle &&
								footer.subTitle.map((subT) => (
									<List.Item
										className="footer-list-no-border"
										style={{
											border: '0px transparent',
											maxHeight: '30px',
										}}
									>
										<Link
											to={subT.link}
											style={{
												color: `${activeTheme.colors.themeWhite}`,
											}}
										>
											{subT.name}
										</Link>
									</List.Item>
								))}

							{footer.subTitle &&
								footer.subTitle.map((subT) =>
									subT.name === 'Facebook' ? (
										<Link
											to={subT.link}
											style={{
												color: `${activeTheme.colors.themeWhite}`,
											}}
										>
											<FacebookOutlined
												style={{
													fontSize: '1.5rem',
													paddingRight: '5px',
												}}
											/>
										</Link>
									) : subT.name === 'Instagram' ? (
										<Link
											to={subT.link}
											style={{
												color: `${activeTheme.colors.themeWhite}`,
											}}
										>
											<InstagramOutlined
												style={{
													fontSize: '1.5rem',
													color: `${activeTheme.colors.themeWhite}`,
													paddingRight: '5px',
												}}
											/>
										</Link>
									) : null,
								)}
						</List>
					</Col>
				))}
			</Row>
			<Row style={{ background: `${activeTheme.colors.themeBlue}` }}>
				<Col
					span={24}
					style={{
						textAlign: 'center',
						color: `${activeTheme.colors.themeWhite}`,
						paddingTop: '40px',
					}}
				>
					{copyrightLabel}
				</Col>
			</Row>
		</>
	);
};
