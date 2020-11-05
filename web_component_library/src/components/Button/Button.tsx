import React from 'react';

import { Button as BaseButton } from 'antd';
import './button.css';

export interface ButtonProps {
	/**
	 * Type of button
	 */
	type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
	/**
	 * What background color to use
	 */
	shape?: 'circle' | 'round';
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'middle' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Disable?
	 */
	disabled?: boolean;
	/**
	 * Danger
	 */
	danger?: boolean;
	/**
	 * Icon
	 */
	icon?: any;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ label, ...props }: ButtonProps) => {
	return <BaseButton {...props}>{label}</BaseButton>;
};
