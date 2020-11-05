import React from 'react';

import { Row, Col, List } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import './footer.css';

export interface FooterProps {
	/**
	 * Footer Sessions and Respective Links
	 */
	footerLinks: {
		title: string;
		links?: string[];
		social?: string[];
	}[];
	/**
	 * Copyright
	 */
	copyrightLabel: string;
}

export const Footer: React.FC<FooterProps> = ({ footerLinks, copyrightLabel }: FooterProps) => {
	return (
		<>
			<Row className="footer-background">
				<Col offset={1}></Col>
				{footerLinks.map((footer, index) => (
					<Col offset={1} span={5}>
						<List
							header={<strong>{footer.title}</strong>}
							size="small"
							bordered={false}
							key={index}
						>
							{footer.links &&
								footer.links.map((link) => (
									<List.Item className="footer-list-no-border">{link}</List.Item>
								))}
                            {footer.social &&
                                footer.social.map((network) => (
                                    (network === 'Facebook') ? <FacebookOutlined className="footer-main-page-social-icon"/> :
                                    (network === 'Instagram') ? <InstagramOutlined className="footer-main-page-social-icon"/> : 
                                    null
                                ))}
						</List>
					</Col>
				))}
			</Row>
			<Row className="footer-background">
				<Col span={24} className="footer-main-page-copyright">
					{copyrightLabel}
				</Col>
			</Row>
		</>
	);
};
